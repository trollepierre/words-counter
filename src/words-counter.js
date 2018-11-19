function wordsCounter(text) {
  const minLength = 2;
  const splitText = text
    .replace(/[.,/#!$%^&*;:{}=\-\\_`~()"']/g, ' ')
    .replace(/\s+/g, ' ')
    .split(' ');

  return splitText.reduce((result, word) => {
    if (word.length < minLength) return result;
    const lowerWord = word.toLowerCase();
    result[lowerWord] = result[lowerWord] + 1 || 1;
    return result;
  }, {});
}

module.exports = wordsCounter;
