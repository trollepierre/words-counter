const wordsCounter = require('../src/words-counter');

describe('wordsCounter', () => {
  describe('when all words have 2 or more letters', () => {
    it('should return the number of occurrences for each word', () => {
      // Given
      const text = 'some text with word that are longer than two characters';

      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({
        are: 1,
        characters: 1,
        longer: 1,
        some: 1,
        text: 1,
        than: 1,
        that: 1,
        two: 1,
        with: 1,
        word: 1,
      });
    });
  });

  describe('when text contains single letters', () => {
    it('should return empty object', () => {
      // Given
      const text = 'a b c d e f g h i j k';

      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({});
    });
  });

  describe('when text contains capital letters', () => {
    it('should count words whatever their case', () => {
      // Given
      const text = 'This is this so this is not that';

      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({
        is: 2,
        not: 1,
        so: 1,
        that: 1,
        this: 3,
      });
    });
  });

  describe('when text contains special characters', () => {
    it('should not take into consideration special characters', () => {
      // Given
      const text = 'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation \'"\\';

      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({
        an: 1,
        example: 1,
        is: 1,
        of: 1,
        punctuation: 1,
        string: 1,
        this: 1,
        with: 1,
      });
    });
  });

  describe('when text is split by a point', () => {
    it('should split words', () => {
      // Given
      const text = 'hello.world';

      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({
        hello: 1,
        world: 1,
      });
    });
  });

  describe('when text is split by a tab', () => {
    it('should split words', () => {
      // Given
      const text = 'hello\nworld';


      // When
      const count = wordsCounter(text, 2);

      // Then
      expect(count).toEqual({
        hello: 1,
        world: 1,
      });
    });
  });
});
