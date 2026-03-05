class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_Quad(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)

    }
}

class Carro extends Obj{
    dir = 0
    dir2 = 0
    vida = 5
    pontos = 0

    des_carro_old() {
        // Roda dianteira esquerda (agora superior frente)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'white'
        des.fillStyle = 'black'
        des.rect(this.x + 60, this.y - 50, 10, 10) 
        des.stroke()
        des.fill()
    
        // Roda dianteira direita (agora inferior frente)
        des.beginPath()
        des.rect(this.x + 60, this.y, 10, 10)
        des.stroke()
        des.fill()
    
        // Roda traseira esquerda (agora superior trás)
        des.beginPath()
        des.rect(this.x + 10, this.y - 50, 10, 10)
        des.stroke()
        des.fill()
    
        // Roda traseira direita (agora inferior trás)
        des.beginPath()
        des.rect(this.x + 10, this.y, 10, 10)
        des.stroke()
        des.fill()
    
        // Trapézio do corpo (Corpo principal rotacionado)
        des.beginPath()
        des.moveTo(this.x, this.y - 50) 
        des.lineTo(this.x, this.y)
        des.lineTo(this.x + 50, this.y - 10)
        des.lineTo(this.x + 50, this.y - 40)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.stroke()
        des.fill()
    
        // Corpo frente (retângulo do "nariz")
        des.beginPath()
        des.rect(this.x + 50, this.y - 40, 20, 30)
        des.stroke()
        des.fill()
    
        // Asa frontal (vertical na ponta direita)
        des.beginPath()
        des.rect(this.x + 70, this.y - 50, 10, 50)
        des.stroke()
        des.fill()

    }


    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
           (this.x + this.w > objeto.x)&&
           (this.y < objeto.y + objeto.h)&&
           (this.y + this.h > objeto.y)){
            return true
           }else{
              false
           }
    }

    point(objeto){
        if(objeto.x <= -60){
            return true
        }else{
            return false
        }
    }



    mov_car(){
        this.y += this.dir
        this.x += this.dir2
        // Limites da tela
        if(this.y <= 0){
            this.y = 0
        }if(this.y >= 700){ // 1200 - 60 (largura do carro)
            this.y = 700
        }
        
        if(this.x <= 0){
            this.x = 0
        }if(this.x >= 1140){ // 1200 - 60 (largura do carro)
            this.x = 1140
        }
    }
}

class CarroInimigo extends Obj{

    recomeca(){
        this.x = 1300
        this.y = Math.floor(Math.random() * (638 - 62) + 62)
    }


    des_carro_old() {
        // Roda dianteira esquerda (agora superior frente)
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'white'
        des.fillStyle = 'black'
        des.rect(this.x + 60, this.y - 50, 10, 10) 
        des.stroke()
        des.fill()
    
        // Roda dianteira direita (agora inferior frente)
        des.beginPath()
        des.rect(this.x + 60, this.y, 10, 10)
        des.stroke()
        des.fill()
    
        // Roda traseira esquerda (agora superior trás)
        des.beginPath()
        des.rect(this.x + 10, this.y - 50, 10, 10)
        des.stroke()
        des.fill()
    
        // Roda traseira direita (agora inferior trás)
        des.beginPath()
        des.rect(this.x + 10, this.y, 10, 10)
        des.stroke()
        des.fill()
    
        // Trapézio do corpo (Corpo principal rotacionado)
        des.beginPath()
        des.moveTo(this.x, this.y - 50) 
        des.lineTo(this.x, this.y)
        des.lineTo(this.x + 50, this.y - 10)
        des.lineTo(this.x + 50, this.y - 40)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'white'
        des.fillStyle = this.a
        des.stroke()
        des.fill()
    
        // Corpo frente (retângulo do "nariz")
        des.beginPath()
        des.rect(this.x + 50, this.y - 40, 20, 30)
        des.stroke()
        des.fill()
    
        // Asa frontal (vertical na ponta direita)
        des.beginPath()
        des.rect(this.x + 70, this.y - 50, 10, 50)
        des.stroke()
        des.fill()
    }


    pos_y(){
        return Math.floor((Math.random() * (630 - 52 + 1)) + 52)
    }


        mov_car(){
            this.x -= 12
            if(this.x < - 100){
                this.x = 1300
                this.recomeca()
            

            }
        }
}
