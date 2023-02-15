import "./FinalStage.css";

export default function FinalStage(props) {

  
 
  return (
   <div style={{
   display:"flex", flexDirection:"row",
   width:'fit-content'
   }}>
      <div className="row1" style={{}}></div>
      <div className="bracket-game">
        <div className="player top loss">
          {props.player1}
          <div className="score">{props.player1score}</div>
        </div>
        <div className="player bot win">
          {props.player2}
          <div className="score">{props.player2score}</div>
        </div>
      </div>
    </div>
    
  );
}
