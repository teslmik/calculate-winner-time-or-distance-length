import * as helpersJs from './helpers.js';

const startDataInput = document.getElementById('startDataInput'),
  groupLists = document.querySelectorAll('.group-list'),
  calcSpeed = document.querySelectorAll('.expected-speed'),
  winPrefTimes = document.querySelectorAll('.win-pref-time'),
  calcDist = document.querySelectorAll('.calc-dist'),
  prefLengthDistances = document.querySelectorAll('.pref-length-dist'),
  calcWinTime = document.querySelectorAll('.calc-win-time');

export const updateValues = (values, index, winPrefTimeValues, prefLengthDist) => {
  const startDataInputValue = helpersJs.convertTimeToDecimal(startDataInput.value);

  helpersJs.renderTableData(groupLists[index], values);
  helpersJs.renderExpectedSpeed(calcSpeed[index], values, startDataInputValue);
  helpersJs.renderWinPrefTime(winPrefTimes[index], values, winPrefTimeValues, startDataInputValue);
  helpersJs.renderCalcDist(calcDist[index], values, winPrefTimeValues, startDataInputValue);
  helpersJs.renderPrefLengthDist(prefLengthDistances[index], values, prefLengthDist, startDataInputValue);
  helpersJs.renderCalcWinTime(calcWinTime[index], values, prefLengthDist, startDataInputValue);
}