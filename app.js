'use strict';

import { TABLE_HEADERS, SEX } from './constants/constants.js';
import { renderTableData } from './components/components.js';
import { updateValues, onChangeGroupList } from './helpers/helpers.js';

const tableHeaders = document.querySelectorAll('.table-header'),
  checkboxContainer = document.querySelector('.checkbox-container'),
  startDataInput = document.getElementById('startDataInput');

const menValues = [];
const womenValues = [];
const menWinPrefTimeValues = {};
const womenWinPrefTimeValues = {};
const menPrefLengthDist = {};
const womenPrefLengthDist = {};

tableHeaders.forEach((elem, i) => renderTableData(elem, TABLE_HEADERS, SEX[i]));

startDataInput.addEventListener('input', () => {
  if (menValues) {
    updateValues(menValues, 0, menWinPrefTimeValues, menPrefLengthDist);
  }
  if (womenValues) {
    updateValues(womenValues, 1, womenWinPrefTimeValues, womenPrefLengthDist);
  }
});

checkboxContainer.addEventListener('change', (e) => {
  onChangeGroupList(e, menValues, womenValues);

  if (menValues) {
    updateValues(menValues, 0, menWinPrefTimeValues, menPrefLengthDist);
  }
  if (womenValues) {
    updateValues(womenValues, 1, womenWinPrefTimeValues, womenPrefLengthDist);
  }
});
