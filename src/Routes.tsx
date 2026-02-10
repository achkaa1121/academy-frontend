import { Routes, Route } from "react-router";
import { MainLayout } from "./modules/home/components/MainLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/about" element={<div>about</div>} />
    </Routes>
  );
};
