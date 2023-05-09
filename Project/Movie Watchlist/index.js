const movieTitle = document.querySelector('.search-input');
const searchButton = document.querySelector('#btn');
const mainContainer = document.querySelector('.main-container');
let displayHtml = ''

searchButton.addEventListener('click', async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=b974091b&s=${movieTitle.value}`, {method: 'GET'})
    const data = await res.json()
    const movieDetails = []

    data.Search.forEach((movie) => {
        if (!movieDetails.includes(movie.Title)) {
            movieDetails.push(movie.Title)
        }
    })

    movieDetails.forEach((movieTitle) => {
        displayMovieDetail(movieTitle)
    })
})


const displayMovieDetail = async (movieDetails) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=b974091b&t=${movieDetails}`)
    const data = await res.json()
    console.log(data)
    const posterUrl = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/150x200.png?text=No+Image";

    displayHtml += 
    `
    <div class='display-container'>
        <img class='poster' src="${posterUrl}">
        <div class='movie-information'>
            <div class='movie-container'>
                <div class='title-rating'>
                    <h1>${data.Title}</h1>
                    <i class="fa-solid fa-star" style="color: #fbf437;"></i>
                    <p>${data.imdbRating}</p>
                </div>
                <div class='runtime-genre'>
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <button id="watchlist-btn">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Watchlist</span>
                    </button>
                </div>
                <p class='plot'>${data.Plot}</p>
            </div>
        </div>
    </div>
    `
    
    mainContainer.innerHTML = displayHtml
}






// displayHtml += 
//         `
//         <div>
//             <img src="${movie.Poster}">
//             <div>
//                 <h1>${movie.Title}</h1>
//                 <div>
//                     <p>${movie.Time}</p>
//                 </div>
//             </div>
//         </div>
//         <hr/>
//         `