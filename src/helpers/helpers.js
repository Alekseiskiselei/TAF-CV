const getListItemsText = async (itemsList) => {
  const titlesList = itemsList.map(async (item) => await item.getText());
  return titlesList;
};

const getElement = (currentPage, element, component) => {
  let currentElement;
  if (component) {
    currentElement = currentPage.getComponent([component])[element];
  } else {
    currentElement = currentPage[element];
  }
  return currentElement;
};

module.exports = {
  getListItemsText,
  getElement,
};
