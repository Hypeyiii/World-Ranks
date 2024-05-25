import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./pages/main";
import Country from "./pages/country";
import { FiltersProvider } from "./context/filtersContext";

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
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </>
  );
}

export default App;
