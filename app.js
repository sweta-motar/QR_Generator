// Create a new QRCode object
var qrcode = new QRCode(document.querySelector(".qrcode"));

// Default QR code makeCode() is a method from the QRCode.js library to create QR codes.
qrcode.makeCode("Why did you scanned me?");

// Generate QR from input
function generateQr() {
  var input = document.querySelector("input").value;
  if(input.trim() === "") { // check of empty or white space
    alert("Please enter some text or URL!");
    return;
  }

  qrcode.makeCode(input); // generaters code
  document.querySelector("input").value = ""; // Clear input after generating
}

// Download the QR code as an image
function downloadQr() {
  var qrImg = document.querySelector(".qrcode img"); // QRCode.js generates <img> inside the div
  if(qrImg) {
    var link = document.createElement("a");
    link.href = qrImg.src; // set link to image
    link.download = "QRCode.png"; // allow browser to download
    link.click();
  } else {
    alert("Please generate a QR code first!");
  }
}
