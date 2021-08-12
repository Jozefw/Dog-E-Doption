import React, { Component } from 'react';
import DogList from './DogList';
import Dog from './Dog';
import {Switch, Route,Redirect} from 'react-router-dom';

 class Routes extends Component {
    render() {

        const getDog = (routeProps) => {
            let name = routeProps.match.params.name;
            let currentDog = this.props.dogs.find((dogie) =>
            dogie.name.toLowerCase() === name.toLowerCase()
            );
              return <Dog {...routeProps} dogsName={currentDog.name} dogImg={currentDog.src} dogFact={currentDog.facts} dogAge={currentDog.age}></Dog>
            }

        return (    
        <Switch>
          <Route exact path='/dogs' render={()=><DogList doggy={this.props.dogs}></DogList>}>
          </Route>
          
          <Route exact path='/dogs/:name' render={getDog}>
          </Route>
          <Redirect to="./dogs"></Redirect>
        </Switch>
            
        )
    }
}

export default Routes
