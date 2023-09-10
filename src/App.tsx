import { useState } from 'react';

// Component
import Button from './button';

const App = () => {
  const [isFetching] = useState(true);

  return (
    <>
      <Button isFetching disabled={isFetching} bgColor="#82ffdaab" />
      <Button isFetching={false} bgColor="#82ffdaab">
        Click
      </Button>
      <Button isFetching={false} hoverOption={{ bgColor: '#fff' }}>
        Click
      </Button>
    </>
  );
};

export default App;
