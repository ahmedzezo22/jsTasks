
fetch('http://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=a7de7386a4ab41f48f8f23a206fbf8c7').then(res=>{
        if(res.status==200){
           return res.json()

        }
        else throw new Error('error')
    }).then(response=>{
        
            for(i=0;i<response.articles.length;i++) {
                console.log(response.articles)
                console.log(response.articles[i].title.length)
            document.querySelector('.row').innerHTML+=
            `
              <div class="col-md-4">
                <div class="panel panel-default" style="margin-bottom:20px">
               <div class="panel-heading"><img src=${response.articles[i].urlToImage}></div>
              <div class="panel-body"><h3>${response.articles[i].title}</h3><br>${response.articles[i].content>50?response.articles[i].content>response.articles[i].content.substr(0,50):response.articles[i].content}
              <br><p style="    word-break: break-all;">${response.articles[i].description.length>50?response.articles[i].description.substr(0,100):response.articles[i].description}<p>
              <h5>${response.articles[i].author}</h5>
              </div>
              </div>
            </div>
            </div>`
            }
           

})
.catch(e=>console.log(e))


