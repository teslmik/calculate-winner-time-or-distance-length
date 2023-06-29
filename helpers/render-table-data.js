export const renderTableData = (elementsContainer, data, firstRow = '') => {
  const elements = data.map((element) => `<div class="grid-item title">${element}</div>`);

  const elementHTML = `
    ${firstRow.length > 0 ? `<div class="grid-item title">${firstRow}</div>` : ''}
    ${elements.join('')}
  `;

  elementsContainer.innerHTML = elementHTML;
};
