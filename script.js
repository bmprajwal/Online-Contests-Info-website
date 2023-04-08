let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

let images = [
    "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283",
    "https://www.queensu.ca/gazette/sites/default/files/assets/WEB%20Coding%20arnold-francisca-nPhl2x4fk2s-unsplash.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfDYogvWtXVU6-wdj4Yd7bN26zI_s3cKk4uUzSggmJb4F_EejO4YRMlszyKkNumrcc1Y",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbV0vE2x7sJZ-VOaGUCmmY0xj-kzQqTxRtg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0DeOwF4LwqSR21nbPQIbtWw65K5utf7RrQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlrlB_0A6Gt1scR70C5y1UNwpZ7nOZVvYWw"
]



response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    iHTML = ""
    for(item in contests){
        let rand = Math.floor(Math.random() * images.length)
        console.log(contests[item])
        iHTML += `
        <div class="card m-3" style="width: 20rem; background: burlywood; padding: 8px">
            <img src="${images[rand]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${contests[item].name}</h5>
              <p class="card-text">Start Time: ${contests[item].start_time}</p>
              <p class="card-text">End Time: ${contests[item].end_time}</p>
              <p class="card-text">Site: ${contests[item].site}</p>
              <p class="card-text">In 24 Hours?: ${contests[item].in_24_hours}</p>
              <a href="${contests[item].url}" class="btn btn-primary">Visit here</a>
            </div>
          </div>
        `
    }
    let cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = iHTML
})
