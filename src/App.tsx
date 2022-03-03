import { Box } from "@chakra-ui/react";
import {
  BubbleSort,
  SelectionSort,
  MergeSort,
  QuickSort,
} from "./components/sorts";
// need to use HashRouter to work with github pages
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { AppRoutes } from "./utils/constants";

function App() {
  return (
    <Box minH="100vh" h="100%">
      <HashRouter basename="/">
        <Routes>
          <Route path={AppRoutes.BUBBLE} element={<BubbleSort />} />
          <Route path={AppRoutes.SELECTION} element={<SelectionSort />} />
          <Route path={AppRoutes.MERGE} element={<MergeSort />} />
          <Route path={AppRoutes.QUICK} element={<QuickSort />} />
          <Route
            path="*"
            element={<Navigate replace to={AppRoutes.BUBBLE} />}
          />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
