import "./AllMovies.css"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AllMovies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(()=>{
    const unsubscribe = projectFirestore.collection("movies").onSnapshot(( snapshot )=>{

      if (snapshot.empty){
        setError("Žiadne filmy k vypísaniu")
      }else{
        let result = []
        snapshot.docs.forEach((movie)=>{
          result.push( {id: movie.id, ...movie.data()} )
        })
        setData(result)
      }

    }, (err)=>{setError(err.message)})
    
    return () => unsubscribe()
    
  },[])

  const deleteMovie = (id) => {
    projectFirestore.collection("movies").doc(id).delete()
  }

  return (
    <section>
      {error && <p>{error}</p>}
      {data.map((movie)=>{
        const {id, title} = movie

        return (
          <div key={id} className="one-movie">
            <p>{title}</p>
            <Link to={`/one-movie/${id}`}>Viac informácií</Link>
            <button onClick={()=>deleteMovie(id)}>zmazať</button>
          </div>
        )
      })}
    </section>
  )
}

export default AllMovies