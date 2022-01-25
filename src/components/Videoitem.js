import React from "react";
import './Videoitem.css'


const Videoitem = (props) => {

    console.log()

   return <div onClick={() => props.videoselector(props.video)} className="video-item item">
            <img className="ui image" alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url}/>
           <div className="content"> <div className="header">{props.video.snippet.title} </div></div>
       </div>

}

export default Videoitem