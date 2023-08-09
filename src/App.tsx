import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Dashboard />} />
          </Route> */}
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};

export default App;
