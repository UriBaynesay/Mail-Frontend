import { Homepage } from "./pages/Homepage"
import { LoginPage } from "./pages/Login"

const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
]

export default routes
