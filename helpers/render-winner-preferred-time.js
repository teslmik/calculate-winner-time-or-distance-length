import { renderCalcDist } from './render-calculate-distance.js';
import { SEX } from '../constants/constants.js';

export const renderWinPrefTime = (
  elementsContainer,
  data,
  winPrefTimeValues,
  startDataInputValue
) => {
  const elements = data.map((element) => {
    const value = winPrefTimeValues[element]?.split(':') ?? ['00', '00'];

    return `
      <div class="grid-item input-container" data-input-id="time-${element}">
        <input name="minutes" type="number" min=0 max=60 value="${value[0]}" />
        <span>хв</span>
        <input name="seconds" type="number" min=0 max=60 value="${value[1]}" />
        <span>сек</span>
      </div>
    `;
  });

  elementsContainer.innerHTML = elements.join('');

  const updateWinPrefTime = () => {
    data.forEach((element) => {
      const inputsContainer = elementsContainer.querySelector(`[data-input-id="time-${element}"]`);
      const inputs = inputsContainer.querySelectorAll('input');
      const hours = inputs[0].value.padStart(2, '0');
      const minutes = inputs[1].value.padStart(2, '0');
      const time = `${hours}:${minutes}`;

      winPrefTimeValues[element] = time;
    });
  };

  data.forEach((element) => {
    const inputsContainer = elementsContainer.querySelector(`[data-input-id="time-${element}"]`),
      inputs = inputsContainer.querySelectorAll('input'),
      calcDist = document.querySelectorAll('.calc-dist');

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const distConteiner = element[0] === SEX[0] ? calcDist[0] : calcDist[1];

        updateWinPrefTime();
        renderCalcDist(distConteiner, data, winPrefTimeValues, startDataInputValue);
      });
    });
  });
};
