import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <main className="flex flex-col items-center bg-cararra-300">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}