function numb(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  if (sum === 6) {
    return "shoigu";
  }

  let result = " ";
  for (let i = 0; i < ar.length; i++) {
    result += ar[i] + " ";
  }

  return result;
}

console.log(numb([1, 2, 3]));
 
 
