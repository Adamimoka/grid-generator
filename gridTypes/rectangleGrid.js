function RectangleGrid() {
    const image_width = +document.getElementById("rectangle-image-width").value;
    const image_height = +document.getElementById("rectangle-image-height").value;
    const tile_width = +document.getElementById("rectangle-tile-width").value;
    const tile_height = +document.getElementById("rectangle-tile-height").value;
    const color_1 = document.getElementById("rectangle-color-1").value;
    const color_2 = document.getElementById("rectangle-color-2").value;
    const stroke_width = +document.getElementById("rectangle-stroke-width").value;
    const stroke_color = document.getElementById("rectangle-stroke-color").value;

    if (isNaN(image_width) || isNaN(image_height) || isNaN(tile_width) || isNaN(tile_height) || color_1 === "" || color_2 === "" || isNaN(stroke_width) || stroke_color === "") {
        console.warn("Missing required fields.");
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = color_2;
    context.fillRect(0, 0, image_width, image_height);
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;

    context.fillStyle = color_1;
    let isTileFilled = true;
    for (let y = -1; y < image_height/tile_height + 1; y++) {
        for (let x = -1; x < image_width/tile_width + 1; x++) {
            if (isTileFilled) {
                drawRectangle(context, x, y, tile_width, tile_height, stroke_width);
            }
            isTileFilled = !isTileFilled;
        }
        if (Math.ceil(image_width/tile_width) % 2 == 0) {
            isTileFilled = !isTileFilled;
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawRectangle(context, x, y, tile_width, tile_height, stroke_width) {
    context.fillRect(x * tile_width, y * tile_height, tile_width, tile_height);

    if (stroke_width == 0) {
        return;
    }
    context.strokeRect(x * tile_width, y * tile_height, tile_width, tile_height);
}