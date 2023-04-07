import React from 'react';
class Xclasss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            c: props.a,
            xian: 'true'
        };
        this.chu = this.chu.bind(this);

    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setnum(),
            1000
        );
    }
    tick() {
        this.setState({
            data: new Date()
        })
    }
    setnum() {
        this.setState({
            c: this.state.c + 1
        })
    }
    chu() {
        this.setState(state => ({
            xian: !state.xian
        }))
    }
    handclick(e){
        alert(e)
    }
    render() {
        const state = this.state;
        const arr = [1,2,3,4];
        const arr2 = arr.map((item,index)=> <li key={index}>{item}</li>
        )
        return (<div><h1>{state.c}</h1><h2>{this.state.data.toLocaleTimeString()}</h2><h3>{state.xian && <h1>真的</h1>}</h3><button onClick={this.chu}>{state.a}</button>
        <button onClick={()=>this.handclick('cao')}>是</button>
        {arr2}
        </div>);
    }
}
export default Xclasss;