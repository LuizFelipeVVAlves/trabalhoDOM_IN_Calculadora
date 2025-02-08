var notas = Array()
let sec = document.querySelector(".msg")
let secc = document.querySelector(".fn_msg")
var x = 1

function add_nota(){
    
    let input = document.querySelector(".input_msg")
    let msg = input.value
    if(msg == ""){
        alert("Por favor, insira uma nota")
        return null
    
    }
    if(isNaN(msg) == false){
        
        if(msg >= "0" && msg <= "10"){
            sec.classList.add('has-content');
            let div = document.createElement("div")
            let text = document.createElement("p")
            notas.push(msg)
            text.innerText = "A sua nota " + x + " é " + msg
            x += 1
            div.append(text)
            sec.append(div)
           
        }else{
            alert("A nota digitada é inválida, por favor, insira uma nota válida")
        }
    }else{
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
    }
}



function calcula(){
    media = 0
    for(el of notas){
        el = parseFloat(el)
        media += el
    }
    media = media/notas.length
    
    
    media = parseFloat(media)
    let div = document.createElement("div")
    let text = document.createElement("p")
    text.innerText = "A sua media foi: " + media.toFixed(2)
    div.append(text)
    secc.append(div)
    sec.innerHTML = ""
    sec.classList.remove('has-content');

}



let but = document.querySelector(".add_nota")
let butmedia = document.querySelector("#add_media")


but.addEventListener("click",add_nota)

butmedia.addEventListener("click",calcula)

