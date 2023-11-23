import React from "react";
import MoviCard from "./MoviCard";

const MoviList = ({list})=> {
return (
    <div>
{list.map((movie)=>(

<MoviCard movie={movie}/>

))}
</div>
)

}
export default MoviList;



