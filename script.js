function ChangeGridType() {
    const gridType = +document.getElementById("grid-type-selector").value;

    let settingsDivs = [ // Include all grid types here, based on the IDs of the divs in html
        document.getElementById("square-grid-settings"),
        document.getElementById("rectangle-grid-settings"),
         document.getElementById("hexagon-grid-settings"),
        // document.getElementById("other-grid-settings")
    ];
    // Hide all divs, then show the one selected
    settingsDivs.forEach(div => div.style.display = "none");
    settingsDivs[gridType].style.display = "block";

    document.getElementById("download-button").style.display = "block";

    GenerateGrid();
}

function GenerateGrid() {
    const gridType = document.getElementById("grid-type-selector").value;
    console.log("Generating grid of type: " + gridType);
    let image;
    if (gridType == "0") {
        image = SquareGrid();
    } else if (gridType == "1") {
        image = RectangleGrid();
    } else if (gridType == "2") {
        image = HexagonGrid();
    } else if (gridType == "3") {
        image = OtherGrid();
    }
    
    const container = document.getElementById("image-container");
    container.innerHTML = "";  // Clear existing image
    container.appendChild(image);  // Add the new image

    console.log("Generation complete.");
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