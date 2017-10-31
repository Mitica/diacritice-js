
require('cross-fetch/polyfill');

module.exports = function diacritice(text) {
    if (!text) {
        return Promise.reject(new Error('`text` is required!'));
    }
    
    var body = 'text=' + encodeURIComponent(text);

    return fetch('https://diacritice.ai/predict', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: body
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error('Bad response from server: ' + response.status));
            }
            return response.json();
        });
}
