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

    const cardGrid = document.getElementById("cardGrid");
    cardGrid.appendChild(card);
}

const cleanAndPopulate = (showArray) => {
        cardGrid.innerHTML = '';

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
            console.log(showList);

            cleanAndPopulate(showList);
        } catch (error) {
            console.error("Bad query - ", error);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("search-button").addEventListener('click', showSearch);
    document.getElementById('search-input').addEventListener('keypress', function (e) {
        if(e.key === 'Enter'){
            console.log("asfasd");
            showSearch();
        }
  })
});
