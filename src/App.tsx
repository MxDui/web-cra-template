import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
