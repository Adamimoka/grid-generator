function RectangleGrid() {
    const image_width = document.getElementById("rectangle-image-width").value;
    const image_height = document.getElementById("rectangle-image-height").value;
    const tile_width = document.getElementById("rectangle-tile-width").value;
    const tile_height = document.getElementById("rectangle-tile-height").value;
    const color_1 = document.getElementById("rectangle-color-1").value;
    const color_2 = document.getElementById("rectangle-color-2").value;

    // Check and validate that all 6 values are not empty
    if (image_width == "" || image_height == "" || tile_width == "" || tile_height == "" || color_1 == "" || color_2 == "") {
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
    
    return image;
}