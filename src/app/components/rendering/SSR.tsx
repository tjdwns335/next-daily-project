import { cat } from "@/app/components/rendering/types";
import React from "react";
import { catStyled } from "./style";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const results = await response.json();
  const cat: cat = results;
  return (
    <div className={catStyled.divStyle}>
      <p className={catStyled.factStyle}>{cat.fact}</p>
      <p className={catStyled.lengthStyle}>length : {cat.length}</p>
    </div>
  );
};

export default SSR;
