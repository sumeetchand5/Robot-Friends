import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    return (
        <div>
        {
            robots.map((user,i)=>{
                return ( <Card key={i} name={robots[i].name}
                    username = {robots[i].username}
                    email = {robots[i].email}
                />
                );
            })
        }
        </div>
    );
}

export default CardArray;