function generateQR2(){
    
    const qrcanvas = document.getElementById("qrcanvas");
    const reqtext = document.getElementById("reqtext").value;
    try {
        qrcanvas.innerHTML = ""
        var qrcode = new QRCode(qrcanvas, {
            text: reqtext,
            width: 128,
            height: 128,
        });
    } catch (error) {
        console.log('found error',error)
    }
}

function testButton(){
    console.log('wow it working')
}

