function solve(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {
      return NaN;
    }
  
    if (startIndex < 0) {
      startIndex = 0;
    }
    
    if (endIndex > array.length - 1) {
      endIndex = array.length - 1;
    }
  
    let result = 0;
    let slice = array.slice(startIndex, endIndex + 1);
    slice.forEach((n) => (result += Number(n)));
    return result;
  }
  
  console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
  console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
  console.log(solve([10, "twenty", 30, 40], 0, 2));
  console.log(solve([], 1, 2));
  console.log(solve("text", 0, 2));