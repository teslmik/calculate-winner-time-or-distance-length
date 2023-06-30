import * as componentsJs from '../components/components.js';
import { convertTimeToDecimal } from './helpers.js';

const startDataInput = document.getElementById('startDataInput'),
  groupLists = document.querySelectorAll('.group-list'),
  calcSpeed = document.querySelectorAll('.expected-speed'),
  winPrefTimes = document.querySelectorAll('.win-pref-time'),
  calcDist = document.querySelectorAll('.calc-dist'),
  prefLengthDistances = document.querySelectorAll('.pref-length-dist'),
  calcWinTime = document.querySelectorAll('.calc-win-time');

export const updateValues = (values, index, winPrefTimeValues, prefLengthDist) => {
  const startDataInputValue = convertTimeToDecimal(startDataInput.value);

  componentsJs.renderTableData(groupLists[index], values);
  componentsJs.renderExpectedSpeed(calcSpeed[index], values, startDataInputValue);
  componentsJs.renderWinPrefTime(winPrefTimes[index], values, winPrefTimeValues, startDataInputValue);
  componentsJs.renderCalcDist(calcDist[index], values, winPrefTimeValues, startDataInputValue);
  componentsJs.renderPrefLengthDist(prefLengthDistances[index], values, prefLengthDist, startDataInputValue);
  componentsJs.renderCalcWinTime(calcWinTime[index], values, prefLengthDist, startDataInputValue);
};
