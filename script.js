const updateTimeAndDate = () => {
 
    const currentDateAndTime = new Date();

    const time = currentDateAndTime.toLocaleTimeString();
    const date = currentDateAndTime.toLocaleDateString();
    const day  = currentDateAndTime.getHours();

    // Morning/Evening/Night
    const myDay = document.getElementById('day');
    if(day >= 1 && day <= 11) {

        myDay.innerHTML = "Good Morning";
    }
    else if(day >= 12 && day <= 15) {

        myDay.innerHTML = "Good Afternoon";
    }
    else if(day >= 16 && day <= 18) {

        myDay.innerHTML = "Good Evening";
    }
    else {
        
        myDay.innerHTML = "Good Night";
    }
    
    // setting time zone...
    const myTime = document.getElementById('time');
    myTime.innerHTML = time;
    
    // setting date 
    const myDate = document.getElementById('date');
    myDate.innerHTML = date;
}

// update time and date at every second
setInterval(updateTimeAndDate,1000);

// initial update
updateTimeAndDate();