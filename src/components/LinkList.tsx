import styled from "styled-components";
import { ButtonBase, Menu, MenuItem, Link, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {
  HOMEPAGE_LINK, CERTIK_LINK, SLOWMIST_LINK, WHITE_PAPER, TOKENOMICS_LINK
} from "config/constants/constant";
import { useRef, useState } from "react";
// import useOutsideClick from "hooks/useOutsideClick";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  padding: 0 10px;
`;

const StyledDiv = styled(Typography)`
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
  font-weight: 700;
  font-size: 18px;
  a {
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    display: none;
  }
`;

const StyleButton = styled(ButtonBase)`
  font: inherit;
`

const CustomLink = styled(Link)`
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ theme }) => theme.muibreakpoints.down("lg")} {
    padding: 0 10px;
  }
`;

const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Divider = styled.div`
  background: ${({ theme }) => theme.palette.gradient.cta};
  height: 1px;
  opacity: 0.16;
  margin: 0 6px;
`;

const useStyles = makeStyles((theme: Theme) => ({
  dropDownContainer: {
    padding: "0 20px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  dropDown: {
    padding: "10px",
    borderRadius: "7px",
  },
  hoverUnderscore: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "3px",
      bottom: "-10px",
      left: "0",
      visibility: "hidden",
      backgroundColor: "#693EFF",
      borderRadius: "20px"
    },
    "&:hover": {
      "&::before": {
        visibility: "visible",
      }
    }
  }
}));

const LinkList: React.FC = (props) => {
  const [auditAuditReportEl, setAuditReportEl] = useState<null | HTMLElement>(null);
  const auditAuditReportOpen = Boolean(auditAuditReportEl);
  const auditReportRef = useRef();
  const handleAuditReportClick = () => {
    console.log(auditReportRef)
    setAuditReportEl(auditReportRef.current);
  };
  const handleAuditReportClose = () => {
    setAuditReportEl(null);
  };

  const classes = useStyles(props);


  return (
    <StyledDiv variant="h3">
      <CustomLink color="inherit" underline="none" href={HOMEPAGE_LINK} className={classes.hoverUnderscore}>
        Home
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={TOKENOMICS_LINK} className={classes.hoverUnderscore}>
        Token
      </CustomLink>
      <div id="audit-report-menu" className={`${classes.hoverUnderscore} ${classes.dropDownContainer}`}>
        <StyleButton ref={auditReportRef} onClick={handleAuditReportClick} >
          Audit Report
        </StyleButton>
        <Menu className={classes.dropDown} anchorEl={auditAuditReportEl} open={auditAuditReportOpen} onClose={handleAuditReportClose}>
          <MenuItem onClick={handleAuditReportClose}>
            <DropDownLink key="Certik" color="inherit" underline="none" href={CERTIK_LINK} target="_blank" rel="noreferrer noopener">
              Certik
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem key="SlowMist" onClick={handleAuditReportClose}>
            <DropDownLink color="inherit" underline="none" href={SLOWMIST_LINK} target="_blank" rel="noreferrer noopener">
            SlowMist
            </DropDownLink>
          </MenuItem>
        </Menu>
      </div>
      <CustomLink color="inherit" underline="none" href={WHITE_PAPER} {... true?{target :"_blank", rel:"noreferrer noopener"}: {}} className={classes.hoverUnderscore}>
        Whitepaper
      </CustomLink>
    </StyledDiv>
  );
};

export default LinkList;
