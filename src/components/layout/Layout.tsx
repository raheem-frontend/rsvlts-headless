// components/Layout.js or .tsx

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-[100%] h-[100%]">
      <Navbar />
      <div className="w-[100%] h-[100%] pt-[159px]">{children}</div>
    </div>
  );
}
