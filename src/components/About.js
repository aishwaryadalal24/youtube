import React from 'react';

class About extends React.Component {

    constructor(props){
        super(props);
       // create state
       this.state = {
        count: 0,
        count2: 4,
       }
    }

    componentDidMount() {
        // make api call
        console.log("component did mount")
    }

    componentDidUpdate(prevState, prevProps){
        if(this.state.count !== prevState.count){
            //then excute this code
        }
    }
    render() {
        return <>
            <h1>About Youtube page</h1>   
        </>;
    }
}

export default About;