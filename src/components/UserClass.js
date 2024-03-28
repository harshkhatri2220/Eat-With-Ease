import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count : 0,
            count2:2,
        }

    }
    render(){
        const {count , count2} = this.state;
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>count : {count}</h1>
                <button onClick={()=>{this.setState({
                    count:count+1,
                })}}>Click</button>
            </div>
        )
    }
}
export default UserClass;