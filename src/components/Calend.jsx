import React from "react";
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";

const Calend = () => {
  return (
    <>
      <PopupWidget
        url="https://calendly.com/texastitans"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#239487"
      />
    </>
  );
};

export default Calend;
