import React from 'react';

import Styled, { StyledProps } from './styles';

interface Props extends StyledProps {}

const HeroLogo = () => {
  return (
    <Styled.HeroBrandLogo>
      AIR COMMAND
    </Styled.HeroBrandLogo>
  );
};

export default HeroLogo;
