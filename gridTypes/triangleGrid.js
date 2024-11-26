function RegularHexagonGrid() {
    const image_width = +document.getElementById("triangle-image-width").value;
    const image_height = +document.getElementById("triangle-image-height").value;
    const tile_width = +document.getElementById("triangle-tile-width").value;
    const tile_height = +document.getElementById("triangle-tile-height").value;
    const tile_orientation = +document.getElementById("triangle-orientation").value;
    const color_1 = document.getElementById("triangle-color-1").value;
    const color_2 = document.getElementById("triangle-color-2").value;
    const stroke_width = +document.getElementById("triangle-stroke-width").value;
    const stroke_color = document.getElementById("triangle-stroke-color").value;

    if (image_width === "" || image_height === "" || tile_width === "" || tile_height === "" || color_1 === "" || color_2 === "" || stroke_width === "" || stroke_color === "") {
        console.warn("Missing required fields.");
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = "black";
    context.fillRect(0, 0, image_width, image_height);

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawTriangleGrid(context, image_width, image_height, tile_width, tile_height, tile_orientation, color_1, color_2, stroke_width, stroke_color) {
    return;
}

function drawTriangle(context, tile_orientation, x, y, size_x, size_y, stroke_width, stroke_color) {
    return;
}
