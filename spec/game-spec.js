/**
 * Created by zhangsha on 16-9-18.
 */
const gameReport = require('../game.js');

describe('gameReport', () => {
  it('contain 3', () => {
    expect(gameReport(43)).toEqual('Fizz');
  });

  it('threeTimes', () => {
    expect(gameReport(6)).toEqual('Fizz');
  });

  it('fiveTimes', () => {
    expect(gameReport(10)).toEqual('Buzz');
  });

  it('sevenTimes', () => {
    expect(gameReport(14)).toEqual('Whizz');
  });

  it('threeTimes&fiveTimes', () => {
    expect(gameReport(15)).toEqual('FizzBuzz');
  });

  it('threeTimes&sevenTimes', () => {
    expect(gameReport(21)).toEqual('FizzWhizz');
  });

  it('fiveTimes&sevenTimes', () => {
    expect(gameReport(70)).toEqual('BuzzWhizz');
  });

  it('other', () => {
    expect(gameReport(1)).toEqual(1);
  });




});
