import { Outlet, useMatch } from 'react-router-dom';
import Header from './components/Header.tsx';

function App() {
  const homeMatch = useMatch('/');
  const profileMatch = useMatch('/profile');
  const skillsMatch = useMatch('/skills');
  const projectsMatch = useMatch('/projects');
  const contactMatch = useMatch('/contact');

  const category =
    [homeMatch, profileMatch, skillsMatch, projectsMatch, contactMatch]
      .find((match) => match !== null)
      ?.pathname.slice(1) || '';

  return (
    <>
      {!homeMatch && <Header category={category} />}
      <Outlet />
    </>
  );
}

export default App;
