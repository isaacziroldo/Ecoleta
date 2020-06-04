function getUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res)=>{ return res.json()}) //res => res.json()
    .then( states => {

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}

getUFs()

function getCities(){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = '<option value>Seleciona a cidade</option>'
    citySelect.disabled = true
    fetch(url)
    .then( (res)=>{ return res.json()}) //res => res.json()
    .then( cities => {

        for(const city of cities){
            
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            
        }

        citySelect.disabled = false
        console.log("funcionou")
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)

//itens de coleta

const itemsToCollect = document.querySelectorAll('.items-grid li')

for (const item of itemsToCollect){
    item.addEventListener('click', handleSelectedItem)
}
const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    itemLi.classList.toggle("selected")
    
    const itemId = event.target.dataset.id

    const alreadySelected = selectedItems.findIndex(function (item){
        const itemFound = item ===itemId
        return itemFound
    })

    if(alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else {
        selectedItems.push(itemId)
    }

    collectedItems.value =  selectedItems
    

    
}