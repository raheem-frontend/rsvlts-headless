// components/Layout.js or .tsx

import Navbar from "./Navbar";
import AnnouncementBar from "./AnnouncementBar";

export default function Layout({ children }) {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <div className="pt-[105px]">{children}</div>
    </div>
  );
}
