function openApp(appName) {
    alert(appName + " app opened!");
}
function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();


function searchGoogle() {
    let query = document.getElementById("search-input").value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
}

navigator.getBattery().then(function(battery) {
    function updateBatteryStatus() {
        document.getElementById("battery-level").textContent = Math.round(battery.level * 100) + "%";
    }
    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
});
