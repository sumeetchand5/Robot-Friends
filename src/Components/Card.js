import React from 'react';
import 'tachyons';
import './Card.css';

const Card = ({name,username,email}) => {
    return (
       <div className = 'tc bg-light-green dib br3 pa3 ma3 grow' >
           <img height='150px' width='150px' src = {`https://robohash.org/${name}`} alt ='RoboHash'/>
           <h1>{username}</h1>
           <p>{email}</p>
       </div>
    );
};

export default Card ;