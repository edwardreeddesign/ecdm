import { DropdownProvider } from '../helpers/DropdownProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <DropdownProvider>
      <Component {...pageProps} />
    </DropdownProvider>
  );
}

export default MyApp;
