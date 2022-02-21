async function apiCall(url) {


    //add api call logic here
    try {
        let res = await fetch(url)
         let data = await res.json()
         return data
    } catch (error) {
        console.log("error:",error)
    }

}


function appendArticles(articles, main) {

    articles.forEach(element=>{
        let div = document.createElement('div')
        
        let image = document.createElement('img')

        div.addEventListener("click", newsHandler.bind(null,element))

        image.src=element.urlToImage


        let p1 = document.createElement('p')
        p1.innerText=element.source.name

        let p2 = document.createElement('p')
        p2.innerText=element.author

        let p3 = document.createElement('p')
        p3.innerText=element.title

        div.append(image,p1,p3,p2)
        main.append(div)
    })

}

function newsHandler(data) {
    console.log(data)
    localStorage.setItem("article", JSON.stringify(data))
    location.href="./news.html"
}

export { apiCall, appendArticles }