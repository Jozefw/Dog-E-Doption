import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

class Dog extends Component {
    render() {
        return (
               <div className="DogDetails row justify-content-center mt-5">
                   <div className="col-11 col-lg-5">
                       <div className="DogDetails-card card">
                            <img className="card-img-top" src={this.props.dogImg} alt={this.props.dogsName.name}></img>
                            <div className="card-body">
                                <h2 className="card-title">{this.props.dogsName}</h2>   
                                <h4 className="card-subtitle text-muted">{this.props.dogAge} years old</h4> 
                            </div>
                            <ul className="list-group list-group-flush">
                               {this.props.dogFact.map((fact,index) =>(
                                   <li className="list-group-item" key={index}>{fact}</li>
                               ))}
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-info">Back</Link>
                            </div>
                       </div>
                   </div>
               </div>
        )
    }
}

export default Dog
