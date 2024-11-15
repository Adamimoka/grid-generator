function HexagonGridFlatTop() {
    const image_width = document.getElementById("hexagon-flat-top-image-width").value;
    const image_height = document.getElementById("hexagon-flat-top-image-height").value;
    const tile_size = document.getElementById("hexagon-flat-top-tile-size").value;
    const color_1 = document.getElementById("hexagon-flat-top-color-1").value;
    const color_2 = document.getElementById("hexagon-flat-top-color-2").value;
    const color_3 = document.getElementById("hexagon-flat-top-color-3").value;

    if (image_width == "" || image_height == "" || tile_size == "" || color_1 == "" || color_2 == "") {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = color_2;
    context.fillRect(0, 0, image_width, image_height);

    context.fillStyle = color_1;
    const hexHeight = Math.sqrt(3) * tile_size;
    const hexWidth = 2 * tile_size;
    const hexVerticalSpacing = hexHeight * 3/4;

    for (let y = 0; y < image_height / hexVerticalSpacing; y++) {
        for (let x = 0; x < image_width / hexWidth; x++) {
            const xOffset = (y % 2) * (hexWidth / 2);
            drawHexagon(context, x * hexWidth + xOffset, y * hexVerticalSpacing, tile_size);
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");

    return image;
}

function drawHexagon(context, x, y, size) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        context.lineTo(x + size * Math.cos(Math.PI / 3 * i), y + size * Math.sin(Math.PI / 3 * i));
    }
    context.closePath();
    context.fill();
}