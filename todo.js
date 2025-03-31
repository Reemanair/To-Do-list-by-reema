let todo=JSON.parse(localStorage.getItem('todo'))||[];
td();
function td(){

let todohtml='';
todo.forEach(function(todoo,i){
 // const name=todoo.name;
  //const duedate=todoo.duedate;
  const{name,duedate}=todoo;
  const html=
  `
  <div >${name}</div>
  <div>${duedate}</div>
  <button onclick="todo.splice(${i},1); td(); localStorage.setItem('todo',JSON.stringify(todo));" class="delbt">Delete</button>
  `;
  todohtml+=html;
})
document.querySelector('.js-dply').innerHTML=todohtml;}

function addtodo(){
  let input=document.querySelector('.todo1');
  let inputvalue=input.value;
  
  let dateinput=document.querySelector('.js-date');
  let datevalue=dateinput.value;
  todo.push({
   // name: name,
  //duedate:duedate
  name:inputvalue,
  duedate:datevalue});
  input.value='';
  dateinput.value='';
  td();
  localStorage.setItem('todo',JSON.stringify(todo));
}


