const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function createTaskItem(task) {
  const liItem = document.createElement("li");

  const divTaskInfo = document.createElement("div");
  const spanTaskType = document.createElement("span");
  const pTaskTitle = document.createElement("p");

  const btnDeleteTask = document.createElement("button");

  // HIERARQUIA

  liItem.append(divTaskInfo, btnDeleteTask);
  divTaskInfo.append(
    spanTaskType,
    pTaskTitle
  );

  // CLASSES 

  liItem.classList.add("task__item");
  divTaskInfo.classList.add("task-info__container");
  spanTaskType.classList.add("task-type");
  btnDeleteTask.classList.add("task__button--remove-task");

  if (task.type.toLowerCase() === "urgente") {
    spanTaskType.classList.add("span-urgent");
  } else if (task.type.toLowerCase() === "importante") {
    spanTaskType.classList.add("span-important")
  } else if (task.type.toLowerCase() === "normal") {
    spanTaskType.classList.add("span-normal")
  }

  // CONTEUDO INTERNO

  pTaskTitle.innerText = task.title;
 
  // FUNÇÃO DELETAR
  btnDeleteTask.addEventListener("click", (event) => {
    const foundIndex = tasks.indexOf(task)

    tasks.splice(foundIndex, 1)
    renderElements(tasks)
  }) 

  return liItem
}

function renderElements(tasksList) {
  const ulTasks = document.querySelector(".tasks__list")
  ulTasks.innerHTML = ""
  tasksList.forEach(task => {
    const taskItem = createTaskItem(task)
    ulTasks.appendChild(taskItem)
  });
}

renderElements(tasks)

function addNewTask (title, type) {

  const newTask = {
    title,
    type
  }

  tasks.push(newTask);
  renderElements(tasks)
}

function handleFormEvents () {
  const formAddTask = document.querySelector(".form__container")

  const inputTaskTitle = document.querySelector("#input_title")
  const inputTaskType = document.querySelector(".form__input--priority")

  formAddTask.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const taskTitle = inputTaskTitle.value
    const taskType = inputTaskType.value

    addNewTask(taskTitle, taskType)

  })
}

handleFormEvents()