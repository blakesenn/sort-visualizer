import { GiBubbles } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { MdOutlineShutterSpeed } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";

export enum SORTING_ALGORITHMS {
  Selection = "Selection",
  Bubble = "Bubble",
  Merge = "Merge",
  Quick = "Quick",
}

export enum AppRoutes {
  BUBBLE = "/bubble",
  SELECTION = "/selection",
  MERGE = "/merge",
  QUICK = "/quick",
}

export type AlgosProps = {
  label: SORTING_ALGORITHMS;
  icon: any;
  href: AppRoutes;
};

export const NavButtons: Array<AlgosProps> = [
  { label: SORTING_ALGORITHMS.Bubble, icon: GiBubbles, href: AppRoutes.BUBBLE },
  {
    label: SORTING_ALGORITHMS.Selection,
    icon: AiOutlineSelect,
    href: AppRoutes.SELECTION,
  },
  {
    label: SORTING_ALGORITHMS.Merge,
    icon: CgArrowsMergeAltH,
    href: AppRoutes.MERGE,
  },
  {
    label: SORTING_ALGORITHMS.Quick,
    icon: MdOutlineShutterSpeed,
    href: AppRoutes.QUICK,
  },
];
