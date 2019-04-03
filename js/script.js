var progressed = function() {
        var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
        var yearFirstDay = Math.floor(timestmp / 86400000);
        var today = Math.ceil((new Date().getTime()) / 86400000);
        var dayOfYear = today - yearFirstDay;
        var secondsOfDay = new Date().getSeconds();
        var hoursOfDay = new Date().getHours();
        var minutesOfDay = new Date().getMinutes();
        var hoursOfDay = hoursOfDay / 24;
        var secondsOfDay = (minutesOfDay * 60 + secondsOfDay) / 3600;
        var dayOfYear = (((dayOfYear - 1) + hoursOfDay + secondsOfDay) / 365) * 100;
        var percent = dayOfYear.toFixed(1);
        
        document.getElementById("progress").innerHTML =  percent + '%';
        var elem = document.getElementById("progress-bar")
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width = percent;
                elem.style.width = width + '%';
            }
        }
}

var bar = function() {
    setInterval(progressed, 100);
}
