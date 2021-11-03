import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet-async'
import { DEFAULT_META } from 'config/constants/meta'

const StyledPage = styled('div')(({
  theme
}) => ({
  backgroundColor: theme.palette.background.primary,
  backgroundImage: 'url(/images/homepage/landing-bg.png)',
  backgroundSize: 'cover'
}));

const PageMeta = () => {
  const { title, description } = { ...DEFAULT_META }

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
