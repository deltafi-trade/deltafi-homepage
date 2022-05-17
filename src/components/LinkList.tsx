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
  ${({ theme }) => theme.muibreakpoints.up("lg")} {
    margin-right: 2.5%;
  }
`;

const StyleButton = styled(ButtonBase)`
  font: inherit;

`

const CustomLink = styled(Link)`
  padding: 0 32px;
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
  font-weight: 600;
  font-size: 18px;
`;

const Divider = styled.div`
  background: ${({ theme }) => theme.palette.background.primary};
  height: 1px;
  margin: 0 18px;
`;

const useStyles = makeStyles((theme: Theme) => ({
  dropDownContainer: {
    padding: "0 10px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWdith: "200px",
    [theme.breakpoints.up("lg")]: {
      padding: "0 32px",
    },
  },
  dropDown: {
    width: "200px",
    borderRadius: "7px",
    marginTop: "10px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
    marginLeft: "-18px",
  },
  dropDownMenuItem: {
    padding: "12px 28px",
    width: "200px",
    "&:hover": {
      color: theme.palette.primary.main
    }
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
          Audit
        </StyleButton>
        <Menu className={classes.dropDown} anchorEl={auditAuditReportEl} open={auditAuditReportOpen} onClose={handleAuditReportClose}>
          <MenuItem className={classes.dropDownMenuItem} key="Certik" onClick={handleAuditReportClose}>
            <DropDownLink color="inherit" underline="none" href={CERTIK_LINK} target="_blank" rel="noreferrer noopener">
              Certik
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="SlowMist" onClick={handleAuditReportClose}>
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
