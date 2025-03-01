import React from "react";
import error from "../Assets/Images/404error.webp"

export default function Error() {
  return <div>
    <img src={error} alt="Error Page 404" style={{height:"700px",width:"1550px"}}/>
  </div>;
}
