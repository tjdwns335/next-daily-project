import SSG from "@/app/components/rendering/SSG";
import React from "react";
import { pageStyled } from "../renderingStyle";

function SSGPage() {
  return (
    <div className={pageStyled.divStyle}>
      <h1 className={pageStyled.h1Style}>SSG 페이지 입니다!</h1>
      <SSG />
    </div>
  );
}

export default SSGPage;
