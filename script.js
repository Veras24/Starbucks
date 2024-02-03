let circulo = document.querySelector(".circulo")

    let imgStarbucks = document.querySelector(".Starbucks")/*trabalha com html pegando as infornações*/
    let verde = document.querySelector(".verde")
    let amarelo = document.querySelector(".amarelo")
    let rosa = document.querySelector(".rosa")

    verde.addEventListener("click", () => {
        imgStarbucks.src = "./img/img1.png" /*avisa o elemento que vc clicou*/
        circulo.style.background = "rgb(27, 105, 57)"
    })

    amarelo.addEventListener("click", () => {
        imgStarbucks.src = "./img/img2.png" /*avisa o elemento que vc clicou*/
        circulo.style.background = "pink"

    })

    rosa.addEventListener("click", () => {
        imgStarbucks.src = "./img/img3.png" /*avisa o elemento que vc clicou*/
        circulo.style.background = "purple"
      

    })

    