import React from 'react';


class PokemonType extends React.Component {
    render () {
        return (
            <div className="bordaPoke">
                <p> {this.props.poke.name}</p>
                <p> {this.props.poke.type}</p>
                <p> {this.props.poke.averageWeight.value} {this.props.poke.averageWeight.measurementUnit}</p>
                <img src={this.props.poke.image} alt="pokemon"></img>
                
            </div>
        )
    }
}

export default PokemonType;