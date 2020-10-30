import React, {useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/09/48878769566_5f4640a97d_k.jpg",
        }
        
    ]);
    const swiped = (direction, nameToDelete) =>{
        console.log("removing :" + nameToDelete);
    };
    const outOfFrame = (name) =>{
        console.log(name+ "left the screen");
    }
    return (
       
        <div className="tinderCards">
             <div className="tinderCards_container">
             {people.map((person) =>(
                //  npm i react-tinder-card
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe ={["up", "down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div className = "card"
                    style={{ backgroundImage: `url(${person.url})` }}
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
             </div>
            
            
        </div>
    )
}

export default TinderCards
