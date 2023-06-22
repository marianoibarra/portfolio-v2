import React from 'react'
import { Head, Nav, Social, Hero, Footer } from '@components';
import { MouseEffect } from '@elements';
import { GlobalStyle, theme } from '@styles';
import { ThemeProvider, styled } from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0px var(--body-padding);
  display: flex;
  counter-reset: section 0;
  gap: 1rem;

  > header {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--body-padding) 0;
  }

  > main {
    width: 50%;
    padding: 0;
    padding-bottom: var(--body-padding);

    &:has(#projects li:hover) #jobs li,
    &:has(#jobs li:hover) #projects li {
      opacity: .5;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 48px;

    > header {
      position: relative;
      width: 100%;
      height: auto;
      gap: 28px;
      justify-content: flex-start;
      padding-bottom: 0;
    }

    > main {
      width: 100%;
    }
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
            <main id='content'>
              { children }
              <Footer />
            </main>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout