import { Outlet, useMatch } from 'react-router-dom';

function App() {
  const mainMatch = useMatch('/');

  return (
    <>
      {/*{!mainMatch && <Header />}*/}
      <Outlet />
    </>
  );
}

export default App;
