const root = document.documentElement;
const bnt = document.getElementById("btntema");
const ano = document.getElementById("ano")

ano.textContent = new Date().getFullYear()

bnt.addEventListener("click" , () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if(escuro){
        root.removeAttribute("data-tema")
    }else{
        root.setAttribute("data-tema", "escuro")
    }
})