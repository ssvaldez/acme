import React from "react";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { SmallText } from "theme";

const MainPaper = styled(Paper)`
  width: 1320px;
  height: 100vh;
  box-shadow: none;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  margin: 0 auto;
`;

const Spacer = styled.div`
  height: 20%;
`;

const Copyright = styled.div`
  display: flex;
  height: 30%;
  align-items: flex-end;
  justify-content: center;
  p {
    padding-bottom: 50px;
  }
`;

export function MainPanel(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <MainPaper square>
      <Spacer />
      <MainContent>{children}</MainContent>
      <Copyright>
        <SmallText color="textPrimary" opacity={0.5}>
          © Copyright ACME 2020
        </SmallText>
      </Copyright>
    </MainPaper>
  );
}
