import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";

const ConfirmButtonedStyled = styled.div`
margin: 20px;
color: green;
cursor: pointer;
`;

const CenterDiv = styled.div`
display: grid;
justify-content: center;
`;

export default function () {
  return (
      <AppContext.Consumer>
        {({confirmFavorites}) =>
            <CenterDiv>
              <ConfirmButtonedStyled onClick={confirmFavorites}>
                Confirm Favorites
              </ConfirmButtonedStyled>
            </CenterDiv>
        }
      </AppContext.Consumer>
  )
}