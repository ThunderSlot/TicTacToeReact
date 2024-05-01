import GameState from "./GameState";

export default function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    //    <button  onClick={onReset} className="reset-button">Play Again🕹️</button>
    // <button   >Play Again🕹️</button>
    <button onClick={onReset} type="button" class="reset-button">
      <div class="button-top">Play Again🕹️</div>
      <div class="button-bottom" />
      <div class="button-base" />
    </button>
  );
}
