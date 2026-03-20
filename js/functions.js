console.log("Hello show!");

/*
const createShowcard = (show) => {
    const card = document.createElement("div");
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

}*/

document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://api.tvmaze.com/search/shows", {params: {q: "simpsons"}})
        .then((response) => {
            const data = response.data;
            console.log(data);
        }) .catch((error) => {
            console.log(error);
        })
});