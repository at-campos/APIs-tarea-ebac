console.log("Hello show!");

const createShowcard = (show) => {
    const card = document.createElement("section");
    card.classList.add("showcard");

    //contenedor #1
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("showcard__image-container");

    const image = document.createElement("img");
    image.classList.add("showcard__image");
    image.src = show.image.medium;

    imageContainer.appendChild(image);

    //contenedor #2
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("showcard__info");

    const title = document.createElement("h2");
    title.classList.add("showcard__info-name");
    title.textContent = show.name;

    const type = document.createElement("p");
    type.classList.add("showcard__info-type");
    type.textContent = show.type;

    const lang = document.createElement("p");
    lang.classList.add("showcard__info-lang");
    lang.textContent = show.language;

    const genre = document.createElement("p");
    genre.classList.add("showcard__info-genre");
    genre.textContent = show.genres;

    const status = document.createElement("p");
    status.classList.add("showcard__info-status");
    status.textContent = show.status;

    dataContainer.appendChild(title);
    dataContainer.appendChild(type);
    dataContainer.appendChild(lang);
    dataContainer.appendChild(status);

    //tarjeta
    card.appendChild(imageContainer);
    card.appendChild(dataContainer);

    const cardGrid = document.getElementById("cardGrid");
    cardGrid.appendChild(card);
}

/*

/*TODO: Delete */
/*document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://api.tvmaze.com/search/shows", {params: {q: "simpsons"}})
        .then((response) => {
            const data = response.data;
            //console.log(data);

        }) .catch((error) => {
            console.log(error);
        })
});

/*TODO: Delete */

document.addEventListener("DOMContentLoaded", () => {
    showQuery();
})
const showQuery = async () => {
    const cardGrid = document.getElementById("cardGrid");
    try{
        const showListRaw = await axios.get("https://api.tvmaze.com/search/shows", {params: {q: "simpsons"}});
        const showList = showListRaw.data;
        console.log(showList);
    } catch(error){}
}