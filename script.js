const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function createTaskItem(task) {
  const liItem = document.createElement("li");

  const divTaskInfo = document.createElement("div");
  const spanTaskType = document.createElement("span");
  const pTaskTitle = document.createElement("p");

  const btnAddTask = document.createElement("button");

  // HIERARQUIA

  liItem.append(divTaskInfo, btnAddTask);
  divTaskInfo.append(
    spanTaskType,
    pTaskTitle
  );

  // CLASSES 
  
  liItem.classList.add("task__item");
  divTaskInfo.classList.add("task-info__container");
  spanTaskType.classList.add("task-type");
  btnAddTask.classList.add("task__button--remove-task");

  if (task.type === "Urgente") {
    spanTaskType.classList.add("span-urgent");
  } else if (task.type === "Importante") {
    spanTaskType.classList.add("span-important")
  } else if (task.type === "Normal") {
    spanTaskType.classList.add("span-normal")
  } 

  // CONTEUDO INTERNO

  pTaskTitle.innerText = task.title;
  spanTaskType.innerHTML = task.type;

}