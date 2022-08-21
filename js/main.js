const clockHour = document.querySelector(".clock-inner-hour");
const clockMinute = document.querySelector(".clock-inner-minute");
const clockSecund = document.querySelector(".clock-inner-secund");
const clockDate = document.querySelector(".clock-date-text");

const clockFunc = function (){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let secund = time.getSeconds();
    clockHour.textContent = hour;
    clockMinute.textContent = minute;
    clockSecund.textContent = secund;
    clockDate.textContent = time.toLocaleDateString();

}
setInterval(clockFunc,1000)