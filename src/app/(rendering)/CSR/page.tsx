import CSR from "@/app/components/rendering/CSR";
import React from "react";
import { pageStyled } from "../style";

function CSRpage() {
  return (
    <div className={pageStyled.divStyle}>
      <h1 className={pageStyled.h1Style}>CSR 페이지 입니다!</h1>
      <CSR />
    </div>
  );
}

export default CSRpage;
