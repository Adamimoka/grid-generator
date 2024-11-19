function HexagonGrid() {
    const image_width = +document.getElementById("hexagon-image-width").value;
    const image_height = +document.getElementById("hexagon-image-height").value;
    const tile_size = +document.getElementById("hexagon-tile-size").value;
    const tile_x_offset = +document.getElementById("hexagon-tile-x-offset").value;
    const tile_y_offset = +document.getElementById("hexagon-tile-y-offset").value;
    const top_type = +document.getElementById("hexagon-top-type").value;
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

    drawHexagonGrid(tile_size, image_width, image_height, context, color_1, color_2, color_3, top_type, tile_x_offset, tile_y_offset, stroke_width, stroke_color);

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawHexagonGrid(tile_size, image_width, image_height, context, color_1, color_2, color_3, top_type, tile_x_offset, tile_y_offset, stroke_width, stroke_color) {
    let hex_height
    let hex_width
    let color_counter
    if (top_type == 0) {
            hex_height = Math.sqrt(3) * tile_size;
            hex_width = 3 / 2 * tile_size;
    }
    else {
            hex_height = 3 / 2 * tile_size;
            hex_width = Math.sqrt(3) * tile_size;
    }
    color_counter = 2;

    if (top_type == 0) {
        for (let i = -1; i < image_width / hex_width * 1.05 + 5; i++) {
            for (let j = -1; j < image_height / hex_height * 1.05 + 5; j++) {
                if (color_counter % 3 == 0) {
                    context.fillStyle = color_1;
                } else if (color_counter % 3 == 1) {
                    context.fillStyle = color_2;
                } else {
                    context.fillStyle = color_3;
                }
                color_counter++;
                if (i % 2 == 0) {
                    drawHexagon(top_type, context, 3 / 2 * tile_size * (i + tile_x_offset), 3 ** 0.5 * tile_size * (j + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
                } else {
                    drawHexagon(top_type, context, 3 / 2 * tile_size * (i + tile_x_offset), 3 ** 0.5 * tile_size * (j + 0.5 + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
                }
            }
            if (i % 2 == 0) {
                color_counter = 2;
            } else {
                color_counter = 0;
            }
        }
    }
    else {
        for (let i = -1; i < image_width / hex_width * 1.3 + 5; i++) {
            for (let j = -1; j < image_height / hex_height * 1.25 + 5; j++) {
                if (color_counter % 3 == 0) {
                    context.fillStyle = color_1;
                } else if (color_counter % 3 == 1) {
                    context.fillStyle = color_2;
                } else {
                    context.fillStyle = color_3;
                }
                color_counter++;
                if (i % 2 == 0) {
                    drawHexagon(top_type, context, 3 ** 0.5 * tile_size * (j + tile_y_offset), 3 / 2 * tile_size * (i + tile_x_offset), tile_size, tile_size, stroke_width, stroke_color);
                } else {
                    drawHexagon(top_type, context, 3 ** 0.5 * tile_size * (j + 0.5 + tile_y_offset), 3 / 2 * tile_size * (i + tile_x_offset), tile_size, tile_size, stroke_width, stroke_color);
                }
            }
            if (i % 2 == 0) {
                color_counter = 2;
            } else {
                color_counter = 0;
            }
        }
    }
}

function drawHexagon(top_type, context, x, y, size_x, size_y, stroke_width, stroke_color) {
    context.beginPath();
    if (top_type == 0) {
        for (let i = 0; i < 6; i++) {
            context.lineTo(x + size_x * Math.cos(Math.PI / 3 * i), y + size_y * Math.sin(Math.PI / 3 * i));
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            context.lineTo(x + size_x * Math.cos(Math.PI / 3 * i + Math.PI / 6), y + size_y * Math.sin(Math.PI / 3 * i + Math.PI / 6));
        }
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