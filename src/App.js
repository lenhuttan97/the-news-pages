import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Root from './pages/Root';
import NotFound from './pages/NotFound';


function loader(params) {
  const topicId = params.params.topicId;
  console.log(topicId)
  if (topicId !== '1') {
    throw Error("Could not fetch project");
  }
  return topicId;
}


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
        path: "topic/:topicId",
        loader: loader,
        element: <Topic />,
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
