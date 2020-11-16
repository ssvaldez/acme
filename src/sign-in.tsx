import React from "react";
import { SidePanel } from "layout/side-panel";
import { MainPanel } from "layout/main-panel";
import { TextField } from "@material-ui/core";
import { Heading3, SmallText } from "theme";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Divider, SignInFields, ActionButton, ResetLink } from "theme";

export default function SignIn() {
  return (
    <>
      <SidePanel />
      <MainPanel>
        <Heading3 variant="h3" uppercase={0}>
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
