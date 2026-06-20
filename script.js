let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
function displayTime(){
    let date = new Date();
    //getting hr,min,sec from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRot = 30*h + m/2 + s/120;
    let mRot = 6*m + s/10;
    let sRot = 6*s;

    hr.style.transform = `rotate(${hRot}deg)`;
    min.style.transform = `rotate(${mRot}deg)`;
    sec.style.transform = `rotate(${sRot}deg)`;
}   
setInterval(displayTime,1000);