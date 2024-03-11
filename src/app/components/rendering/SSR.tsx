import { cat } from "@/app/components/rendering/types";
import React from "react";
import { catStyled } from "./style";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const catFact: cat = await response.json();
  return (
    <div className={catStyled.divStyle}>
      <p className={catStyled.factStyle}>{catFact.fact}</p>
      <p className={catStyled.lengthStyle}>length : {catFact.length}</p>
    </div>
  );
};

export default SSR;
