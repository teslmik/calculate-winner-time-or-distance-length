import { MULTIPLIER, RACE_FACTOR_MEN, RACE_FACTOR_WOMEN, SEX } from '../constants/constants.js';
import { convertDecimalToTime } from './helpers.js';

export const renderExpectedSpeed = (elementsContainer, data, factor) => {
  const menOrWomen = data[0] && data[0][0] === SEX[0] ? RACE_FACTOR_MEN : RACE_FACTOR_WOMEN;

  const elements = data.map(
    (element) => `
    <div class="grid-item">
      ${convertDecimalToTime((menOrWomen[element] * factor) / MULTIPLIER)} хв/км
    </div>
    `,
  );

  elementsContainer.innerHTML = elements.join('');
};
