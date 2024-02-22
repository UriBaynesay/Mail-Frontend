import { Routes, Route } from "react-router-dom"
import routes from "./routes"

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={true}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
