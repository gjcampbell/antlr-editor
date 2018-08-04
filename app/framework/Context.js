import $ from 'jquery';

Context.IdSequence = {
    Current: 0,
    next: function () {
        return ++this.Current;
    },
    reseed: function (id) {
        this.Current = Math.max(this.Current, (id || 0) + 1);
    }
};
Context.load = function (contextSaveData) {
    var result = null,
        addContext = function (contextSaveData, parent) {
            Context.IdSequence.reseed(contextSaveData.Id);
            var context = new Context(contextSaveData.Data, parent, contextSaveData.Id);

            context.Children.forEach(function (childSaveData) {
                addContext(childSaveData, context);
            });

            return context;
        };

    result = addContext(contextSaveData, null);

    return result;
};

function Context(data, parent, id) {
    data = data || {};
    var self = this,
        changeManager = new ContextDataChangeManager(data),
        events = new EventList();

    this.Children = [];
    this.Id = id || Context.IdSequence.next();

    this.get = function (key) {
        return data.hasOwnProperty(key) ? data[key]
            : parent ? parent.get(key)
                : undefined;
    };

    this.set = function (key, newValue) {
        return changeManager.updateValue(key, self.copyObj(newValue));
    };

    this.broadcast = function (eventName) {
        var data = Array.prototype.slice.call(arguments, 1);
        events.call(eventName, data);
    };

    this.changing = function (varNames, callback) {
        // subscribe to parent if parent has defined the listened var?
        return changeManager.addChangingListener(varNames, callback);
    };
    this.changed = function (varNames, callback) {
        // subscribe to parent if parent has defined the listened var?
        return changeManager.addChangedListener(varNames, callback);
    };
    this.subscribe = function (eventNames, callback) {
        return events.add(eventNames, callback);
    };

    this.save = function () {
        return {
            Id: self.Id,
            Data: $.extend({}, data),
            Children: self.Children.map(function (child) {
                return child.save();
            })
        };
    };

    this.find = function (contextId) {
        if (this.Id === contextId) {
            return self;
        }

        return self.Children.filter(function (child) {
            return child.find(contextId);
        })[0] || null;
    };

    this.monitor = function () {
        return {
            Data: data,
            ChangeManager: changeManager,
            Events: events
        };
    };

    this.copyObj = function (value) {
        var newValue;
        if (!value) { return value }
        switch (Object.prototype.toString.call(value)) {
            case "[object Array]":
                newValue = [];
                value.forEach(function (elem) {
                    newValue.push(self.copyObj(elem));
                });
                return [].concat(newValue);
            case "[object Object]":
                newValue = {};
                Object.keys(value).forEach(function (key) {
                    newValue[key] = self.copyObj(value[key]);
                });
                break;
            default:
                return value;
        }
        return newValue;
    };

    if (parent) {
        parent.Children.push(this);
    }
}

function ContextDataChangeManager(data) {
    var self = this,
        changingListeners = new EventList(),
        changedListeners = new EventList();

    this.monitor = function () {
        return {
            ChangingListeners: changingListeners,
            ChangedListeners: changedListeners
        };
    };

    this.updateValue = function (name, newValue) {
        var deferred = $.Deferred(),
            currentValue = data[name],
            listenerIndex = 0,
            changingListenerList = changingListeners.getListeners(name),
            cancelled = false,
            continueChanging = function () {
                while (listenerIndex < changingListenerList.length && !cancelled) {
                    changingListenerList[listenerIndex](eventData);
                    listenerIndex++;

                    if (eventData.isWaiting()) {
                        return;
                    }
                }

                onChangingFinished();
            },
            cancel = function () {
                deferred.reject();
            },
            newValueAccessor = function () {
                return self.ensureImmutable(newValue);
            },
            eventData = new PausableEventData(name, newValueAccessor, currentValue, continueChanging, cancel),
            onChangingFinished = function () {
                data[name] = newValue;

                changedListeners.call(name, [new EventData(name, newValueAccessor, currentValue)]);

                deferred.resolve();
            };

        if (newValue !== currentValue) {
            newValue = this.ensureImmutable(newValue);
            continueChanging();
        } else {
            deferred.resolve();
        }

        return deferred.promise();
    };

    this.addChangingListener = function (varNames, callback) {
        return changingListeners.add(varNames, callback);
    };
    this.addChangedListener = function (varNames, callback) {
        return changedListeners.add(varNames, callback);
    };

    this.ensureImmutable = function (newValue) {
        if (typeof newValue === 'object') {
            newValue = Object.prototype.toString.call(newValue) === '[object Array]' ? newValue.slice()
                : $.extend(true, {}, newValue);
        }

        return newValue;
    };
}

function EventList() {
    this.Listeners = {};
    this.GlobalListeners = [];
}

