
import React, { useState } from "react"; 
import MoviList from "./MoviList"; 
import Filter from "./filter";
function App() {
  const list = [{
    title: "Robots",
    description: "LOrem nananananananananananananna",
    posterURL:"https://cdn.cinematerial.com/p/136x/cxjkm1hz/robots-movie-poster-sm.jpg?v=1456114794",
    rating: 5 
 },
{
    title: "THE Good DINAUSOR",
    description: "LOrem nananananananananananananna",
    posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_thegooddinosaur_19753_03c2af0a.jpeg?region=0%2C0%2C540%2C810",
    rating: 5
},
{
    title: " ICE AGE",
    description: "LOrem nananananananananananananna",
    posterURL: "https://i.pinimg.com/474x/8a/3d/5b/8a3d5bacc2e5f11cb2c84e4ac32e3fef.jpg",
    rating: 5
},
{
    title: "SPIDER-MAN",
    description: "LOrem nananananananananananananna",
    posterURL: "https://fr.web.img6.acsta.net/medias/nmedia/18/83/19/35/20158079.jpg",
    rating: 5
},
{
    title: "DIANA",
    description: "LOrem nananananananananananananna",
    posterURL : "https://fr.web.img6.acsta.net/pictures/20/03/12/11/40/3453664.jpg",
    rating: 5
}];
   const [filterByName , setNomFilm]=useState("");
   const filterMovie = ()=> {
     return  list.filter((movie)=> movie.title.toLowerCase().includes(filterByName.toLowerCase()))
   }
  return (
    <div className="App">
      <Filter  filterByName={filterByName} 
                filterChange={setNomFilm}
      />
      <MoviList list={filterMovie()}/>
      
    </div>
  );
}


export default App;
