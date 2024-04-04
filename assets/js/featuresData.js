// featuresData.js

const features_URL = "assets/json/features.json";
const group = document.querySelector(".group-end");

export async function featuresData() {
    const data = await fetch(features_URL);
    const jsonData = await data.json();
    for (const datas of jsonData) {
        group.innerHTML += `
            <div class="group-9">
                <img src="${datas.image}" alt="">
                <h1>${datas.title}</h1>
                <p>${datas.explanation}</p>
            </div>`;
    }
}
