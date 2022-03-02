export interface Step {
  arr: Array<any>;
  index1: number;
  index2: number;
  swapped?: boolean;
  sortedSoFar?: number;
  isInitial?: boolean;
}
