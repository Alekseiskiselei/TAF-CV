const sortProductItems = (sortingName, array) => {
  let sorting;
  switch (sortingName) {
    case 'Name (A to Z)':
      sorting = (first, second) => first.localeCompare(second);
      break;
    case 'Name (Z to A)':
      sorting = (first, second) => second.localeCompare(first);
      break;
    case 'Low to high price':
      sorting = (first, second) => first - second;
      break;
    case 'High to low price':
      sorting = (first, second) => second - first;
      break;
  }
  return array.sort(sorting);
};

module.exports = { sortProductItems };
