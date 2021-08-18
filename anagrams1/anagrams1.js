const button = document.getElementById("findButton");
const result = document.getElementById("guarda_result")



let anagrama = []

const limpaTela = () => {
    
    result.innerText = '';
    result.innerHTML = '';
    anagrama = [];
    
}

const getAnagramsOf = (typedText) => {
    let newTypedText = alphabetize(typedText)
    
    for (let i in palavras){
        if (newTypedText === alphabetize(palavras[i]))
        anagrama.push(palavras[i])
    }
    
    result.innerText = anagrama.join(', ')
    
}


button.addEventListener("click", function () {

    limpaTela()
    
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}
