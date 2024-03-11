class Post extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
        this.root = this.shadowRoot
    }

    connectedCallback() {
        const container = document.createElement('div')
        const data = document.createElement('p')
        const content = document.createElement('p')

        data.textContent = this.data
        content.textContent = this.content

        container.classList.add('container')        
        data.classList.add('data')
        content.classList.add('content')

        container.appendChild(data)
        container.appendChild(content)

        this.root.appendChild(container)
    }

    get content() {
        return this.getAttribute('content')
    }

    set content(value) { 
        return this.setAttribute('content', value ?? 'Cannot find content')
    }

    get data() {
         return this.getAttribute('data')
    }

    set data(value) {
        this.setAttribute('data', value ?? 'Cannot find data')
    }
}

customElements.define('my-post', Post)