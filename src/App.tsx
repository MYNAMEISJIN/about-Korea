import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeLayout /> }
    ]
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
