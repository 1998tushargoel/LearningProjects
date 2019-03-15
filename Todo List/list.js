var todos = ["start" , "website", "development"];

do
{
	var input = prompt("What would you like to do?");

	if(input === "list")
	{
		//for(var i = 0 ; i < todos.length ; i++)
		//	console.log(todos[i]);
		//console.log(todos);
		todos.forEach(function(todo, index)
		{
			console.log(index + " " + todo);
		});
	}
	else if(input === "new")
	{
		var newToDo = prompt("Enter new todo");
		todos.push(newToDo);
	}
	else if(input === "delete")
	{
		var index = prompt("Enter the index of todo to delete")
		todos.splice(index,1);
	}
}while(input !== "quit");

console.log("OK, YOU QUIT THE APP");