import React from "react";
import { StyledCarimbo } from "./style";

const Carimbo = ({ assinatura }: any) => {
  return (
    <StyledCarimbo>
      <div className="carimbo2">
        <div className="carimbo">
          <div className="carimbo-texto">{assinatura}</div>
        </div>
      </div>
    </StyledCarimbo>
  );
};

export default Carimbo;
