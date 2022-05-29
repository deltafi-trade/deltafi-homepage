import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { DEFAULT_META } from "config/constants/meta";

const StyledDiv = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

function PageMeta() {
  const { title, description } = { ...DEFAULT_META };

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <>
    <PageMeta />
    <StyledDiv {...props}>{children}</StyledDiv>
  </>
);

export default Page;
