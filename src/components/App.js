import React from "react";
import Searchbar from "./Searchbar";
import Youtube from "../api/youtube"
import Videolist from './Videolist'
import Videoshow from './Videoshow'



class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            videos: [],
            selectedvideo: null
        };
    }

    videoSearcher = async (value) =>
    {
        console.log(value)
        var data = await Youtube.get('/search', {params: { q: value}});
        console.log(data.data.items)
        this.setState({videos: data.data.items})
        this.setState({selectedvideo: data.data.items[0]})
        console.log(this.state.videos)

    }

    videoselector = (video) =>
    {
        this.setState({selectedvideo: video})
    }


    render()
    {
        return(
        <div className="container">
            <Searchbar videosearch={this.videoSearcher} />
            <Videoshow video={this.state.selectedvideo}/>
            <Videolist videos={this.state.videos}  videoselector={this.videoselector}/>
        </div>
        );
    }
}


export default App;