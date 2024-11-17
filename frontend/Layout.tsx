import { ReactNode } from "react";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="w-full max-w-[1440px] bg-white">
        <TopNavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;