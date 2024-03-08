import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { Button, Card, Container, Row } from "react-bootstrap";

const Game = (props) => {
  const userName = useSelector((state) => state.gameState?.userName);
  const cards = useSelector((state) => state.gameState?.gameCards);
  const isPending = useSelector((state) => state.gameState?.isPending);
  const score = useSelector((state) => state.gameState?.score);
  const hasDefuseCard = useSelector((state) => state.gameState?.hasDefuseCard);
  const activeCard = useSelector((state) => state.gameState?.activeCard);
  const { putGameState } = useActions();

  const checkCard = () => {
    const obj = {
      userName: userName,
      activeCard: activeCard,
      hasDefuseCard: hasDefuseCard,
      isPending: isPending,
      gameCards: cards,
      score: score,
    };
  
    const openedCard = cards.pop();
    let isCompleted = true;
    obj.activeCard = openedCard;
  
    if (openedCard === "Defuse card") {
      obj.hasDefuseCard = true;
    } else if (openedCard === "Shuffle card ") {
      obj.gameCards = null;
      obj.hasDefuseCard = false;
      isCompleted = false;
    } else if (openedCard === "Exploding kitten card") {
      if (obj.hasDefuseCard) {
        obj.hasDefuseCard = false;
      } else {
        // 50% chance of revealing the cat card
        const isCatCard = Math.random() < 0.5;
  
        if (isCatCard) {
          isCompleted = false;
          if (
            window.confirm(
              `Game over! You lost the game! Your score is ${obj.score}\nDo you want to play a new game?`
            )
          ) {
            obj.gameCards = null;
          }
        } else {
          obj.activeCard = "Exploding kitten card 💣";
          // reset the exploding kitten card back into the deck
          obj.gameCards = [...cards, openedCard];
        }
      }
    }
  
    if (isCompleted && (!obj.gameCards || obj.gameCards.length === 0)) {
      obj.score = parseInt(obj.score) + 1;
      if (
        window.confirm(
          `You won the game! Your score is ${obj.score}\nDo you want to play a new game?`
        )
      ) {
        obj.gameCards = null;
      }
    }
  
    putGameState({ ...obj });
  };
  

  return (
    <div className="container-fluid mt-5"> <div className="row justify-content-center"> <div className="col-md-6 text-center"> <h1 className="display-4">😸 Exploding Kitten</h1> <div className="mt-5"> <h3>Tap on the deck to reveal the card</h3> <div onClick={checkCard} className="d-flex flex-wrap justify-content-center"> {cards?.length !== 0 && cards?.map((card, index) => (<Card key={index} className="text-center mx-2 my-2"> {card} </Card>))} </div> </div> {activeCard ? (<div className="alert alert-primary mt-5" role="alert"> Active Card: {activeCard} </div>) : (<div className="alert alert-secondary mt-5" role="alert"> --- </div>)} <div className="mt-5"> {score ? (<div className="alert alert-success" role="alert"> score: {score} </div>) : (<div className="alert alert-secondary" role="alert"> score: --- </div>)} </div> <div className="mt-5"> <Button onClick={checkCard} className="btn btn-primary"> Reveal Card </Button> </div> </div> </div> </div>
  );
};

export default Game;