

const image_URL = "assets/json/middle.json";
const middle = document.querySelector(".group-2");

export async function middleData() {
    const response = await fetch(image_URL);
    const data = await response.json();
    middle.innerHTML += `
        <div class="gruop-img">
            <img class="bitmap-4" src="${data.smallImage}" alt="">
            <img class="bitmap-4 bitmap-5" src="${data.largeImage}" alt="">
        </div>
        <div class="group-2-text">
            <h1>${data.title}</h1>
            <p>${data.explanation}</p>
        </div>`;
}
