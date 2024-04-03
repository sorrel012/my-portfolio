import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Profile from '../pages/profile/Profile.tsx';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Login from '../pages/admin/Login.tsx';
import Admin from '../pages/admin/Admin.tsx';
import AdminHome from '../pages/admin/AdminHome.tsx';
import AdminProfile from '../pages/admin/AdminProfile.tsx';
import AdminSkills from '../pages/admin/AdminSkills.tsx';
import AdminProjects from '../pages/admin/AdminProjects.tsx';
import AdminContact from '../pages/admin/AdminContact.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          { index: true, element: <AdminHome /> },
          { path: 'profile', element: <AdminProfile /> },
          { path: 'skills', element: <AdminSkills /> },
          { path: 'projects', element: <AdminProjects /> },
          { path: 'contact', element: <AdminContact /> },
        ],
      },
    ],
  },
]);
