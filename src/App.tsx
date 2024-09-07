import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//pages
import Home from './pages/Home'
import Employees from './pages/Employees';

//layouts
import RootLayout from './layouts/RootLayout';

//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/employees" element={<Employees />}></Route>
    </Route>
  )
)

function App() {
  return (
    <div className="window">
    <RouterProvider router={router} />
    </div>
  )
}
export default App
