import { useState } from "react";
import "./ImageComp.css"

function ImageComp()
{
    let [title,setTitle]=useState("React");

    let [url,setUrl]=useState(
       "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"
    );

    const changeReact=()=>{
        setUrl("https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png");
        setTitle("This is React");
    };

    const changeAngular=()=>{
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSVsyTE3Rq2DeKnZ9DvrUCTjEv6k0NTDNvw&s");
        setTitle("This is Angular");
    };

    return (
        <div id="Imagecomp">
            <h1>{title}</h1>
        <img src={url} width="300" height="300">
        </img>
        <br />
        <br />
        <button onClick={changeReact}>React</button>
        <button onClick={changeAngular}>Angular</button>
        </div>
    );
}

export default ImageComp;