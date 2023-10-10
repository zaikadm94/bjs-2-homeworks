function getArrayParams(...arr) {
  if(!arr || !arr.length) return null;
  const max =  Math.max(arr);
  const min = Math.min(arr);
  const sum = arr?.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;







  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
