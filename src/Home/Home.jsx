import Left from "../components/Left/Left"
import Right from "../components/Right/Right"
import './Home.css';

function Home(){
    return(
        <div className="home">
            <Left />
            <Right />
        </div>
    )
}

export default Home