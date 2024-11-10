function ChangeGridType() {
    const gridType = +document.getElementById("grid-type-selector").value;

    let settingsDivs = [ // Include all grid types here, based on the IDs of the divs in html
        document.getElementById("square-grid-settings"),
        document.getElementById("other-grid-settings")
    ];
    // Hide all divs, then show the one selected
    settingsDivs.forEach(div => div.style.display = "none");
    settingsDivs[gridType].style.display = "block";

    document.getElementById("download-button").style.display = "block";

    GenerateGrid();
}

function GenerateGrid() {
    const gridType = document.getElementById("grid-type-selector").value;
    if (gridType == "0") {
        SquareGrid();
    } else if (gridType == "1") {
        OtherGrid();
    }
}

function downloadImage() {
    const imageContainer = document.getElementById("image-container");
    const image = imageContainer.querySelector("img");
    if (!image) {
        alert("No image to download.");
        return;
    }
    const link = document.createElement("a");
    link.href = image.src;
    link.download = "grid.png";
    link.click();
}