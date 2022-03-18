import React, { useMemo, createContext } from "react";
import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsView from "./pages/EventsView";
import EventCreate from "./pages/EventCreate";

export const AppContext = createContext<any>([]);

function App() {
  const theme = useMemo(
    () => createTheme(),
    []
  );

  const value = useMemo(() => [],[]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={value}>
          <Router>
            <Routes>
              <Route path='/' element={<EventsView />} />
              <Route path='/eventCreate' element={<EventCreate />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
