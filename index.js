let des = document.getElementById('des').getContext('2d')

let carro = new Carro(100,325,50,50, 'red')
let carroInimigo = new CarroInimigo(1100,325,50,50, 'red')
let carroInimigo2 = new CarroInimigo(740,325,50,50, 'blue')
let carroInimigo3 = new CarroInimigo(890,325,50,50, 'white')
let carroInimigo4 = new CarroInimigo(560,325,50,50, 'aquamarine')
let carroInimigo5 = new CarroInimigo(440,325,50,50, 'orange')
let medidaCarro = new Carro(100,325,50,60,'green')




document.addEventListener('keydown', (e) => {
    console.log(e)
    if(e.key == 's'){
        carro.dir = 7
        console.log(carro.dir)
    }else if(e.key == 'w'){
        carro.dir = -7
    }
})

document.addEventListener('keyup', (e) => {
    console.log(e)
    if(e.key == 's'){
        carro.dir = 0
    }else if(e.key == 'w'){
        carro.dir = 0
    }
})

document.addEventListener('keydown', (e)=>{
    if(e.key === 's'){
        carro.dir = +8
    console.log(Carro.dir)
    }else if(e.key === 'w'){
        carro.dir = -8
    console.log(carro.dir)
    }
    
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'w' || e.key === 's'){
        carro.dir = 0   
    }
})


document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        carro.dir2 = -9
    console.log(carro.dir)
    }else if(e.key === 'd'){
        carro.dir2 = 9
    console.log(carro.dir)
    }
    
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'a' || e.key === 'd'){
        carro.dir2 = 0   
    }
})


function colisao(){
    if(carro.colid(carroInimigo)){
        carro.vida -= 1
        carroInimigo.recomeca()
    }
    if(carro.colid(carroInimigo2)){
        carro.vida -= 1
         carroInimigo2.recomeca()
    }
    if(carro.colid(carroInimigo3)){
        carro.vida -= 1
         carroInimigo3.recomeca()
    }
    if(carro.colid(carroInimigo4)){
        carro.vida -= 1
         carroInimigo4.recomeca()
    }
    if(carro.colid(carroInimigo5)){
        carro.vida -= 1
         carroInimigo5.recomeca()

    }
    console.log('vida:',carro.vida)


}

function pontuacao(){
    if(carro.point(carroInimigo)){
        carro.pontos += 5
    }
    if(carro.point(carroInimigo2)){
        carro.pontos += 5
    }
    if(carro.point(carroInimigo3)){
        carro.pontos += 5
    }
    if(carro.point(carroInimigo4)){
        carro.pontos += 5
    }
    if(carro.point(carroInimigo5)){
        carro.pontos += 5
    }

    
    console.log('Pontos:',carro.pontos)

}

function desenha(){
    carro.des_carro_old()
     carroInimigo.des_carro_old()
    carroInimigo2.des_carro_old()
    carroInimigo3.des_carro_old()
    carroInimigo4.des_carro_old()
    carroInimigo5.des_carro_old()
}


function atualiza(){
    carro.mov_car()
    carroInimigo.mov_car()
    carroInimigo2.mov_car()
    carroInimigo3.mov_car()
    carroInimigo4.mov_car()
    carroInimigo5.mov_car()
    colisao()
    pontuacao()
}

function main(){
    des.clearRect(0,0,1200,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()