const validateBrackets = (str) => {
  const possibleBrackets = ['{', '}', '[', ']', '(', ')'];
  const bracketsPairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const brackets = [];

  for (let i = 0; i < str.length; i++) {
    if (possibleBrackets.includes(str[i])) {
      brackets.push(str[i]);
    }
  }

  if (brackets.length % 2 !== 0) {
    return false;
  }

  const openBrackets = brackets.slice(0, brackets.length / 2);
  const closeBrackets = brackets.slice(brackets.length / 2, brackets.length);

  for (let i = 0; i < openBrackets.length; i++) {
    if (
      bracketsPairs[openBrackets[i]] !==
      closeBrackets[closeBrackets.length - i - 1]
    ) {
      return false;
    }
  }

  return true;
};

console.log(validateBrackets('{asd}'));
console.log(validateBrackets('{[(asd)]}'));
console.log(validateBrackets('[{asd}]'));
console.log(validateBrackets('[{asd]}'));
console.log(validateBrackets('[(asd])'));
console.log(validateBrackets('{aaa[bbb(ccc)ddd]eee}'));
