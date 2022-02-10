import { GrSelect } from "react-icons/gr";
import { GiBubbles } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { MdOutlineShutterSpeed } from "react-icons/md";

enum SORTING_ALGORITHMS {
  Selection = "Selection",
  Bubble = "Bubble",
  Merge = "Merge",
  Quick = "Quick",
}

export type AlgosProps = {
  label: SORTING_ALGORITHMS;
  icon: any;
};

const ALGOS: Array<AlgosProps> = [
  { label: SORTING_ALGORITHMS.Bubble, icon: GiBubbles },
  { label: SORTING_ALGORITHMS.Selection, icon: GrSelect },
  { label: SORTING_ALGORITHMS.Merge, icon: CgArrowsMergeAltH },
  { label: SORTING_ALGORITHMS.Quick, icon: MdOutlineShutterSpeed },
];

export { SORTING_ALGORITHMS, ALGOS };
