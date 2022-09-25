export const request = (options) => {
    const headers = new Headers();
    if (options.multipart === undefined) {
        headers.append('Content-Type', 'application/json')
    }
    
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options).then(response =>
        response.json().then(json => {
            return json;
        }).catch(err => {
            console.log("Error while hiting this api ", options.url, " :: ", err);
        })
    ).catch(err => {
        console.log("Error while hiting this api ", options.url, " :: ", err);
    });
};