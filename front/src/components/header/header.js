import React from "react";
import { HeaderContainer } from "./styled";
import feed from "../../assets/FEED.png"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={feed} alt="Imagem da logo meta" height="40px"/>
    </HeaderContainer>
  );
};

export default Header;
