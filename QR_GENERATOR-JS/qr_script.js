const Form = document.querySelector("#form");
const qrCode = document.querySelector("#qr-code");

// Action on clicking submit button
const generateSubmit = (e) => {
    e.preventDefault();
    clearQRCode();
    const url = document.querySelector("#form-data").value;
    console.log(url);

    // Form Validation using conditional stmnt
    if(url === ""){
        //url is empty
        console.log("Invalid URL, please try again!");
    }
    else{
        // calling the function
        generateQrCode(url);
    }
}
const generateQrCode = (url) =>{
    // constructor object
    const qr = new QRCode(document.getElementById("qr-code"),{
        text: url,
        width: 250,
        height: 250
    });
}
// Clear the QR code once it is been showed on screen
const clearQRCode = () => {
    qrCode.innerHTML = "";
}
// adding an event listener.
// the event type is submit
// and what actions to be formed, that will be handled  by the function _generateSubmit_
Form.addEventListener("submit", generateSubmit);

