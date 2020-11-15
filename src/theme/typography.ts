import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const Heading1 = styled(Typography)`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  
`;

export const Heading3 = styled(Typography)<{uppercase: boolean; }>`
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  ${({ uppercase }) => uppercase && `
    text-transform: uppercase;
  `}
`;

export const Heading5 = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
`;

export const SmallText = styled(Typography)<{opacity?: number}>`
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  ${({ opacity }) => opacity && `
    opacity: ${opacity};
  `}
`;
