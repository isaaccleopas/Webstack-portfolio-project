export const arrCategory = [
    'For Sale',
    'For Rent',
  ];
  
  // Function to convert category to lowercase with the first letter of each word capitalized
  const capitalizeFirstLetter = (string) => {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  export const categoryToIdx = (category) => {
    return arrCategory.findIndex((cate) => capitalizeFirstLetter(cate) === capitalizeFirstLetter(category));
  };
  
  export const idxToCategory = (idx) => {
    return capitalizeFirstLetter(arrCategory[idx]);
  };  