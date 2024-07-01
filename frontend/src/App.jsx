import React, { useState } from 'react';  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter
import WarehouseStations from './components/WarehouseStations';
import AddEmployeeToStationForm from './components/AddEmployeeToStationForm';
import EmployeeTable from './components/EmployeeTable';
import EmployeeChart from './components/EmployeeChart';
import AssignmentChart from './components/AssignmentChart';
import AssignmentScene from './scenes/AssignmentScene';
import EmployeeScene from './scenes/EmployeeScene';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Assignments from "./scenes/assignments";
import Tables from "./scenes/tables";
import Charts from "./scenes/charts";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/" element={<AssignmentScene />} />
                <Route path="/employees" element={<EmployeeScene />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
