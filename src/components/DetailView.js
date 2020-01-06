import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type1, type2, ability } = pokemon;

    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite" />
            <div className="data-wrapper">
                <h1 className="data-name">
                    Name:
                    {name
                        ? ' ' + name.charAt(0).toUpperCase() + name.slice(1)
                        : name}
                </h1>
                <h2 className="data-id">ID: {id}</h2>
                <p className="data-char">
                    Type: {type1 ? type1.toUpperCase() : type1}{' '}
                    {type2 ? type2.toUpperCase() : ''}
                </p>
                <p className="data-ability">
                    Ability: {ability ? ability.toUpperCase() : ability}
                </p>
            </div>
        </section>
    );
};

export default DetailView;
