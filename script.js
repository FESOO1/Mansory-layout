const container = document.querySelector('.container');

async function mansoryData() {
    for (let i = 0; i < 10; i++) {

        const response = await fetch('./JSON-data.json');
        const jsonData = await response.json();

        const picture = document.createElement('img');
        picture.classList.add('picture');
        picture.setAttribute('src', `${jsonData[i].url}`);
        container.append(picture);
        
    };
};

mansoryData();

window.addEventListener('DOMContentLoaded', mansoryData);