import "./Movie.css"
import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Movie = () => {
  const { movieId } = useParams()
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    projectFirestore.collection("movies").doc(movieId).get().then((document)=>{

      if (document.exists) {
        setData(document.data())
      }else {
        setError("dokument sa nenašiel")
      }

      setLoading(false)

    }).catch((err) => {
      setError(err.message)
    })

  },[movieId])

  return (
    <section className="one-movie-section">
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <h1>{data.title}</h1>
      <p>{data.minage}+</p>
      <p>{data.time} minút</p>
      <Link exact to="/all-movies">spät na zoznam filmov</Link>
    </section>
  )
}

export default Movie