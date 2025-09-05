function generate(){
    let length = document.getElementById("length").value||12;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let pass="";
    for (let i=0; i<length;i++){
        pass += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    document.getElementById("text").value=pass;
}

function copypass(){
let pass = document.getElementById("text");
pass.select();
document.execCommand("copy");
alert("copied:" + pass.value);
}