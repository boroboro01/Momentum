const calendar = document.querySelector("#calendar");
const dayOfWeek = document.querySelector("#day-week");
const dayOfWeekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalender(){
    const date = new Date();
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());
    const todayWeek = date.getDay();
    calendar.innerText = `${month} - ${day} - ${year}`
    dayOfWeek.innerText = `${dayOfWeekList[todayWeek]}`
    if(todayWeek == 6){
        dayOfWeek.classList.remove("sun", "weekday");
        dayOfWeek.classList.add("sat");
    }
    else if(todayWeek == 0){
        dayOfWeek.classList.remove("sat", "weekday");
        dayOfWeek.classList.add("sun");
    }
    else{
        dayOfWeek.classList.remove("sun", "sat");
        dayOfWeek.classList.add("weekday");
    }
}

getCalender();