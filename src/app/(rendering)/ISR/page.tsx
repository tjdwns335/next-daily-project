import ISR from "@/app/components/rendering/ISR";
import React from "react";
import { pageStyled } from "../renderingStyle";

function ISRPage() {
  return (
    <div className={pageStyled.divStyle}>
      <h1 className={pageStyled.h1Style}>ISR 페이지 입니다!</h1>
      <ISR />
    </div>
  );
}

export default ISRPage;
