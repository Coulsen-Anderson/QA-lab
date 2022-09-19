let functions = require('./functions.js')

test('Test should run and 2 should equal 2', () => {
    expect(functions.returnTwo()).toBe(2)
  })


  test('Test should expect greeting to equal hello name', () => {
    expect(functions.greeting('James')).toBe('Hello, James')
})
test('Test should expect greeting to equal hello name', () => {
    expect(functions.greeting('Jill')).toBe('Hello, Jill')
})


test('Test should add num1 and num2', () => {
    expect(functions.add(1,2)).toBe(3)
})
test('Test should add num1 and num2', () => {
    expect(functions.add(5,9)).toBe(14)
})