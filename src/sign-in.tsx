import React from "react";
import { SidePanel } from "layout/side-panel";
import { MainPanel } from "layout/main-panel";
import { Button, TextField } from "@material-ui/core";
import { Heading3, SmallText } from "theme";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export const Divider = styled.div`
  width: 39px;
  height: 1px;
  border: 2px solid ${(props) => props.theme.palette.text.primary};
  border-radius: 5px;
  opacity: 0.1;
  background: ${(props) => props.theme.palette.text.primary};
  margin: 48px 0 50px 0;
`;

export const SignInFields = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

export const ActionButton = styled(Button)`
  width: 360px;
  height: 56px;
  border-radius: 5px;
  background-image: linear-gradient(
    96deg,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.secondary.main} 100%
  );
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export const ResetLink = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
`;

export default function SignIn() {
  return (
    <>
      <SidePanel />
      <MainPanel>
        <Heading3 variant="h3" uppercase={false}>
          Sign in
        </Heading3>
        <Divider></Divider>
        <SignInFields>
          <TextField placeholder="Email" variant="outlined"></TextField>
          <TextField placeholder="Password" variant="outlined"></TextField>
          <ActionButton variant="contained">Sign In</ActionButton>
        </SignInFields>
        <div>
          <SmallText color="textPrimary">
            Forgot your password?{" "}
            <Link component={RouterLink} to="/reset-password">
              <ResetLink>Reset it here</ResetLink>
            </Link>
            .
          </SmallText>
        </div>
      </MainPanel>
    </>
  );
}
