document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = taskText;
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });

    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "X";

    del.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });
    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
