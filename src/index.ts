
require('cross-fetch/polyfill');

export default async function diacritice(text: string): Promise<PredictData> {
    if (typeof text !== 'string' || !text) {
        throw new Error('"text" is invalid!');
    }

    var body = 'text=' + encodeURIComponent(text);

    const response = await fetch('https://diacritice.ai/predict', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: body
    });
    if (!response.ok) {
        return Promise.reject(new Error('Bad response from server: ' + response.status));
    }
    return response.json();
}

export type PredictData = {
    elapsedtime: number
    predictions: number
    text: string
}
