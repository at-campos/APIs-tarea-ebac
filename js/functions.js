console.log("Hello show!");


const createShowcard = (showArray) => {
    const card = document.createElement("section");
    card.classList.add("showcard");

    //contenedor #1
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("showcard__image-container");

    const image = document.createElement("img");
    image.classList.add("showcard__image");
    image.src = showArray.show.image.medium;

    imageContainer.appendChild(image);

    //contenedor #2
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("showcard__info");

    const title = document.createElement("h2");
    title.classList.add("showcard__info-name");
    title.textContent = showArray.show.name;

    const type = document.createElement("p");
    type.classList.add("showcard__info-type");
    type.textContent = showArray.show.type;

    const lang = document.createElement("p");
    lang.classList.add("showcard__info-lang");
    lang.textContent = showArray.show.language;

    const genre = document.createElement("p");
    genre.classList.add("showcard__info-genre");
    genre.textContent = showArray.show.genres;

    const status = document.createElement("p");
    status.classList.add("showcard__info-status");
    status.textContent = showArray.show.status;

    dataContainer.appendChild(title);
    dataContainer.appendChild(type);
    dataContainer.appendChild(lang);
    dataContainer.appendChild(genre);
    dataContainer.appendChild(status);

    //tarjeta
    card.appendChild(imageContainer);
    card.appendChild(dataContainer);

    cardAdder(card);
}

const createSingle = (singleShow) => {
    console.log("create single");
    const card = document.createElement("section");
    card.classList.add("showcard");
    card.classList.add("showcard__extend");

    //contenedor #1
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("showcard__image-container");

    const image = document.createElement("img");
    image.classList.add("showcard__image");
    image.src = singleShow.image.medium;

    imageContainer.appendChild(image);

    //contenedor #2
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("showcard__info");

    const title = document.createElement("h2");
    title.classList.add("showcard__info-name");
    title.textContent = singleShow.name;

    const type = document.createElement("p");
    type.classList.add("showcard__info-type");
    type.textContent = singleShow.type;

    const lang = document.createElement("p");
    lang.classList.add("showcard__info-lang");
    lang.textContent = singleShow.language;

    const genre = document.createElement("p");
    genre.classList.add("showcard__info-genre");
    genre.textContent = singleShow.genres;

    const status = document.createElement("p");
    status.classList.add("showcard__info-status");
    status.textContent = singleShow.status;

    dataContainer.appendChild(title);
    dataContainer.appendChild(type);
    dataContainer.appendChild(lang);
    dataContainer.appendChild(genre);
    dataContainer.appendChild(status);

    //tarjeta
    card.appendChild(imageContainer);
    card.appendChild(dataContainer);

    cardAdder(card);

    const synopsisCard = document.createElement("section");
    synopsisCard.classList.add("showcard");
    synopsisCard.classList.add("showcard__synopsis");
    const description = document.createElement("h2");
    description.textContent = "Sinopsis";
    const synopsis = document.createElement("p");
    synopsis.textContent = singleShow.summary;
    const dateStarted = document.createElement("p");
    dateStarted.textContent = "Inicio: " + singleShow.premiered;
    const rating = document.createElement("p");
    rating.textContent = "Rating: " + singleShow.rating.average;

    synopsisCard.appendChild(description);
    synopsisCard.appendChild(synopsis);
    synopsisCard.appendChild(dateStarted);
    synopsisCard.appendChild(rating)

    cardAdder(synopsisCard);
}

const cleaner = () => {
    cardGrid.innerHTML = '';
}

const singlePlacer = (showPlaced) => {
    cleaner();
    const newShowCard = createSingle(showPlaced);
}

const cardAdder = (card) => {
    cardGrid.appendChild(card);
}

const cleanAndPopulate = (showArray) => {
        cleaner();

        for(const show of showArray){
            console.log(show);
            const newShowCard = createShowcard(show);
        }
}

const showSearch = async () => {
    const search = document.getElementById('search-input').value.toLowerCase();
    if(search){
        try {
            const response = await axios.get("https://api.tvmaze.com/search/shows", {params: {q: search}});
            const showList = response.data;

            cleanAndPopulate(showList);
        } catch (error) {
            console.error("Bad query - ", error);
        }
    }
}

const exactSearch = async () => {
    const search = document.getElementById('search-input').value.toLowerCase();
    if(search){
        try {
            const response = await axios.get("https://api.tvmaze.com/singlesearch/shows", {params: {q: search}});
            const singleShow = response.data;

            singlePlacer(singleShow);
        } catch (error) {
            console.error("Bad query - ", error);
        }
    }
}

const hoverInto = (el) => {
    el.target.style.opacity = "0.5";
}

const hoverOutOf = (el) => {
    el.target.style.opacity = "1";
}

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById("search-button");
    const exactSearchBtn = document.getElementById("single-search-button");
    const cardGrid = document.getElementById("cardGrid");

    searchButton.addEventListener('click', showSearch);
    searchButton.addEventListener('mouseenter', hoverInto);
    searchButton.addEventListener('mouseleave', hoverOutOf);

    exactSearchBtn.addEventListener('click', exactSearch);
    exactSearchBtn.addEventListener('mouseenter', hoverInto);
    exactSearchBtn.addEventListener('mouseleave', hoverOutOf);
    
    document.getElementById('search-input').addEventListener('keypress', function (e) {
        if(e.key === 'Enter'){
            console.log("asfasd");
            showSearch();
        }
  })
});
