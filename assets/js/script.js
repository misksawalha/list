let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')


//add task

input.addEventListener('keyup',()=>{
  if(input.value.trim()!=0){
   addBtn.classList.add('active')
  }
  else{
    addBtn.classList.add('remove')
  }
})
//add new task
addBtn.addEventListener('click',()=>{
  if(input.value.trim()!=0){
   let newItem = document.createElement("div")
   newItem.classList.add("item")
   newItem.innerHTML = `
   
   <p><i class="fa-solid fa-check hide"></i>${input.value}</p>
        <div class="item-btn">
          <i class="fa-solid fa-xmark"></i>
        </div>
   `
   tasks.appendChild(newItem)
   input.value=''
   }
   else{
    alert("please enter a task")
   }
})

//delete item from list

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark')) {
    e.target.parentElement.parentElement.remove();
  } else {
    
    e.target.parentElement.classList.add("completed");
    e.target.parentElement.parentElement.classList.remove("hide")
  }
});
