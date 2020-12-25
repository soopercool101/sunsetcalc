import SolarCalc from 'solar-calc';
import FlatPickr from 'flatpickr';

flatpickr("#flatpickr", {
    onChange: function(selectedDates, dateStr, instance) {
        change();
    },
});
const fp = document.querySelector("#flatpickr")._flatpickr;

function change() {
    var date = fp.selectedDates[0];
    document.getElementById("Date").innerHTML=date.toDateString();
    var solar = new SolarCalc(date, 47.610378, -122.200676);
    var sunset = solar.sunset;
    const MS_PER_MINUTE = 60000;
    document.getElementById("Before1").innerHTML="1.5 hr before : " + timeFormat(new Date(sunset - 90 * MS_PER_MINUTE));
    document.getElementById("Before2").innerHTML="1 hr before : " + timeFormat(new Date(sunset - 60 * MS_PER_MINUTE));
    document.getElementById("Before3").innerHTML="45 min before : " + timeFormat(new Date(sunset - 45 * MS_PER_MINUTE));
    document.getElementById("Before4").innerHTML="30 min before : " + timeFormat(new Date(sunset - 30 * MS_PER_MINUTE));
    document.getElementById("Before5").innerHTML="15 min before : " + timeFormat(new Date(sunset - 15 * MS_PER_MINUTE));
    document.getElementById("Sunset").innerHTML="Sunset : " + timeFormat(sunset);
}

function timeFormat(date) {
    var str = "";
    var end = " AM";
    var hour = date.getHours()
    if(hour > 12) {
        end = " PM";
        hour = hour - 12;
    }
    str = hour + ":" + minFix(date.getMinutes()) + end;
    return str;
}

function minFix(min) {
  return min < 10 ? "0" + min.toString().trim() : min;
}