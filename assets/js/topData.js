
const data_URL = "assets/json/data.json";
const topp = document.querySelector(".group-1");

export async function topData() {
    const data = await fetch(data_URL);
    const jsonData = await data.json();
    topp.innerHTML += `
        <div class="group-text">
            <h1>${jsonData.top.title}</h1>
            <p>${jsonData.top.explanation}</p>
            <div class="group-button">
                <a href="#">${jsonData.top.button}</a>
                <span>${jsonData.top.date}</span>
            </div>
        </div>
        <div class="wallpaper">
            <img src=${jsonData.top.image} alt="">
        </div>
    `;
}
