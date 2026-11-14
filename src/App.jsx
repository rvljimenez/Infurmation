import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import { Dogs } from "./pages/Dogs";
import DogProfile from "./pages/DogProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:dogid" element={<DogProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
