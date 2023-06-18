import React from 'react'
import { Head, MouseEffect, Nav, Social, Hero } from '@components';
import { GlobalStyle, theme } from '@styles';
import { ThemeProvider, styled } from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0px var(--body-padding);
  display: flex;

  header {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--body-padding) 0;
  }

  & #content {
    width: 50%;
    padding: var(--body-padding) 0;
  }

`;

const Layout = ({children}) => {
  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MouseEffect />
          <StyledContent>
            <header>
              <Hero />
              <Nav />
              <Social />
            </header>
            <div id='content'>
              { children }
            </div>

          </StyledContent>
        </ThemeProvider>

      </div>
    </>
  )
}

export default Layout