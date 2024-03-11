import SSR from "@/app/components/rendering/SSR";
import React from "react";
import { pageStyled } from "../style";

function SSRPage() {
  return (
    <div className={pageStyled.divStyle}>
      <h1 className={pageStyled.h1Style}>SSR 페이지 입니다!</h1>
      <SSR />
    </div>
  );
}

export default SSRPage;
