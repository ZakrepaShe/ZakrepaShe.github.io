import {dataByParamSeparator} from "../dataFormatter";

export function formHTMLAmountByParam(param) {
  const {allParams, paramsData, paramCounter} = dataByParamSeparator(param);

  //calculate Average AMOUNT, form html
  return allParams.reduce((resultHTML, paramName, paramIndex) => {
    const amountSum = paramsData[paramIndex].reduce((sum, amount) => sum + parseFloat(amount), 0);
    return resultHTML + (`<tr><td>${paramName}</td><td>${(amountSum / paramCounter[paramIndex]).toFixed(2)}</td></tr>`)
  }, '');
}