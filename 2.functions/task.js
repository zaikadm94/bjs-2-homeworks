function getArrayParams(...arr) {
    if (!arr || !arr.length) return null;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr?.reduce((acc, curr) => acc + curr, 0);
    const avg = Number.parseFloat((sum / arr.length).toFixed(2));

    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  return arr?.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr || !arr.length) return 0
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;

}

function partition(collection, predicate) {
  return collection.reduce(
      (result, value) => {
        result[predicate(value) ? 0 : 1].push(value);
        return result;
      },
      [[], []],
  );
}

function differenceEvenOddWorker(...arr) {
  const [evenElement, oddElement] = partition(arr, (el) => el % 2 === 0);
  const sumEventElement = summElementsWorker(...evenElement);
  const sumOddElement = summElementsWorker(...oddElement);
  return sumEventElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement ++;
    }
  }

    if (countEvenElement === 0) {
      return 0;
    }
    return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;

}

