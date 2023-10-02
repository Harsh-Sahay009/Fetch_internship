const breedSelector = document.getElementById("breedSelector");
const gallery = document.getElementById("gallery");

// Fetch available breeds from the Dog API and populate the selector
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        for (let breed in data.message) {
            const option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            breedSelector.appendChild(option);
        }
    });

breedSelector.addEventListener("change", function() {
    fetchImagesForBreed(breedSelector.value);
});

function fetchImagesForBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
        .then(response => response.json())
        .then(data => {
            displayImages(data.message);
        });
}

function displayImages(images) {
    gallery.innerHTML = ''; // Clear current images
    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        gallery.appendChild(img);
    });
}
