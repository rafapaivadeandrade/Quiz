import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { UserContextProvider } from '../context/UserContext';
import { Montserrat } from '@next/font/google';

const mont = Montserrat({ subsets: ['latin'] })

const GlobalStyles = createGlobalStyle`
 html, body{
  padding: 0;
  margin: 0;
  font-family: ${mont.style.fontFamily};
  overflow: hidden;
  }

a {
  color: inherit;
  cursor: pointer;
}

* {
  box-sizing: border-box;
  font-family: ${mont.style.fontFamily};
}
`;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>

    </>
  );
}

export default MyApp;
