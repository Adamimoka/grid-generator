function SquareGrid() {
    document.getElementById("confirm-text").innerHTML = "Generated!";

    // Step 1: Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 1200;  // Set desired width
    canvas.height = 600; // Set desired height

    // Step 2: Get the drawing context of the canvas
    const context = canvas.getContext("2d");

    // Step 3: Fill backgroud
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Step 4: Set the fill color and draw a rectangle to fill the canvas
    context.fillStyle = "#ff5733";  // Set your desired color (e.g., orange)
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            context.fillRect(x*100, y*100, 25, 25);
        }
    }

    // Step 5: Convert the canvas to a data URL and create an image element
    const image = document.createElement("img");
    image.src = canvas.toDataURL("image/png");  // Convert canvas to an image source

    // Step 6: Append the image to the container
    const container = document.getElementById("image-container");
    container.innerHTML = "";  // Clear existing content
    container.appendChild(image);  // Add the new image
}