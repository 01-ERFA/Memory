export class modify_html {

    constructor(tag){
        this.tag = tag
    }

    verification_0(element) {
        if (element instanceof Element === true) {
            return true
        } else {
            return false
        }
    } 
    
    create_child(child, attributes) {
        if (this.verification_0(this.tag) === false) {
            return false
        }
        if (typeof child === 'string') {
            let new_tag = document.createElement(child)       
            if (Array.isArray(attributes)) {
                for (let index = 0; index < attributes.length; index++) {
                    if (typeof attributes[index]?.name === 'string' && typeof attributes[index]?.value === 'string') {
                        new_tag.setAttribute(attributes[index]?.name, attributes[index]?.value)
                    }
                }
            } else if (typeof attributes === 'object' && !Array.isArray(attributes)){
                const keys = Object.values(attributes)
                for (let index = 0; index < keys.length; index++) {
                    if (typeof keys[index]?.name === 'string' && typeof keys[index]?.value === 'string') {
                        new_tag.setAttribute(keys[index]?.name, keys[index]?.value)
                    }
                }
            }
            this.tag.appendChild(new_tag)
            return true
        }
    }

    add_html(new_html) {
        if (!this.verification_0(this.tag)) {
            return false
        }
        if (this.verification_0(new_html) === true) {
            this.tag.appendChild(new_html)
            return true
        }

        
        function isValidHtml(htmlString) {
            function isValidHTML(str) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(str, "text/html");
                return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
            }
            const validTags = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'];
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const elements = doc.querySelectorAll('*');
            for (let i = 0; i < elements.length; i++) {
              const tagName = elements[i].tagName.toLowerCase();
              if (!validTags.includes(tagName)) {
                return false;
              }
            }

            if (isValidHTML(htmlString)) {
                return true;
            } else {
                return false;
            }
          }

        function add(tag, value) {
            const initial_html = tag.innerHTML
            let html = tag.innerHTML
            try {
                switch (typeof value) {
                    case 'string':
                        if (isValidHtml(value)) {
                            tag.innerHTML = html+value
                            return true;
                        } else {
                            return false;
                        }
                    case 'object':
                        if (Array.isArray(value)) {
                            for (let index = 0; index < value.length; index++) {
                                if (isValidHtml(typeof value[index] !== 'string'? JSON.stringify(value[index]):value[index])) {
                                    html = typeof value[index] !== 'string'? html+JSON.stringify(value[index]):html + value[index]
                                    tag.innerHTML =  html
                                }else {
                                    tag.innerHTML = initial_html
                                    return false
                                }
                            }
                            return true;    
                        } else if(typeof value === 'object' && !Array.isArray(value)) {
                            const values_of_value = Object.values(value)
                            for (let index = 0; index < values_of_value.length; index++) {
                                if (isValidHtml(typeof values_of_value[index] !== 'string'? JSON.stringify(values_of_value[index]):values_of_value[index])) {
                                    html = typeof values_of_value[index] !== 'string'? html+JSON.stringify(values_of_value[index]):html + values_of_value[index]
                                    tag.innerHTML =  html
                                } else {
                                    tag.innerHTML = initial_html
                                    return false
                                }
                            }
                            return true; 
                        } 
                        return false;
                    // 
                    case 'function':
                        return add(tag, value())
                    default:
                        return false
                }
            } catch (error) {
                return false
            }
        }
        return add(this.tag, new_html)
    }

    change_html(new_html) {
        if (!this.verification_0(this.tag)) {
            return false
        }
        if (typeof new_html !== 'string' ) {
            if (this.verification_0(new_html) === true) {
                this.tag.innerHTML = new_html.outerHTML
                return true
            }
            return false
        }
        this.tag.innerHTML = new_html
        return true
    }

    add_or_change_attribute(name, value) {
        if (!this.verification_0(this.tag)) {
            return false
        }
        this.tag.setAttribute(name, value)
    }

    remove_attribute(attribute) {
        if (!this.verification_0(this.tag)) {
            return false
        }
        this.tag.removeAttribute(attribute)
    }
}

export function generate_app() {
    const body = new modify_html(document.querySelector('body'))
    body.create_child('div', [{name:'id', value: 'app'}])
    // const body = document.querySelector('body')
    // const app = document.createElement('div')
    // app.setAttribute('id', 'app')
    // body.appendChild(app)
    return document.getElementById('app')
}
