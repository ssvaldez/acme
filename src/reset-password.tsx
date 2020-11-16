import React, { useState } from "react";
import { SidePanel } from "layout/side-panel";
import { MainPanel } from "layout/main-panel";
import { setRef, TextField } from "@material-ui/core";
import { Heading3, SmallText } from "theme";
import { Divider, SignInFields, ActionButton, ResetLink } from "theme";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import styled from "styled-components";

const Instructions = styled.div`
  width: 360px;
  text-align: center;
  padding-top: 18px;
`;

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  function handleEmailFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  return (
    <>
      <SidePanel />
      <MainPanel>
        <Heading3 variant="h3" uppercase={false}>
          Reset Password
        </Heading3>
        <Instructions>
          <SmallText>
            Enter your registered email in order to receive password reset
            Instructions.
          </SmallText>
        </Instructions>
        <Divider></Divider>
        <SignInFields>
          <TextField
            placeholder="Email"
            variant="outlined"
            onChange={handleEmailFieldChange}
          ></TextField>
          <ActionButton variant="contained">Reset Password</ActionButton>
        </SignInFields>
        <div>
          <SmallText color="textPrimary">
            Didn’t mean to click that?{" "}
            <Link component={RouterLink} to="/sign-in">
              <ResetLink>Sign In</ResetLink>
            </Link>
            .
          </SmallText>
        </div>
      </MainPanel>
    </>
  );
}
