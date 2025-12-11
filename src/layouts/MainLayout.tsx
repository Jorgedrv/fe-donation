import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
