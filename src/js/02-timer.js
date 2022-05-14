import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector('button[data-start]');
const secondsEl = document.querySelector('span[data-seconds]');
const minutesEl = document.querySelector('span[data-minutes]');
const hoursEl = document.querySelector('span[data-hours]');
const daysEl = document.querySelector('span[data-days]');
startBtn.setAttribute('disabled', true);
let allTime = 0;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = new Date;
     const selectDay = selectedDates[0];
    
    if (selectDay.getTime() <= date.getTime()) {
      return window.alert `Please choose a date in the future`
    };

    startBtn.disabled = false;
    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
       let timerId = 0;
    const dataNow = Date.now();
    timerId = setInterval(() => {
      const dataCurrent = Date.now();
      allTime = selectDay.getTime() - dataCurrent;
      console.log(allTime);
      const timerIn = convertMs(allTime);
      secondsEl.textContent = timerIn.seconds;
      minutesEl.textContent = timerIn.minutes;
      hoursEl.textContent = timerIn.hours;
      daysEl.textContent = timerIn.days;
      
    console.log(timerIn);
      if(allTime <= 1000) {
        clearInterval(timerId);
      }
    }, 1000);
        
      })
    
    
  },
})
function startTimer(){

}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
