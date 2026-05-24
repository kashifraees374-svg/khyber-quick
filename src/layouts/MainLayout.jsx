import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Page content goes here */}
      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}