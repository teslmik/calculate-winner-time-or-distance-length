import { MULTIPLIER, RACE_FACTOR_MEN, RACE_FACTOR_WOMEN, SEX } from '../constants/constants.js';
import { convertDecimalToTime } from '../helpers/numder-in-time.js';

export const renderCalcWinTime = (elementsContainer, data, prefLengthDist, startDataInputValue) => {
  const menOrWomen = data[0] && data[0][0] === SEX[0] ? RACE_FACTOR_MEN : RACE_FACTOR_WOMEN;

  const elements = data.map((element) => {
    const timeValue = prefLengthDist[element]
      ? convertDecimalToTime(
        prefLengthDist[element] * ((menOrWomen[element] * startDataInputValue) / MULTIPLIER),
      )
      : `&#8656  Введіть довжину дистанції`;

    const formattedValue = prefLengthDist[element] ? timeValue + ' хв' : timeValue;

    return `<div class="grid-item">${formattedValue}</div>`;
  });

  elementsContainer.innerHTML = elements.join('');
};
