function sortByFrequency(arr) {
    const frequencyMap = new Map();
    
    arr.forEach(element => {
      frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });

    const sortedArray = arr.sort((a, b) => {
      const frequencyDifference = frequencyMap.get(b) - frequencyMap.get(a);
      if (frequencyDifference !== 0) {
        return frequencyDifference;
      } else {
        return a - b; 
      }
    });
  
    return sortedArray;
  }
  
  // Example usage:
  const arr = [4, 6, 2, 2, 6, 4, 4, 4];
  const sortedArr = sortByFrequency(arr);
  console.log(sortedArr); // Output: [4, 4, 4, 4, 6, 6, 2, 2]
  