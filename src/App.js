import Navigation from './navgation';

import { ThemeProvider } from './context';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
};

export default App;
