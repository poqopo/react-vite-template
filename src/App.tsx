import { useRoutes } from 'react-router-dom';
import Community from './pages/Community';
import DefaultLayout from './pages/DefaultLayout';
import Home from './pages/Home';

function App() {
  const element = useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
