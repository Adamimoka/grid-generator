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

    drawTriangleGrid(context, image_width, image_height, tile_size, tile_x_offset, tile_y_offset, tile_orientation, color_1, color_2, color_3, stroke_width, stroke_color);

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");
    
    return image;
}

function drawTriangleGrid(context, image_width, image_height, tile_size, tile_x_offset, tile_y_offset, tile_orientation, color_1, color_2, color_3, stroke_width, stroke_color) {
    let hex_width;
    let hex_height;
    let color_counter = 2;
    if (tile_orientation == 0) {
        hex_width = 3 / 2 * tile_size;
        hex_height = Math.sqrt(3) * tile_size;
    } else {
        hex_width = Math.sqrt(3) * tile_size;
        hex_height = 3 / 2 * tile_size;
    }
    
    if (tile_orientation == 0) {
        for (let i = -1; i < image_width / hex_width * 1.05 + 2; i++) {
            for (let j = -1; j < image_height / hex_height * 1.05 + 2; j++) {
                if (color_counter % 3 == 0) {
                    context.fillStyle = color_1;
                } else if (color_counter % 3 == 1) {
                    context.fillStyle = color_2;
                } else {
                    context.fillStyle = color_3;
                }
                color_counter++;
                if (i % 2 == 0) {
                    drawRegularHexagon(context, tile_orientation, hex_width * (i + tile_x_offset), hex_height * (j + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
                } else {
                    drawRegularHexagon(context, tile_orientation, hex_width * (i + tile_x_offset), hex_height * (j + 0.5 + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
                }
            }
            if (i % 2 == 0) {
                color_counter = 2;
            } else {
                color_counter = 0;
            }
        }
    } else {
        for (let i = -1; i < image_height / hex_height + 1; i++) {
            for (let j = -1; j < image_width / hex_width + 1; j++) {
                if (color_counter % 3 == 0) {
                    context.fillStyle = color_1;
                } else if (color_counter % 3 == 1) {
                    context.fillStyle = color_2;
                } else {
                    context.fillStyle = color_3;
                }
                color_counter++;
                if (i % 2 == 0) {
                    drawRegularHexagon(context, tile_orientation, hex_width * (j + tile_x_offset), hex_height * (i + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
                } else {
                    drawRegularHexagon(context, tile_orientation, hex_width * (j + 0.5 + tile_x_offset), hex_height * (i + tile_y_offset), tile_size, tile_size, stroke_width, stroke_color);
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

function drawTriangle(context, tile_orientation, x, y, size_x, size_y, stroke_width, stroke_color) {
    context.beginPath();
    if (tile_orientation == 0) {
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
