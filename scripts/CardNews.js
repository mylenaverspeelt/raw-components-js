class CardNews extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = this.createLeftCard()
        const cardRight = this.createRightCard()

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {

    }


    createLeftCard() {
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonimous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title") || "Sem conteúdo"
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content") || "Sem conteúdo"

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        return cardLeft
    }

    createRightCard() {
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("img-src") || "assets/no-image.jpg"
        
        return cardRight
    }

}

customElements.define("card-news", CardNews)

