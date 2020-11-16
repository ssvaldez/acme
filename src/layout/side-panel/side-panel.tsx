import React from "react";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { ReactComponent as Accent } from "images/accent.svg";
import { ReactComponent as AccentLarge } from "images/accent-large.svg";
import { ReactComponent as Logo } from "images/logo.svg";
import { Heading1, Heading3, Heading5 } from "theme";

const SidePaper = styled(Paper)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  width: 600px;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.secondary.main} 100%
  );
  box-shadow: none;
`;

const TopAccent = styled(Accent)`
  position: relative;
  top: -18%;
  right: -92%;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 75px;
`;

const LogoContainer = styled.div`
  display: flex;
  h3 {
    padding-left: 19px;
  }
`;

const MainHeader = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const BottomAccent = styled(AccentLarge)`
  transform: translate(-18%, 80%);
`;

export function SidePanel() {
  return (
    <SidePaper square>
      <TopAccent />
      <CenterContainer>
        <LogoContainer>
          <Logo />
          <Heading3 variant="h3" color="textSecondary" uppercase={true}>
            Acme
          </Heading3>
        </LogoContainer>
        <MainHeader>
          <Heading1 variant="h1" color="textSecondary">
            Sign in and start saving your time today.
          </Heading1>
        </MainHeader>
        <Heading5 variant="h5" color="textSecondary">
          We provide 24/7 support with our highly dedicated professional team.
        </Heading5>
      </CenterContainer>
      <BottomAccent />
    </SidePaper>
  );
}
