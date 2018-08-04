import $ from 'jquery';

class ServiceBase {
    constructor(baseUrl = '/') {
        this.BaseUrl = baseUrl;

    }

    call(endpoint, data) {
        return $.ajax({
            data: JSON.stringify(data),
            type: 'POST',
            contentType: 'application/json',
            url: this.BaseUrl + endpoint
        });
    }
}

module.exports = ServiceBase;