
class Newsapi {

    apiKey = "4a5de1e54b304bf2909af12bf979c242"
    urlTemplate = "http://newsapi.org/v2/everything?"
    attributes =  {
        q:'tesla',
        from:'2021-02-10',
        sortBy:'publishedAt',
        apiKey:this.apiKey
    }
    //q=tesla&from=2021-02-10&sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242"

    // www.google.com/search POST

    // GET 
    //www.google.com/search?key=abc&key2=def&...
    getData() {
        console.log('getData')
        
        this.generateUrl()

        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.parseNewsObject(data.articles)

                let webpage = document.getElementById('news')
                webpage.innerHTML = news.getAllCardsHTML()
            });
    }


    generateNewsCard() {
        let card = `
        <div class="card m-1" style="width: 18rem;">
            ${this.getNewsImage()}
            <div class="card-body">
            <h5 class="card-title">${this.getNewsTitle()}</h5>
            <p class="card-text">${this.getNewsBody()}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
        return card
    }


    getNewsTitle() {
        return this._NewsTitle
    }
    getNewsBody() {
        return this._NewsBody
    }
    getNewsImage() {
        let img = `<img src="${this._NewsImage}" class="card-img-top" alt="${this.getNewsTitle()}">`
        return img
    }

    getAllCardsHTML() {
        console.log('getAllCardsHTML')
        return this._cards
    }

    parseNewsObject(newsAllData) {
        if (typeof newsAllData == "object") {
            this._cards = ''
            newsAllData.forEach(element => {
                this.parseNewsItem(element)
                this._cards += this.generateNewsCard()
            });
        }
    }

    parseNewsItem(newsItem) {
        if (typeof newsItem == "object") {
            this._NewsTitle = newsItem.title
            this._NewsBody = newsItem.content
            this._NewsImage = newsItem.urlToImage
        }
    }

    generateUrl(){

        let attributes = ''
        Object.entries(this.attributes).forEach(element => {
            console.log(element)
            // key=value&key=value&key=value&
            attributes += element[0] + '=' + element[1] + '&' 
        })
        this.url = this.urlTemplate + attributes.substr(0, attributes.length - 1)
        // v1
        //this.url = this.url.substr(0, this.url.length - 1) 
        // v2 
        //console.log(Object.entries(this.attributes).join('&'))

    }

} // end class

let news = new Newsapi()
news.getData()

// search
//document.getElementById('news')
let frm = document.querySelector('form')
let btn = frm.querySelector('button[type=button]')
let q = frm.querySelector('input[name=queryKeyword]')


btn.addEventListener('click', function (event) {
    console.log('you clicked the button')
    console.log(event)
    // get input value and set it in class 
    
    news.attributes.q = q.value
    news.getData()
    //if (event.ctrlKey == true) console.log(q.value)

})
btn.addEventListener('dblclick', function () {
    console.log('you double clicked the button')
})




