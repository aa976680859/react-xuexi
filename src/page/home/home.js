import Xclasss from '../class/class.js'
import Text from '../text/text.js'
function Home(props) {
    function dian(){
        alert('bb')
    }
    return (<div><h1>welocome,{props.name}</h1>
        {/* <Xclasss name={props.name} a= {1} b='2' data={new Date()}></Xclasss><button onClick={dian}>吊我</button> */}
        <Text></Text>
        </div>)
}

export default Home;