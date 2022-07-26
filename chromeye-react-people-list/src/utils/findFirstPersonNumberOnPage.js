const findFirstPersonNumberOnPage = (a, b) => {
  if (a === 1 && b === 1) {
    return 0;
  }

  return a * b - a;
};

export default findFirstPersonNumberOnPage;
