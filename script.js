const EndDate = document.getElementById("EndDate").innerText = "8 jun 2023 12:00:00 AM"
let input = document.querySelectorAll("input");


let clock = () => {
    const end = new Date(EndDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    // convert into days 
    input[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours 
    input[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes 
    input[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds 
    input[3].value = Math.floor(diff) % 60;
}


setInterval(() => {
    clock();
}, 1000);