function ChangeGridType() {
    const gridType = +document.getElementById("grid-type-selector").value;
    alert(gridType)

    let settingsDivs = [
        document.getElementById("square-grid-settings"),
        document.getElementById("other-grid-settings")
    ];
    for (let index = 0; index < settingsDivs.length; index++) {
        const settingsDiv = settingsDivs[index];
        settingsDiv.style.visibility = "hidden";
    }
    settingsDivs[gridType].removeAttribute("hidden");
    document.getElementById("generate-button").removeAttribute("hidden");

    const container = document.getElementById("image-settings");
    container.innerHTML = "";  // Clear existing content
    container.appendChild(settings);  // Add the new image
}

function GenerateGrid() {
    document.getElementById("confirm-text").innerHTML = "Grid Generated";
    SquareGrid()
}