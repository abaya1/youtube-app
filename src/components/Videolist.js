import React from "react";
import Videoitem from "./Videoitem"

const Videolist = (props) => 
{

    const renderedlist = props.videos.map((video) => {
        return <Videoitem key={video.id.videoId} video={video} videoselector={props.videoselector}/>
    });

  return(
    <div className="ui relaxed divided list">
      {renderedlist}
    </div>
  );
}


export default Videolist