import React from "react";

const Filter = ({filterByName,filterChange }) => {
    return (
        <div>
            <input type="text" placeholder="serch" value={filterByName}
            onChange={(event)=> filterChange(event.target.value)}
            />
        </div>
    )
    }
    export default Filter;