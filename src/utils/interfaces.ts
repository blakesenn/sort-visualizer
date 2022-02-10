export interface Step {
  step: number;
  arr: Array<any>;
  swapLess: number;
  swapGreater: number;
  swapped: boolean;
  isInitial: boolean;
  sortedSoFar: number;
}
