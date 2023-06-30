'use strict';

export const convertTimeToDecimal = (time) => {
  const [minutes, seconds] = time.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  const decimalTime = totalSeconds / 60;
  
  return decimalTime.toFixed(2);
}