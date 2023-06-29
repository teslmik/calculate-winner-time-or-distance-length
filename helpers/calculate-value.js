export const calcValue = (event, valueItem, resultItem, operation) => {
  const inputValue = parseFloat(event.target.value.replace(',', '.'));
  const value = parseFloat(valueItem.textContent.replace(',', '.'));

  let calcValue;
  if (operation === 'divide') {
    calcValue = inputValue / value;
  } else if (operation === 'multiply') {
    calcValue = inputValue * value;
  }

  resultItem.textContent = calcValue.toFixed(2);
};
