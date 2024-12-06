function EquilateralTriangleGrid() {
    const image_width = +document.getElementById("equilateral-triangle-image-width").value;
    const image_height = +document.getElementById("equilateral-triangle-image-height").value;
    const tile_size = +document.getElementById("equilateral-triangle-tile-size").value;
    const tile_orientation = +document.getElementById("equilateral-triangle-orientation").value;
    const color_1 = document.getElementById("equilateral-triangle-color-1").value;
    const color_2 = document.getElementById("equilateral-triangle-color-2").value;
    const stroke_width = +document.getElementById("equilateral-triangle-stroke-width").value;
    const stroke_color = document.getElementById("equilateral-triangle-stroke-color").value;

    if (isNaN(image_width) || isNaN(image_height) || isNaN(tile_size) || color_1 === "" || color_2 === "" || isNaN(stroke_width) || stroke_color === "") {
        console.warn("Missing required fields.");
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    if (tile_orientation == 0) {
        tile_width = tile_size;
        tile_height = tile_size * Math.sqrt(3) / 2;
    }
    else {
        tile_width = tile_size * Math.sqrt(3) / 2;
        tile_height = tile_size;
    }

    context.fillStyle = color_2;
    context.fillRect(0, 0, image_width, image_height);
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;

    context.fillStyle = color_1;
    let isTileFilled = true;
    for (let y = -1; y < image_height / tile_height + 1; y++) {
        for (let x = -1; x < image_width / tile_width + 1; x++) {
            let x_offset = 0;
            let y_offset = 0;
            if (tile_orientation == 0) {
                if (y % 2 == 0) {
                    x_offset = -tile_width / 2;
                }
            }
            else {
                if (x % 2 == 0) {
                    y_offset = -tile_height / 2;
                }
            }

            drawEquilateralTriangle(context, tile_orientation, x * tile_width + x_offset, y * tile_height + y_offset, tile_width, tile_height, stroke_width);
        }
        if (Math.ceil(image_width / tile_width) % 2 == 0) {
            isTileFilled = !isTileFilled;
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");

    return image;
}

function drawEquilateralTriangle(context, tile_orientation, x, y, size_x, size_y, stroke_width) {
    context.beginPath();
    if (tile_orientation == 0) {
        context.lineTo(x + size_x, y);
        context.lineTo(x + size_x / 2, y + size_y);
        context.lineTo(x, y);
    }
    else {
        context.lineTo(x, y + size_y / 2);
        context.lineTo(x + size_x, y);
        context.lineTo(x + size_x, y + size_y);
    }
    context.closePath();
    context.fill();
    if (stroke_width == 0) {
        return;
    }
    context.stroke();
}