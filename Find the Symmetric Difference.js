// Finding symmetric difference
const diff = (arr1, arr2) => {
  const arrA = arr1.filter((elem) => !arr2.includes(elem));
  const arrB = arr2.filter((elem) => !arr1.includes(elem)); 
  return [...arrA, ...arrB].sort();
};

// Reducing to one array
function sym(...args) {
  if (args.length === 0 || args.length === 1) return args.flat(1).sort();
  while (args.length > 1) {
    const arrC = diff(args[0], args[1]);
    args = [arrC, ...args.slice(2)]; 
  };
  const x =  new Set([...args[0].sort()]);
  return [...x];
};

/*
===For Testing Code====
*/
// console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// sym([1, 2, 3, 3], [5, 2, 1, 4])
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
// diff([1, 2, 3], [5, 2, 1, 4]);
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 3]));
