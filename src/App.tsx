import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Install from "./pages/Install";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </BrowserRouter>
  );
}
