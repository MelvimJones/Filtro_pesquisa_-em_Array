let pessoas = []

pessoas.push({
    Foto: 'http://www.objetodireto.com.br/fotos/tuca%203x4.jpg',
    Nome: 'Patricia',
    Idade: '12',
    Genero: 'Feminino',
})
pessoas.push({
    Foto: 'https://fotopaulo.com.br/public/getProductTypeImage/35742',
    Nome: 'Paulo',
    Idade: '30',
    Genero: 'Masculino',
})
pessoas.push({
    Foto: 'https://i.pinimg.com/236x/0c/6d/0a/0c6d0af4f6aefcc0a062737ed9d991f6--mr-bean-beans.jpg',
    Nome: 'Mr. Bean',
    Idade: '50',
    Genero: 'Masculino',
})
pessoas.push({
    Foto: 'http://static1.squarespace.com/static/5c3e25923e2d0977a884f82c/5c3f4b9e010685e0e261593a/5c3f4e6a010685e0e261b6ea/1547652714741/IMG_1322.jpg?format=original',
    Nome: 'Maria',
    Idade: '28',
    Genero: 'Feminino',
})

let divsMaior = ""
let divsMenor = ""
let divsMasc = ""
let divsFem = ""

//---------------SE MAIOR DE IDADE------------------------------------------
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Idade >= 18) {
        divsMaior += copiar(pessoas[i])
    }
}
//---------------SE MENOR DE IDADE------------------------------------------
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Idade < 18) {
        divsMenor += copiar(pessoas[i])
    }

}
//---------------HOMEM------------------------------------------
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Genero == 'Masculino') {
        divsMasc += copiar(pessoas[i])
    }

}
//---------------FEMININO------------------------------------------
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].Genero == 'Feminino') {
        divsFem += copiar(pessoas[i])
    }
}
//-------------------BUSCAR----------------------------------------
function buscar() {
    let filtro = document.getElementById("Buscar").value
    if (filtro == "") {
        alert("Selecione um filtro")
    } else if (filtro == 'maior') {
        document.getElementById("inicio").innerHTML = divsMaior
    } else if (filtro == 'menor') {
        document.getElementById("inicio").innerHTML = divsMenor
    } else if (filtro == 'masculino') {
        document.getElementById("inicio").innerHTML = divsMasc
    } if (filtro == 'feminino') {
        document.getElementById("inicio").innerHTML = divsFem
    }
}

//-------------------LAYOUT HTML----------------------------------------

function copiar(p){
    let vari = `<div class="repet">
    <table>
        <tr><td rowspan="3"><img src="${p.Foto}" alt="Foto"></td>
        <td><div><strong>Nome: </strong>${p.Nome}</div></td></tr>
        <tr><td><div><strong>Idade: </strong>${p.Idade} Anos </div></td></tr>
        <tr><td><div><strong>Genero: </strong>${p.Genero}</div></td></tr>
    </table>
  </div>`
  return vari
}

