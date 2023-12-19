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
        const style = document.createElement("style")
        style.textContent = `
        .card {
            margin: 3rem auto;
            width: 70%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          
          .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card_left > span {
            font-weight: 400;
          }
          
          .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card_left > p {
            color: rgb(70, 70, 70);
          }

          .card_right > img{
            height: 15rem;
            padding: 1rem;
            width: 25rem;
            }
`
        return style
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

