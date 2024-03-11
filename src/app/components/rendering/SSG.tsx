import { cat } from "@/app/components/rendering/types";
import React from "react";
import { catStyled } from "./style";

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const catFact: cat = await response.json();
  return (
    <div className={catStyled.divStyle}>
      <p className={catStyled.factStyle}>{catFact.fact}</p>
      <p className={catStyled.lengthStyle}>length : {catFact.length}</p>
    </div>
  );
};

export default SSG;
