import App from './App';
import Favorites from './screens/favorites';
import {createBrowserRouter} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ]);

export default router