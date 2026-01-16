function loadHtml(id, url, callback) {
    const element = document.getElementById(id);
    if (!element) return;
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Could not load ${url}: ${response.statusText}`);
        }
        return response.text();
    }).then(data => {
        element.innerHTML = data;
        if (callback) callback();
    }).catch(error => {
        console.error(error);
    });
}