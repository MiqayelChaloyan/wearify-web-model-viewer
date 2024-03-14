import { useCallback, useState } from 'react';

import Navigation from './navgation';

import { ThemeProvider } from './context';

const App = () => {

  const [open, setOpen] = useState(false);

  const handleSubmit = () =>  setOpen(true);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ThemeProvider>
      <button type="button" onClick={handleSubmit} className='button'>
        open modal
      </button>

      <Navigation open={open} handleClose={handleClose} />
    </ThemeProvider>
  )
};

export default App;
