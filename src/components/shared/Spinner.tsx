import React from "react";
import { LoaderCircle } from "lucide-react";

function Spinner({ color = "#05324f" }: { color?: string }) {
  return (
      <LoaderCircle size={20} color={color} className="animate-spin" />
  );
}

export default Spinner;
