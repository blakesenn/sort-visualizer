export interface Step {
  arr: Array<number>;
  index1?: number;
  index2?: number;
  pivotIndex?: number;
  swapped?: boolean;
  sortedSoFar?: number;
  isInitial?: boolean;
}
