import styled from "styled-components";
import { ButtonBase, Menu, MenuItem, Link, Theme, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {
  HOMEPAGE_LINK,
  CERTIK_LINK,
  SLOWMIST_LINK,
  TOKENOMICS_LINK,
  BLOG_LINK,
} from "config/constants/constant";
import { useRef, useState } from "react";
// import useOutsideClick from "hooks/useOutsideClick";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  padding: 0 10px;
`;

const StyledDiv = styled(Box)`
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
  font-weight: 700;
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
`;

const CustomLink = styled(Link)`
  margin: 0 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "IBM Plex Mono";
  ${({ theme }) => theme.muibreakpoints.down("lg")} {
    margin: 0 20px;
  }
  ${({ theme }) => theme.muibreakpoints.down("md")} {
    margin: 0 12px;
  }
`;

const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  font-family: Rubik;
`;

const Divider = styled.div`
  background: #3C3C3C;
  height: 1px;
  margin: 0 18px;
`;

const useStyles = makeStyles((theme: Theme) => ({
  dropDownContainer: {
    margin: "0px 12px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWdith: "300px",
    fontFamily: "IBM Plex Mono",
    [theme.breakpoints.up("md")]: {
      margin: "0 20px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 32px",
    },
  },
  dropDown: {
    width: "200px",
    borderRadius: "10px",
    marginTop: "24px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
    marginLeft: "-30px",
  },
  dropDownMenuItem: {
    padding: "12px 28px",
    width: "200px",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "inherit",
    },
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
      borderRadius: "20px",
    },
    "&:hover": {
      "&::before": {
        visibility: "visible",
      },
    },
  },
}));

const LinkList: React.FC = (props) => {
  const [auditAuditReportEl, setAuditReportEl] = useState<null | HTMLElement>(null);
  const [resourceEl, setResourceEl] = useState<null | HTMLElement>(null);

  const auditAuditReportOpen = Boolean(auditAuditReportEl);
  const resourceOpen = Boolean(resourceEl);

  const auditReportRef = useRef();
  const handleAuditReportClick = () => {
    setAuditReportEl(auditReportRef.current);
  };
  const handleAuditReportClose = () => {
    setAuditReportEl(null);
  };

  const resourceRef = useRef();
  const handleresourceClick = () => {
    setResourceEl(resourceRef.current);
  };
  const handleResourceClose = () => {
    setResourceEl(null);
  };

  const classes = useStyles(props);

  return (
    <StyledDiv>
      <CustomLink color="inherit" underline="none" href={HOMEPAGE_LINK} className={classes.hoverUnderscore}>
        Home
      </CustomLink>
      <CustomLink color="inherit" underline="none" href={TOKENOMICS_LINK} className={classes.hoverUnderscore}>
        Token
      </CustomLink>
      <CustomLink color="inherit" underline="none" href="#" className={classes.hoverUnderscore}>
        Governance
      </CustomLink>
      <div id="resources-menu" className={`${classes.hoverUnderscore} ${classes.dropDownContainer}`}>
        <StyleButton ref={resourceRef} onClick={handleresourceClick}>
          Resources
        </StyleButton>
        <Menu className={classes.dropDown} anchorEl={resourceEl} open={resourceOpen} onClose={handleResourceClose}>
          <MenuItem className={classes.dropDownMenuItem} key="Whitepaper" onClick={handleResourceClose}>
            <DropDownLink color="inherit" underline="none" href="/docs/whitepaper.pdf" target="_blank" rel="noreferrer noopener">
              Whitepaper
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="Tokenomics" onClick={handleResourceClose}>
            <DropDownLink color="inherit" underline="none" href="" target="_blank" rel="noreferrer noopener">
              Tokenomics
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="Litepaper" onClick={handleResourceClose}>
            <DropDownLink color="inherit" underline="none" href="" target="_blank" rel="noreferrer noopener">
              Litepaper
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="Blog" onClick={handleResourceClose}>
            <DropDownLink color="inherit" underline="none" href={BLOG_LINK} target="_blank" rel="noreferrer noopener">
              Blog
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="Docs" onClick={handleResourceClose}>
            <DropDownLink color="inherit" underline="none" href="" target="_blank" rel="noreferrer noopener">
              Docs
            </DropDownLink>
          </MenuItem>
        </Menu>
      </div>
      <div id="audit-report-menu" className={`${classes.hoverUnderscore} ${classes.dropDownContainer}`}>
        <StyleButton ref={auditReportRef} onClick={handleAuditReportClick}>
          Audits
        </StyleButton>
        <Menu
          className={classes.dropDown}
          anchorEl={auditAuditReportEl}
          open={auditAuditReportOpen}
          onClose={handleAuditReportClose}
        >
          <MenuItem className={classes.dropDownMenuItem} key="Certik" onClick={handleAuditReportClose}>
            <DropDownLink
              color="inherit"
              underline="none"
              href={CERTIK_LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              Certik
            </DropDownLink>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.dropDownMenuItem} key="SlowMist" onClick={handleAuditReportClose}>
            <DropDownLink
              color="inherit"
              underline="none"
              href={SLOWMIST_LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              SlowMist
            </DropDownLink>
          </MenuItem>
        </Menu>
      </div>
    </StyledDiv>
  );
};

export default LinkList;
