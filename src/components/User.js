import { useState } from "react";

const User = ({name}) =>{
    const [count,setcount] = useState(0);
    return(
        <div>
            <h1>{name}</h1>
            <h1>count : {count}</h1>
        </div>
    )
}

export default User;