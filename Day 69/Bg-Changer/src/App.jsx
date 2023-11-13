// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import ColourChanger from './components/ColourChanger';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return( 
    <>
  <MantineProvider>
    <ColourChanger />
    </MantineProvider>
    </>
  );
}