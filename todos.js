var listELement = document.querySelector('#app ul ');
var inputELement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//console.log(inputELement,listELement,buttonElement)


/*Se ele não conseguir pegar o json do local storage ele vai pegar o array passado
depois do || */ 
var todos = JSON.parse(
    localStorage.getItem('list_todos')
    ) || [ 'fazer isso ', 'ir na igreja' ,' matar a pal '];






function renderTodos() {
    listELement.innerHTML = null; // remove todos os elementos
    for (todo of todos ){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir')



        todoElement.appendChild(todoText)
        listELement.appendChild(todoElement)

        linkElement.append(linkText)
        todoElement.appendChild(linkElement)
        linkElement.setAttribute('href', '#!')

        var posicao = todos.indexOf(todo)
        linkElement.setAttribute ('onclick', `deleteTodo(${posicao})`)

    }


}


renderTodos()


function addTodo(){
    var todoText = inputELement.value;

    todos.push(todoText)
    inputELement.value = '';
    saveToStorage()
    renderTodos()
}

buttonElement.onclick = addTodo;


function deleteTodo(posicao){
    todos.splice(posicao,1) // na posicao 0 remove 1 item
    renderTodos() // renderiza para nao permanecer os itens antigos
    console.log(`Itens da lista: ${todos} `)
    saveToStorage()
}


function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
} 