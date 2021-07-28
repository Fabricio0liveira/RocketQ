//Importando a function Modal do modal.js para cá.
import Modal  from './modal.js'

const modal = Modal()

// Mudar o modal quando clicar em excluir
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar quando o marcar como lido for clicado.
//Pegar todos os botões que existe com as classe check.
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click', handleClick)
})

// Quando o botão delete for clicado, ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    //Informando ao ejs que as tags 'a', para que nao funcionem mais como links.
    event.preventDefault()

    const text = check ? 'Marcar como lida' : 'Excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionID = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionID}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    //Abrir modal
    modal.open()
}
