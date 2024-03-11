"use client";
import { cat } from "@/app/components/rendering/types";
import React, { useEffect, useState } from "react";
import { catStyled } from "./style";

const CSR = () => {
  const [catFact, setCatFact] = useState<cat | null>(null);
  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result: cat = await response.json();
      setCatFact(result);
    };
    fetchCat();
  }, []);
  return (
    <div className={catStyled.divStyle}>
      <p className={catStyled.factStyle}>{catFact?.fact}</p>
      <p className={catStyled.lengthStyle}>length : {catFact?.length}</p>
    </div>
  );
};

export default CSR;
