function includeHTML(attribute) {
    let elements, element, file, http;
    elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        element = elements[i];
        file = element.getAttribute(attribute);
        if (file) {
            http = new XMLHttpRequest();
            http.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = "Page not found.";}
                    element.removeAttribute(attribute);
                    includeHTML();
                }
            }
            http.open("GET", file, true);
            http.send();
            return;
        }
    }
}