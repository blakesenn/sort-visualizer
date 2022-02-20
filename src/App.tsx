import { Box } from "@chakra-ui/react";
import BubbleSort from "./components/sorts/Bubble/BubbleSort";
import SelectionSort from "./components/sorts/Selection/SelectionSort";
import MergeSort from "./components/sorts/Merge/MergeSort";
import QuickSort from "./components/sorts/Quick/QuickSort";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "./utils/constants";
import { ColorModeContext } from "./utils/contexts";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ColorModeContext.Provider
      value={{
        isDarkMode,
        toggleMode: () => setIsDarkMode((prevMode) => !prevMode),
      }}
    >
      <Box minH="100vh" h="100%">
        <BrowserRouter>
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
        </BrowserRouter>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;
