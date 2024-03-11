"use client";
import { cat } from "@/app/components/rendering/types";
import React, { useEffect, useState } from "react";
import { catStyled } from "./style";

const CSR = () => {
  const [cat, setCat] = useState<cat | null>(null);
  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const results = await response.json();
      setCat(results);
    };
    fetchCat();
  }, []);
  return (
    <div className={catStyled.divStyle}>
      <p className={catStyled.factStyle}>{cat?.fact}</p>
      <p className={catStyled.lengthStyle}>length : {cat?.length}</p>
    </div>
  );
};

export default CSR;
