function HexagonGrid() {
    const image_width = +document.getElementById("hexagon-image-width").value;
    const image_height = +document.getElementById("hexagon-image-height").value;
    const tile_size = +document.getElementById("hexagon-tile-size").value;
    const tile_x_offset = +document.getElementById("hexagon-tile-x-offset").value;
    const tile_y_offset = +document.getElementById("hexagon-tile-y-offset").value;
    const color_1 = document.getElementById("hexagon-color-1").value;
    const color_2 = document.getElementById("hexagon-color-2").value;
    const color_3 = document.getElementById("hexagon-color-3").value;
    const stroke_width = +document.getElementById("hexagon-stroke-width").value;
    const stroke_color = document.getElementById("hexagon-stroke-color").value;

    if (image_width === "" || image_height === "" || tile_size === "" || tile_x_offset === "" || tile_y_offset === "" || color_1 === "" || color_2 === "" || color_3 === "" || stroke_width === "" || stroke_color === "") {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = "black";
    context.fillRect(0, 0, image_width, image_height);

    const hex_height = Math.sqrt(3) * tile_size;
    const hex_width = 3/2 * tile_size;

    let color_counter = 2;

    for (let i = -1; i < image_width / hex_width + 1; i++) {
        for (let j = -1; j < image_height / hex_height + 2; j++) {
            if (color_counter % 3 == 0) {
                context.fillStyle = color_1;
            } else if (color_counter % 3 == 1) {
                context.fillStyle = color_2;
            } else {
                context.fillStyle = color_3;
            }
            color_counter++;
            if (i % 2 == 0) {
                drawHexagon(context, 3/2 * tile_size * (i+tile_x_offset), 3**0.5 * tile_size * (j+tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
            } else {
                drawHexagon(context, 3/2 * tile_size * (i+tile_x_offset), 3**0.5 * tile_size * (j+0.5+tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
            }
        }
        if (i % 2 == 0) {
            color_counter = 2;
        } else {
            color_counter = 0;
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawHexagon(context, x, y, size_x, size_y, stroke_width, stroke_color) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        context.lineTo(x + size_x * Math.cos(Math.PI / 3 * i), y + size_y * Math.sin(Math.PI / 3 * i));
    }
    context.closePath();
    context.fill();
    if (stroke_width == 0) {
        return;
    }
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.stroke();
}