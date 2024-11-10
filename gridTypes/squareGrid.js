function SquareGrid() {
    const image_width = document.getElementById("square-image-width").value;
    const image_height = document.getElementById("square-image-height").value;
    const tile_width = document.getElementById("square-tile-width").value;
    const tile_height = document.getElementById("square-tile-height").value;
    const background_color = document.getElementById("square-background-color").value;
    const tile_color = document.getElementById("square-tile-color").value;

    // Check and validate that all 6 values are not empty
    if (image_width == "" || image_height == "" || tile_width == "" || tile_height == "" || background_color == "" || tile_color == "") {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = image_width;
    canvas.height = image_height;
    const context = canvas.getContext("2d");

    context.fillStyle = background_color;
    context.fillRect(0, 0, image_width, image_height);

    context.fillStyle = tile_color;
    let isTileFilled = true;
    for (let y = 0; y < image_height/tile_height; y++) {
        for (let x = 0; x < image_width/tile_width; x++) {
            if (isTileFilled) {
                context.fillRect(x*tile_width, y*tile_height, tile_width, tile_height);
            }
            isTileFilled = !isTileFilled;
        }
        if (Math.ceil(image_width/tile_width) % 2 == 0) {
            isTileFilled = !isTileFilled;
        }
    }

    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");

    const container = document.getElementById("image-container");
    container.innerHTML = "";  // Clear existing image
    container.appendChild(image);  // Add the new image
}