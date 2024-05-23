import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./pages/main";
import Country from "./pages/country";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Main />} />
        <Route path="/country/:name" element={<Country />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
