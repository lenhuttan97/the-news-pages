import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Topic, { ckeckTopic } from './pages/Topic';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import "./fontawesome.js"
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "topic/:topicId",
        loader: ckeckTopic,
        element: <Topic />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
