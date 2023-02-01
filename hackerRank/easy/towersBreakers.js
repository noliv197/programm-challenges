function towerBreakers(n, m) {
    // Write your code here
    let plays = 0
    let moves = choices(m)
    for(let i = 0 ; i<moves.length;i++){
        if(moves[i] === 1)
        console.log(choices(m))
        
    }
    return plays % 2 == 0 ? 2 : 1 
}
function choices(m){
    let choices = []
    for(let i = 1; i < m;i++){
        if (m % i == 0) choices.push(i)
    }
    return choices
}

console.log(`
Resultado: ${towerBreakers(2,6)}
Esperado: 2

Resultado: ${towerBreakers(2,2)}
Esperado: 2

Resultado: ${towerBreakers(1,4)}
Esperado: 1
`
)