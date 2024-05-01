import { X_SVG, O_SVG, FilterSVG } from "./XOgraphic";

function Tile({className, value, onClick, playerTurn}) {
    let hoverClass = null;
    let visual = null;
    if(value == null && playerTurn != null)
    {
        hoverClass = `${playerTurn.toLowerCase()}-hover` ; 
    }

    if (value === "X") {
        visual = <X_SVG/>; // Assign the SVG directly
    } else if (value === "O") {
        visual = <O_SVG/>; // Assign the SVG directly
    }



    return (  
        <div  onClick={onClick} className={`tile ${className} ${hoverClass}`}>
            <FilterSVG/>
            {visual}            
        </div>
    );
}

export default Tile;