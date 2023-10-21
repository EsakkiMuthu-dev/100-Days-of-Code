const input = document.getElementById('url');
const qr= document.getElementById('qr');
const URL="https://qrtag.net/api/qr_transparent_4.png";
let userUrl;
function handleSubmit()
{
    console.log(input.value);
    userUrl=input.value;
    input.value=" ";
    generateQr();
   
}

function generateQr()
{

    let img = document.createElement('img');
    img.src=`${URL}?url=${userUrl}`;
    img.alt="Qr Generated image";
    qr.append(img);
    document.body.appendChild(qr);
}