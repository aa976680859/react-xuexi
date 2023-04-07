import React from 'react';

class Text extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vaue:'请输入'
        }
    }
    hand(event){
        this.setState({
            value: event.target.value
        })
    }
    render(){
        const state = this.state;
        return(<div>
            <textarea value={state.value} onChange={()=>this.hand}></textarea>
        </div>)
    }
}
export default Text;