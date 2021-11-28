import React, { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';

type pageProps = {
  fullWidth: boolean,
  grid: boolean,
  
}

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
 type LayoutProps = {
  fullWidth?: boolean;
  children: ReactNode;
  grid?: boolean;
};
function Layout({ fullWidth=false, children, grid=false }:
  LayoutProps) {

  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid} >
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled('div')<pageProps>({
  display: 'flex',  
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  width: '100%',
},
  props => ({
  maxWidth: props.fullWidth ? 0 : `${widths.regularPageWidth}px`,
  padding: props.fullWidth ? 0 : `${unit*2}px`,
  paddingBottom: `${unit * 5}px`,
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  })
)

/*
const PageContainer = styled('div')<pageProps>({
  display: 'flex',  
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: '1100px',
  width: '100%',
  padding: '16px'
},
  props => ({
  paddingBottom: `${props.paddingBottom}px`,
  justifyContent: props.justifyContent,
  flexDirection: props.flexDirection
  })
);*/