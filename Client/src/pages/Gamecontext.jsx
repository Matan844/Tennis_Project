import { createContext, useContext } from 'react';
export const Details = createContext();
import { useState } from 'react';

export default function GameContext({ children }) {
    const [checker,setchecker] = useState(0)
    const [game,setGame] = useState([{
        gameId: '0',
        player1: "nati",
        player2: "yarin",
        player1score:"6",
        player2score:"2",
    
      },{
        gameId: '1',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },
      {
        gameId: '2',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },
      {
        gameId: '3',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '4',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '5',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '6',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '7',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '8',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '9',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '10',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '11',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '12',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '13',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },{
        gameId: '14',
        player1: "-",
        player2: "-",
        player1score:"-",
        player2score:"-",
    
      },
    
    
    
    ])

    return (
      <Details.Provider
        value={{
       game,
       setGame,
       checker,setchecker,
        }}
      >
        {children}
      </Details.Provider>
    );
  }
  