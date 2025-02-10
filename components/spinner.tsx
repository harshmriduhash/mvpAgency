import { Loader } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader className="animate-spin text-blue-500" size={30} />
    </div>
  );
};

export default Spinner;
