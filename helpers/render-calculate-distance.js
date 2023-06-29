import { MULTIPLIER, RACE_FACTOR_MEN, RACE_FACTOR_WOMEN, SEX } from '../constants/constants.js';
import { convertTimeToDecimal } from './time-to-number.js';

export const renderCalcDist = (elementsContainer, data, winPrefTimeValues, startDataInputValue) => {
  const menOrWomen = data[0] && data[0][0] === SEX[0] ? RACE_FACTOR_MEN : RACE_FACTOR_WOMEN;

  const elements = data.map((element) => {
    const distValue = winPrefTimeValues[element]
      ? (
          convertTimeToDecimal(winPrefTimeValues[element]) /
          ((menOrWomen[element] * startDataInputValue) / MULTIPLIER)
        ).toFixed(3)
      : `&#8656  Введіть час переможця`;

    const formattedValue = winPrefTimeValues[element] ? `${distValue} км` : distValue;

    return `<div class="grid-item">${formattedValue}</div>`;
  });

  elementsContainer.innerHTML = elements.join('');
};
