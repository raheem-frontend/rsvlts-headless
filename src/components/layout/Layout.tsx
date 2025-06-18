import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-[100%] h-[100%]">
      <Navbar />
      <div className="w-[100%] h-[100%] lg:pt-[159px] pt-[107px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
