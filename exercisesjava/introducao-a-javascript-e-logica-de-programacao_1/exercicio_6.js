let peca = "REi";
let baixo = peca.toLowerCase();

switch(baixo){
    case "bispo":
        console.log("diagonais");
        break;
    
    case "rei":
        console.log("vertical e horizontal, uma casa de cada vez");
        break;

    case "rainha":
        console.log("qualquer direção, quantas casas quiser");
        break;
    case "peão":
        console.log("apenas para frente, uma casa de cada vez");
        break;
    case "torre":
        console.log("verticais e horizontais, quantas casas quiser");
        break;
    case "cavalo":
         console.log("em forma de L");
         break;
    
}