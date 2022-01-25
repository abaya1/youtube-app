import React from "react";

const Videoshow = (props) =>
{

    if(props.video == null)
    {
        return <div></div>;
    }
    else
    {
        const videosource = `https://www.youtube.com/embed/${props.video.id.videoId}`

        return (
        <div>
            <div className="ui segment"> 
                <div className="ui embed">
                    <iframe title="video player" src={videosource} />
                </div>
                <h4 ui header>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
        );
    }

}

export default Videoshow