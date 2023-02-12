/*"new" - Add a To do item
"list" - List complete To Do list
"delete" - Delete list item
"quit" - Quit app */

let ask = prompt("Add or Delete list Item. Show list or quit.");

const toDoList = [];

while (ask !== "quit") {
  ask = prompt("Add or Delete list Item. Show list or quit.");
  if (ask === "new") {
    const newToDo = prompt("Enter new list item").toLowerCase();
    toDoList.push(newToDo);
    console.log(`added: ${newToDo} to list`);
  } else if (ask === "delete") {
    const index = parseInt(prompt("Enter index to delete."));
    if (!Number.isNaN(index)) {
      const deleted = toDoList.splice(index, 1);
      console.log(`Deleted: ${deleted[0]}`);
    }
  } else if (ask === "list") {
    console.log("**********");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}. ${toDoList[i]} `);
    }
  }
}
console.log("To Do list applicaton exited.");
