function contar() {
    let ini = document.getElementById("start")
    let fim = document.getElementById("end")
    let cont = document.getElementById('count')
    let res = document.getElementById('result')

    if(ini.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"

        let i = Number(ini.value) //apesar de estarem em input:number, o valor é texto. Deve ser convertido em Number
        let f = Number(fim.value)
        let c = Number(count.value)

        if(c <= 0){
            alert("Passo inválido! Considerando passo 1...")
            c = 1
        }

        if(i < f){
            for(let contador = i; contador <= f; contador += c){ //contagem crescente
                res.innerHTML += ` ${contador} \u{1F449} ` // formatação unicode para JS: \u{numero unicode} (só funciona entre crases)
            }
        } else {
            for(let contador = i; contador >= f; contador -= c){ //contagem regressiva
                res.innerHTML += ` ${contador} \u{1F449} ` // formatação unicode para JS: \u{numero unicode} (só funciona entre crases)
            } 
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}