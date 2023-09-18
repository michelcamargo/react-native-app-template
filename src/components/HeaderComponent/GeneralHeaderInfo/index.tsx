import React from 'react';

import Styled from './styles';

const GeneralHeaderInfo = () => {
  
  const currentUser = 'Michel Camargo';
  const currentLocation = 'Casa';
  
  return (
    <Styled.InfoPanelButton>
      <Styled.SessionInfo>
        <Styled.CurrentUserName>{currentUser}</Styled.CurrentUserName>
        <Styled.LocationInfo>{currentLocation}</Styled.LocationInfo>
      </Styled.SessionInfo>
    </Styled.InfoPanelButton>
  );
};

export default GeneralHeaderInfo;
