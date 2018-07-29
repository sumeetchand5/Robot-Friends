import React from 'react';
import CardArray from '../Components/CardArray';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import 'tachyons';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField :event.target.value});

    };

    render(){
        const filteredRobot = this.state.robots.filter(robot=>{
            return robot.username.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if(!this.state.robots.length) {
            return <h1 className='tc'>Loading Please Wait</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                         <CardArray robots={filteredRobot}/>
                    </Scroll>
                </div>
            );
        }
    }
}

/*
const App = () => {
    return (
        <div className='tc'>
            <h1>Robot Friends</h1>
            <SearchBox/>
            <CardArray robots={robots}/>
        </div>
    );
};
*/
export default App;