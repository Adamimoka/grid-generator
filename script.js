function ChangeGridType() {
    const gridType = +document.getElementById("grid-type-selector").value;

    let settingsDivs = [ // Include all grid types here, based on the IDs of the divs in html
        document.getElementById("square-grid-settings"),
        document.getElementById("rectangle-grid-settings"),
        document.getElementById("equilateral-triangle-grid-settings"),
        document.getElementById("isosceles-triangle-grid-settings"),
        document.getElementById("right-triangle-grid-settings"),
        document.getElementById("regular-hexagon-grid-settings"),
        document.getElementById("elongated-hexagon-grid-settings")
    ];
    // Hide all divs, then show the one selected
    settingsDivs.forEach(div => div.style.display = "none");
    settingsDivs[gridType].style.display = "block";

    document.getElementById("download-section").style.display = "block";

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
        image = EquilateralTriangleGrid();
    } else if (gridType == "3") {
        image = IsoscelesTriangleGrid();
    } else if (gridType == "4") {
        image = RightTriangleGrid();
    } else if (gridType == "5") {
        image = RegularHexagonGrid();
    } else if (gridType == "6") {
        image = ElongatedHexagonGrid();
    }

    const container = document.getElementById("image-container");
    container.innerHTML = "";  // Clear existing image
    container.appendChild(image);  // Add the new image
    
    image.style = "max-width: 100%; height: auto;"; // Limit image size to container width

    console.log("Generation completed successfully.");
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
    const filename = document.getElementById("download-filename").value;
    link.download = filename + ".png";
    link.click();
}