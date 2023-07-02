'use strict';

export const onChangeGroupList = (event, menValues, womenValues) => {
  const checkbox = event.target;
  const label = checkbox.closest('.form-check');
  const value = label.textContent.trim();

  if (checkbox.checked) {
    if (checkbox.closest('.men-checkbox')) {
      menValues.push(value);
    } else if (checkbox.closest('.women-checkbox')) {
      womenValues.push(value);
    }
  } else {
    if (checkbox.closest('.men-checkbox')) {
      const index = menValues.indexOf(value);
      if (index > -1) {
        menValues.splice(index, 1);
      }
    } else if (checkbox.closest('.women-checkbox')) {
      const index = womenValues.indexOf(value);
      if (index > -1) {
        womenValues.splice(index, 1);
      }
    }
  }
  menValues.sort();
  womenValues.sort();
};
