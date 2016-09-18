/**
 * Created by zhangsha on 16-9-18.
 */
'use strict';

function gameReport(number, rule) {
  let result = '';
  let ruleKeys = Object.keys(rule);

  if (number.toString().indexOf(ruleKeys[0]) >= 0) {
    return rule[ruleKeys[0]];
  }

  ruleKeys.forEach(key => {
    result += number % parseInt(key) === 0 ? rule[key] : '';
  });

  return result ? result : number;
}

module.exports = gameReport;
