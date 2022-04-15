const axios = require('axios');

class HttpHandler {
    headers(headers) {
        const basicHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        return headers ? Object.assign(basicHeaders, headers) : basicHeaders;
    }

    get(url, headers = this.headers()) {
        return axios(
            {
                method: 'get',
                url: url,
                headers: headers,
            },
        ).then(function (response) {
            return response;
        }).catch(function (error) {
            return error.response;
        });
    }

    post(url, data, headers = this.headers()) {
        return axios(
            {
                method: 'post',
                url: url,
                data: data,
                headers: headers,
            },
        ).then(function (response) {
            return response;
        }).catch(function (error) {
            return error.response;
        });
    }

    delete(url, headers = this.headers()) {
        return axios(
            {
                method: 'delete',
                url: url,
                headers: headers,
            },
        ).then(function (response) {
            return response;
        }).catch(function (error) {
            return error.response;
        });
    }

    put(url, data, headers = this.headers()) {
        return axios(
            {
                method: 'put',
                url: url,
                data: data,
                headers: headers,
            },
        ).then(function (response) {
            return response;
        }).catch(function (error) {
            return error.response;
        });
    }
}

module.exports = new HttpHandler();