EventList.prototype.add = function (names, callback) {
    var self = this,
        names = typeof names === 'string' ? [names] : names,
        disposers = [];

    names.forEach(function (name) {
        var disposer;

        if (!self.Listeners[name]) {
            self.Listeners[name] = new ListenerList();
        }

        disposer = self.Listeners[name].add(callback);

        disposers.push(disposer);
    });

    return {
        dispose: function () {
            disposers.forEach(function (disposer) { disposer(); });
        }
    };
};

EventList.prototype.getListeners = function (name) {
    var result = [];
    this.forEach(name, function (listener) {
        result.push(listener);
    });

    return result;
};

EventList.prototype.call = function (name, eventData) {
    this.GlobalListeners.forEach(function (listener) {
        listener(name, eventData);
    });
    this.forEach(name, function (listener) {
        listener.apply(null, eventData);
    });
};

EventList.prototype.forEach = function (name, callback) {
    if (this.Listeners[name]) {
        this.Listeners[name].forEach(callback);
    }
};

function ListenerList() {
    this.lastSubscriptionId = 0;
    this.List = {};
}

ListenerList.prototype.add = function (listener) {
    var self = this,
        subscriptionId = ++this.lastSubscriptionId;

    this.List[subscriptionId] = listener;

    return function () { delete self.List[subscriptionId]; };
};

ListenerList.prototype.forEach = function (callback) {
    for (var i in this.List) {
        callback(this.List[i]);
    }
};

function EventData(name, newValueAccessor, oldValue) {
    this.Name = name;
    this.OldValue = oldValue;
    Object.defineProperty(this, 'NewValue', {
        get: newValueAccessor
    })

    Object.freeze(this);
}

function PausableEventData(name, newValueAccessor, oldValue, onResume, onCancel) {
    var wait = false,
        cancelled = false,
        resumed = false;

    this.wait = function () {
        wait = true;
        return {
            resume: function () {
                if (!cancelled) {
                    wait = false;
                    onResume();
                }
            },
            cancel: function () {
                if (!resumed) {
                    cancelled = true;
                    onCancel();
                }
            }
        }
    };
    this.isWaiting = function () {
        return wait;
    };

    EventData.apply(this, arguments);
}

function ModuleContextWrapper(context, callbackWrapper, component) {
    var subscriptions = [],
        self = this,
        callbackWrapper = callbackWrapper || function (callback) {
            return function () {
                try {
                    callback.apply(null, self.copyObj(Array.prototype.slice.apply(arguments)));
                } catch (err) {
                    console.error('threw an exception while handling a context event', arguments, err);
                }
            }
        };

    this.disposeSubscriptions = function () {
        subscriptions.forEach(function (subscription) {
            subscription.dispose();
        });
    };

    this.ActualContext = context;

    this.Wrapper = {
        get: function (key) {
            var value = context.get(key)
            return self.copyObj(value);
        },
        set: context.set,
        broadcast: context.broadcast,
        changing: function (varNames, callback) {
            var subscription = context.changing(varNames, callbackWrapper(callback));
            subscriptions.push(subscription);
            return subscription;
        },
        changed: function (varNames, callback) {
            var subscription = context.changed(varNames, callbackWrapper(callback));
            subscriptions.push(subscription);
            return subscription;
        },
        subscribe: function (eventNames, callback) {
            var subscription = context.subscribe(eventNames, callbackWrapper(callback));
            subscriptions.push(subscription);
            return subscription;
        },
        createAccessor: function (key) {
            var result = function () {
                if (arguments.length) {
                    self.Wrapper.set(key, arguments[0])
                } else {
                    return self.Wrapper.get(key);
                }
            };
            result.changing = function (callback) { self.Wrapper.changing(key, callback); };
            result.changed = function (callback) { self.Wrapper.changed(key, callback); };

            return result;
        },
        create: function (key, initialValue) {
            var result = self.Wrapper.createAccessor(key);

            if (initialValue !== undefined) {
                if (self.Wrapper.get(key) === undefined) {
                    self.Wrapper.set(key, initialValue);
                }
            }

            result.changed(function () {
                component.forceUpdate();
            })

            return result;
        }
    };

    this.copyObj = function (value) {
        var newValue;
        if (!value) { return value }
        switch (Object.prototype.toString.call(value)) {
            case "[object Array]":
                newValue = [];
                value.forEach(function (elem) {
                    newValue.push(self.copyObj(elem));
                });
                return [].concat(newValue);
            case "[object Object]":
                newValue = {};
                Object.keys(value).forEach(function (key) {
                    newValue[key] = self.copyObj(value[key]);
                });
                break;
            default:
                return value;
        }
        return newValue;
    };
}


module.exports = {
    Context: Context,
    ContextWrapper: ModuleContextWrapper
};