// components/Layout.js or .tsx

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[105px]">{children}</div>
    </div>
  );
}
