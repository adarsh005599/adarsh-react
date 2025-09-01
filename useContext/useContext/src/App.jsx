import { createContext } from 'react';
import ChildA from './components/ChildA.jsx';

export const UserContext = createContext();

function App() {
  const user = 'Adarsh Singh';

  return (
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  );
}

export default App;
