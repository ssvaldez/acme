import React from "react";
import { SidePanel } from "layout/side-panel";
import { MainPanel } from "layout/main-panel";
import { TextField } from "@material-ui/core";
import { Heading3, SmallText } from "theme";
import { Divider, SignInFields, ActionButton, ResetLink } from "sign-in";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function ResetPassword() {
  return (
    <>
      <SidePanel />
      <MainPanel>
        <Heading3 variant="h3" uppercase={false}>
          Reset Password
        </Heading3>
        <div>
          <SmallText>
            Enter your registered email in order to receive password reset
            Instructions.
          </SmallText>
        </div>
        <Divider></Divider>
        <SignInFields>
          <TextField placeholder="Email" variant="outlined"></TextField>
          <ActionButton variant="contained">Sign In</ActionButton>
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
