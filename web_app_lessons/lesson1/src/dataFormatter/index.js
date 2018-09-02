import data from '../api';

//Split data by lines where headers - 0 element & trim last empty element
const parsedData = data().split(/\n/).filter(item => item.trim() !== '');

//Separate headers from data rows and split them
const headers = parsedData.shift().split(',');
export const [MONTH, DEPARTMENT, EMPLOYEE, AMOUNT] = headers;

//Form arrays of keyed objects with headers as keys
const structuredData = parsedData.map((row) => row.split(',').reduce(
  (result, item, index) => {
    result[headers[index]] = item.trim();
    return result;
  }, {})
);

//Calculate total amount
export const totalAmount = () => structuredData.reduce((sum, item) => sum + parseFloat(item[AMOUNT]), 0);

export const dataByParamSeparator = param => {
  const allParams = [], paramsData = [], paramCounter = [];

  structuredData.forEach(item => {
    //separate unique params
    if (allParams.indexOf(item[param]) === -1) {
      allParams.push(item[param]);
      //init new AMOUNT array for each new param
      paramsData[allParams.indexOf(item[param])] = [];
      //init param counter
      paramCounter[allParams.indexOf(item[param])] = 0;
    }
    //separate AMOUNT by unique params
    paramsData[allParams.indexOf(item[param])].push(item[AMOUNT]);
    //count param
    paramCounter[allParams.indexOf(item[param])]++;
  });

  return {allParams, paramsData, paramCounter};
};