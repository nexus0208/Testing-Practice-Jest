const reverseString = require('./reverseString');

test('reverse a string', () => {
    expect(reverseString('reverse')).toMatch("esrever");
});