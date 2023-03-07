import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
    const [movieTitle, setMovieTitle] = useState("")
    const [movieMinage, setMovieMinage] = useState("")
    const [movieTime, setMovieTime] = useState("")

const submitForm=(async (e) => {
    e.preventDefault()
    const newMovie = {
        title: movieTitle, 
        minage: parseInt(movieMinage), 
        time: parseInt(movieTime)
    }
    
    try{
        await projectFirestore.collection("movies").add(newMovie) //before deleting values!
        setMovieTitle("")
        setMovieMinage("")
        setMovieTime("")

    }catch(err){
        console.log(err.message)
    }
})

  return (
        <section className="form-section">
            <h1>Pridanie filmu</h1>
            <form onSubmit={submitForm}>
                <input
                    className="input" 
                    type="text" 
                    placeholder="názov"
                    onChange={(e)=>setMovieTitle(e.target.value)}
                    value={movieTitle}
                />

                <input 
                    className="input" 
                    type="number" 
                    placeholder="minimálny vek"
                    min="1"
                    onChange={(e)=>setMovieMinage(e.target.value)}
                    value={movieMinage}
                />

                <input 
                    type="number"
                    className="input" 
                    placeholder="doba trvania"
                    min="1"
                    onChange={(e)=>setMovieTime(e.target.value)}
                    value={movieTime}
                />

                <input type="submit" value="pridať film" />

            </form>
        </section>
    )
}

export default Form