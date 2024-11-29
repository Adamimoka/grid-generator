function SquareGrid() {
    const image_width = +document.getElementById("square-image-width").value;
    const image_height = +document.getElementById("square-image-height").value;
    const tile_size = +document.getElementById("square-tile-size").value;
    const color_1 = document.getElementById("square-color-1").value;
    const color_2 = document.getElementById("square-color-2").value;
    const stroke_width = +document.getElementById("square-stroke-width").value;
    const stroke_color = document.getElementById("square-stroke-color").value;

    if (isNaN(image_width) || isNaN(image_height) || isNaN(tile_size) || color_1 === "" || color_2 === "" || isNaN(stroke_width) || stroke_color === "") {
        console.warn("Missing required fields.");
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = color_2;
    context.fillRect(0, 0, image_width, image_height);

    context.fillStyle = color_1;
    let isTileFilled = true;
    for (let y = -1; y < image_height/tile_size + 1; y++) {
        for (let x = -1; x < image_width/tile_size + 1; x++) {
            if (isTileFilled) {
                drawSquare(context, x, y, tile_size, stroke_width, stroke_color);
            }
            isTileFilled = !isTileFilled;
        }
        if (Math.ceil(image_width/tile_size) % 2 == 0) {
            isTileFilled = !isTileFilled;
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");

    return image;
}

function drawSquare(context, x, y, tile_size, stroke_width, stroke_color) {
    context.fillRect(x * tile_size, y * tile_size, tile_size, tile_size);

    if (stroke_width == 0) {
        return;
    }
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.strokeRect(x * tile_size, y * tile_size, tile_size, tile_size);
}
