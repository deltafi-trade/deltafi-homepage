import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

interface Props {
  isDark: boolean;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const useStyles = makeStyles(({ palette, breakpoints }: Theme) => ({
  logo: {
    color: palette.text.primary,
    fontWeight: 400,
    width: 180,
    [breakpoints.down("md")]: {
      width: 140,
    },
    [breakpoints.down("sm")]: {
      width: 100,
    },
  },
}));

const StyledDiv = styled.div`
  margin-right: 2rem;
`;

const Logo: React.FC<Props> = ({ href }) => {
  const classes = useStyles();

  return (
    <StyledDiv>
      <StyledLink to={href} aria-label="DeltaFi App">
        <img src="/images/deltafi-logo.svg" alt="" className={classes.logo} />
      </StyledLink>
    </StyledDiv>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
