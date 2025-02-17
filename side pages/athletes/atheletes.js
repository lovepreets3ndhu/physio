const btnInternational = document.getElementById("show-international");
const btnNational = document.getElementById("show-national");
const galleryItems = document.querySelectorAll(".image-item");

btnInternational.addEventListener("click", () => {
    toggleGallery("international");
    btnInternational.classList.add("active");
    btnNational.classList.remove("active");
});

btnNational.addEventListener("click", () => {
    toggleGallery("national");
    btnNational.classList.add("active");
    btnInternational.classList.remove("active");
});

function toggleGallery(type) {
    galleryItems.forEach((item) => {
        if (item.classList.contains(type)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Default: Show international images
toggleGallery("international");
