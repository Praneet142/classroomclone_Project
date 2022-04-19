import { Route, Routes, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import EnterClass from "./pages/EnterClass";
import Home from "./pages/Home";

import HeaderClass from "./components/UI/HeaderClass";
import HeaderHome from "./components/UI/HeaderHome";

import ViewUsersScreen from "./pages/ViewUsersScreen";
import Welcome from "./pages/Welcome";

function App() {
  const location = useLocation();

  const onHomeScreen = location.pathname.startsWith("/home");
  const onClassScreen = location.pathname.startsWith("/enter");

  return (
    <div className="App">
      <>{onHomeScreen ? <HeaderHome /> : onClassScreen && <HeaderClass />}</>

      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} exact />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/enter/class/:classId"
          exact
          strict
          element={<EnterClass />}
        />
        <Route
          path="/enter/class/:classId/people"
          exact
          element={<ViewUsersScreen />}
        />
        <Route path="*" element={<Home />} />
      </Routes>

      
    </div>
  );
}

export default App;
