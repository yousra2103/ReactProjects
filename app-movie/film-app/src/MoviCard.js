
const MoviCard = ({movie})=> {
    return (
        <>
        <img src={movie.posterURL}/>

        <div>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <h3>{movie.rating}</h3>
    </div>





        </>
    )
}
export default MoviCard;