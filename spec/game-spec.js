/**
 * Created by zhangsha on 16-9-18.
 */
'use strict';

const gameReport = require('../game.js');
const rule = {
  '3': 'Fizz',
  '5': 'Buzz',
  '7': 'Whizz'
};

describe('gameReport', () => {
  it('contain 3', () => {
    expect(gameReport(43, rule)).toEqual('Fizz');
  });

  it('threeTimes', () => {
    expect(gameReport(6, rule)).toEqual('Fizz');
  });

  it('fiveTimes', () => {
    expect(gameReport(10, rule)).toEqual('Buzz');
  });

  it('sevenTimes', () => {
    expect(gameReport(14, rule)).toEqual('Whizz');
  });

  it('threeTimes&fiveTimes', () => {
    expect(gameReport(15, rule)).toEqual('FizzBuzz');
  });

  it('threeTimes&sevenTimes', () => {
    expect(gameReport(21, rule)).toEqual('FizzWhizz');
  });

  it('fiveTimes&sevenTimes', () => {
    expect(gameReport(70, rule)).toEqual('BuzzWhizz');
  });

  it('other', () => {
    expect(gameReport(1, rule)).toEqual(1);
  });
});
