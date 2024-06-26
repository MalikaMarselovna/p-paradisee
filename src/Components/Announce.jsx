import React, { useState } from "react";
import { Close } from "@mui/icons-material";

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#f92e9e] font-bold text-white flex items-center justify-center p-[10px] container"
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  };

  return (
    <div className="bg-[#f92e9e]">
      <div className={announceStyle}>
        <h2> Hurry up it's 40% off now</h2>
        <Close className="cursor-pointer ml-6 " onClick={handleClose} />
      </div>
    </div>
  );
}

export default Announce;
