export const convertDecimalToTime = (decimalNumber) => {
  if (typeof decimalNumber === 'string') {
    decimalNumber = parseFloat(decimalNumber.replace(',', '.'));
  }

  if (isNaN(decimalNumber)) {
    return 'Invalid number';
  }

  var hours = Math.floor(decimalNumber);
  var minutes = Math.round((decimalNumber - hours) * 60);
  var time = hours + ':' + (minutes < 10 ? '0' : '') + minutes;

  return time;
};
