const primeDividers = (number) => {
  const primeDividers = [];

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      while (number % i === 0) {
        if (!primeDividers.includes(i)) {
          primeDividers.push(i);
        }
        number = number / i;
      }
    }
  }

  return primeDividers.join(', ');
};

console.log(primeDividers(12));
console.log(primeDividers(15));
console.log(primeDividers(11));
console.log(primeDividers(120));
