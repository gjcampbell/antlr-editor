class PubSub {
    constructor() {
        let listeners = {};

        this.subscribe = (topic, handler) => {
            let topics = (typeof topic === 'string' ? [topic] : topic).map(t => (listeners[t] || (listeners[t] = []))),
                result = {
                    dispose: () => topics.forEach(t => t.splice(t.indexOf(handler), 1))
                };

            topics.forEach(t => t.push(handler));

            return result;
        };

        this.publish = (topic, ...data) => {
            if (listeners[topic]) {
                listeners[topic].forEach((handler) => {
                    try {
                        handler(...data);
                    } catch (err) {
                        console.error(`Subscriber error caught, topic, data, handler to follow: `, topic, data, handler);
                    }
                });
            }
        };
    }
}

module.exports = new PubSub();