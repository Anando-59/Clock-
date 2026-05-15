
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function updateClock() {
    const now = new Date();

  
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

  
  
    const secondsDegrees = (seconds * 6); 
    
  
    const minutesDegrees = (minutes * 6) + (seconds * 0.1); 
    
   
    const hoursDegrees = (hours * 30) + (minutes * 0.5);

 
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}


setInterval(updateClock, 1000);


updateClock();