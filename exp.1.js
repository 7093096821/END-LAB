function downloadImage(callback) {
    console.log("Downloading photo.jpg...");
    callback();
}
function displayImage() {
    console.log("Displaying photo.jpg");
}
downloadImage(displayImage);