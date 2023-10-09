const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mseconds = document.getElementById("mseconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`1 January ${currentYear + 1} 00:00:00`);

 function updateCountdownTime()
 {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    // days calculation
    
    const d = Math.floor(difference / 1000 / 60 / 60 / 24);

    // hours calculation
    const h = Math.floor(difference / 1000 / 60 / 60) % 24; /* Modulo is used to find out 
                                                             and display the remaining hours in a day
                                                             24hrs = 1 day
                                                             */
    // minutes calculation
    const m = Math.floor(difference / 1000 / 60) % 60;      /* Modulo is used to find out 
                                                            and display the remaining minutes per hour
                                                            60mins = 1 hour*/
    
    // seconds calculation
    const sec = Math.floor(difference / 1000) % 60;         /* Modulo is used to find out 
                                                            and display the remaining seconds per min
                                                            60sec = 1 min */         
    // milliseconds calculaion
   const msec = Math.floor(difference) % 1000  ;             /* Modulo is used to find out 
                                                            and display the remaining seconds per min
                                                           1000millisec = 1 sec */  


    days.innerHTML = d< 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
   mseconds.innerHTML = msec;
  
 }
 setInterval(updateCountdownTime, 100);
