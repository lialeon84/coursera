const { default: TestRunner } = require("jest-runner");
const apptwo = require(`./apptwo`);

test('return the number plus 5', () => {
    expect(apptwo(1)).toBe(6);
})

const add = require(`./apptwo`);

test('return the number plus 5', () => {

    expect(add(10, 5)).toBe(16);
})