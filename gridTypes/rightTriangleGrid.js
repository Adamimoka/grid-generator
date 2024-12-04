function RightTriangleGrid() {
    const image_width = +document.getElementById("right-triangle-image-width").value;
    const image_height = +document.getElementById("right-triangle-image-height").value;
    const tile_width = +document.getElementById("right-triangle-tile-width").value;
    const tile_height = +document.getElementById("right-triangle-tile-height").value;
    const tile_orientation = +document.getElementById("right-triangle-orientation").value;
    const color_1 = document.getElementById("right-triangle-color-1").value;
    const color_2 = document.getElementById("right-triangle-color-2").value;
    const stroke_width = +document.getElementById("right-triangle-stroke-width").value;
    const stroke_color = document.getElementById("right-triangle-stroke-color").value;

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
    for (let y = -1; y < image_height/tile_height + 1; y++) {
        for (let x = -1; x < image_width/tile_width + 1; x++) {
            drawRightTriangle(context, tile_orientation, x, y, tile_width, tile_height, stroke_width);
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawRightTriangle(context, tile_orientation, x, y, size_x, size_y, stroke_width) {
    context.beginPath();
    context.moveTo(x * size_x, y * size_y);
    if (tile_orientation == 0) {
        context.lineTo(x * size_x + size_x, y * size_y + size_y);
        context.lineTo(x * size_x + size_x, y * size_y);
        context.lineTo(x * size_x, y * size_y);
    }
    else {
        context.lineTo(x * size_x, y * size_y + size_y);
        context.lineTo(x * size_x + size_x, y * size_y);
        context.lineTo(x * size_x, y * size_y);
    }
    context.closePath();
    context.fill();

    if (stroke_width == 0) {
        return;
    }
    context.stroke();
}