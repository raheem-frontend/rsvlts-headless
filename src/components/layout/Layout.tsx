// components/Layout.js or .tsx

import Navbar from "./Navbar";
import AnnouncementBar from "./AnnouncementBar";

export default function Layout({ children }) {
  return (
    <div className="w-[100%] h-[100%]">
      <AnnouncementBar />
      <Navbar />
      <div className="w-[100%] h-[100%]">{children}</div>
    </div>
  );
}
