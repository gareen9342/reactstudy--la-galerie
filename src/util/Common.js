const availableKeywords = [
  "contemporary art",
  "modern art",
  "art nouveau",
  "pop art",
  "dog",
  "cat",
];

export const makeRandomQueryKeyword = () =>
  availableKeywords[Math.ceil(Math.random() * availableKeywords.length - 1)];

export const randRange = (min, max) =>
  Math.ceil(Math.random() * (max - min) + min);
