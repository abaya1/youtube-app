import  react from "react";

class Searchbar extends react.Component{

    constructor(props)
    {
        super(props);
        this.state = ({
                value:"" 
             });

            
    }



    findvideo = (event) =>
    {
        event.preventDefault();

        console.log(this.state.value)
        this.props.videosearch(this.state.value)



    }


    render(){
    return(
            <form autoComplete="off" onSubmit={this.findvideo} className="formy">
                <div className="finder">
                    <div className="finder__outer">
                        <div className="finder__inner">
                            <input id="finder__input" type="text" name="city" value={this.state.value} placeholder='search a video' onChange={e => this.setState({value: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <h6 className='errorMessage'>{this.state.error}</h6>
        </form>
        );
        }

};

export default Searchbar;