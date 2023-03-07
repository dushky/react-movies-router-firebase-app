import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllMovies from "./pages/AllMovies"
import Movie from "./pages/Movie"
import Form from "./pages/Form"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>

          <Route index element={<Home/>}/>
          <Route path="/all-movies" element={<AllMovies/>}/>
          <Route path="/one-movie/:movieId" element={<Movie/>}/>
          <Route path="/form" element={<Form/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App