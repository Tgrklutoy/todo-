const todothing = document.getElementById ("todocolumn");
const inprogressthing = document.getElementById ("inprogresscolumn");
const reviewthing = document.getElementById ("rewievcolumn");
const donething = document.getElementById ("donecolumn");

const newbutton = document.getElementById ("new-task");

function newclick () { 
var taskElement = document.createElement("div");
var input = document.createElement("input");
var select = document.createElement("select");
var todo = document.createElement("option");
var inprogress = document.createElement("option");
var review = document.createElement("option");
var done = document.createElement("option");
var todo = select.appendChild(todo);
var inprogress = select.appendChild(inprogress);
var review = select.appendChild(review);
var done = select.appendChild(done);
var select = taskElement.appendChild(select)
var input = taskElement.appendChild(input)
var taskElement = todothing.appendChild(taskElement)
 todo.value = "todocolumn"
todo.textContent = "Todo"
 inprogress.value = "inprogresscolumn"
inprogress.textContent = "In progreaa"
 review.value = "reviewcolumn"
review.textContent = "Review"
 done.value = "donecolumn"
done.textContent = "Done"
function changing (event){
    console.log(event)
    if (event.target.value == inprogress.value) {
        taskElement = inprogressthing?.appendChild (taskElement)
    }
    else if (event.target.value == review.value){
        taskElement = reviewthing?.appendChild (taskElement)
    }
        else if (event.target.value == todo.value){
        taskElement = todothing?.appendChild (taskElement)
    }
        else if (event.target.value == done.value){
        taskElement = donething?.appendChild (taskElement)
    }
};
select?.addEventListener ("change",changing )
};
newbutton?.addEventListener ("click",newclick);

