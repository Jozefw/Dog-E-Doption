import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogList.css'

class DogList extends Component {
   
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center'>Dog List</h1>
                    <div className="row">
                    {this.props.doggy.map((SingleDog)=>(
                        <div className='Dog col-lg-4 text-center' key={SingleDog.name}>
                            <img src={SingleDog.src} alt={SingleDog.name}></img>
                            <h3>
                                <Link className="underline" to={`/dogs/${SingleDog.name}`}>{SingleDog.name}</Link></h3>
                        </div>
                    ))}
                    </div>
                </div>
        )
    }
}

export default DogList
