import { Outlet } from "react-router";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col gap-8 mx-[15%]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
