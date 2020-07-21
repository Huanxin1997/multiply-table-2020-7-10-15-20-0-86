/**
 * 创建乘法表
 * @param {*} start 
 * @param {*} end 
 */
function createMultiplyTable(start, end) {
  if (isNumsValid(start, end)) {
    return generateMultiplyStr(start, end);
  } else {
    return "";
  }
}

/**
* 判断输入数字合法性
* @param {*} start 
* @param {*} end 
*/
function isNumsValid(start, end) {
  if (isEndLtStart(start, end)) {
    return false;
  }
  if (!isNumsRangeValid(start, end)) {
    return false;
  }
  return true;
}

/**
* 判断end是否大于等于start
* @param {*} start 
* @param {*} end 
*/
function isEndLtStart(start, end) {
  return end < start;
}

/**
* 判断输入数字是否符合范围
* @param {*} start 
* @param {*} end 
*/
function isNumsRangeValid(start, end) {
  return (start > 1) && (end < 1000);
}

/**
* 处理乘法表字符串
* @param {*} start 
* @param {*} end 
*/
function generateMultiplyStr(startNum, endNum) {
  let multiplyTable = "";
  for (let i = startNum; i <= endNum; i++) {
    for (let j = startNum; j <= i; j++) {
      multiplyTable += `${j}*${i}=${i * j}\t`;
    }
    multiplyTable = deleteStrFinalIndex(multiplyTable);
    if (i < end) {
      multiplyTable += "\n";
    }
  }
  return multiplyTable;
}

/**
 * 去除每一行最后的空格
 * @param {*} str 
 */
function deleteStrFinalIndex(str) {
  return str.substring(0, str.length - 1);
}

module.exports = {
  createMultiplyTable,
};
