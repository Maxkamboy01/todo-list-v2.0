const dashBoard = [];

function loopDashBoard() {
  let columnTExt = "";
  dashBoard.forEach(function (columnvalue, columnindex) {
    columnTExt += `
    <div class="col-4">

      <div class="column">
  

        <div class="column-title">${
          columnvalue.title
        }<i onclick="deleteallBtn()" class="fas fa-times"></i></div>
        ${looptasks(columnvalue.tasks)}
        <div class="add-task-input">
          <input class="d-block" type="text" id="task-input-${columnindex}" placeholder="Add task" />
          <button onclick="addTask(${columnindex})">Add</button>
        </div>
      </div>
    </div>`;
  });

  columnTExt += `
  <div class="col-4">
  <div class="column bg-light">
    <div class="add-task-input">
      <input class="d-block" type="text" id="title-input"  placeholder="Add title">
      <button onclick="addTitle()">Add</button>
    </div>
  </div>
</div>`;

  document.querySelector(".row").innerHTML = columnTExt;
}

loopDashBoard();

function looptasks(tasks) {
  var taskText = "";
  tasks.forEach(function (taskValue, taskIndex) {
    taskText += ` <div id="task-box" class="task-box">
        ${taskValue}
        <div class="d-flex button-wrapper">
            <button class="edit">Edit</button>
            <button class="delete" onclick="deletefunction()">delete</button>
        </div>
    </div>`;
  });
  return taskText;
}

function addTitle() {
  const titleValue = document.getElementById("title-input").value;
  if (titleValue !== "") {
    const titleObject = {
      title: titleValue,
      tasks: [],
    };

    dashBoard.push(titleObject);
    loopDashBoard();
  }
}

function addTask(index) {
  const taskValue = document.getElementById(`task-input-${index}`).value;

  if (taskValue !== "") {
    dashBoard[index].tasks.push(taskValue);

    loopDashBoard();
  }
}

function deleteallBtn() {
  dashBoard.splice(0, 1);
  loopDashBoard();
}

