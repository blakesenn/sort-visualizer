export function generateData(n: number, max: number = 1000): Array<number> {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const val = Math.floor(Math.random() * max + 10);
    arr.push(val);
  }
  return arr;
}

export function swap(arr: Array<any>, newMinPos: number, oldMinPos: number) {
  const oldMinVal = arr[oldMinPos];
  arr[oldMinPos] = arr[newMinPos];
  arr[newMinPos] = oldMinVal;
}
