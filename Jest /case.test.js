const add = require('./test.js');

test('first test', () => {
    expect(add(2, 3)).toBe(5);
});