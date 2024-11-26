function SquareGrid() {
    const image_width = +document.getElementById("square-image-width").value;
    const image_height = +document.getElementById("square-image-height").value;
    const tile_size = +document.getElementById("square-tile-size").value;
    const color_1 = document.getElementById("square-color-1").value;
    const color_2 = document.getElementById("square-color-2").value;

    if (image_width == "" || image_height == "" || tile_size == "" || color_1 == "" || color_2 == "") {
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
    for (let y = 0; y < image_height/tile_size; y++) {
        for (let x = 0; x < image_width/tile_size; x++) {
            if (isTileFilled) {
                context.fillRect(x*tile_size, y*tile_size, tile_size, tile_size);
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