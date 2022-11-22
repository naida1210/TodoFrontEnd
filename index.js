

const btn = document.getElementById('btn');
btn.addEventListener('click', addTodo);
const list =  document.getElementById('ul');
count = 0;
const checkbox= document.createElement('input');





function addTodo(e) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const input = document.getElementById('todo')
    list.classList.add('list')
    list.appendChild(wrapper);

    const task = document.createElement('li');
    const checkbox= document.createElement('input');
    
    const deleteBtn = document.createElement('button');
    checkbox.setAttribute("type", "checkbox");
    wrapper.appendChild(checkbox);
    wrapper.appendChild(task);
    wrapper.appendChild(deleteBtn);
   deleteBtn.classList.add('delete');
   deleteBtn.setAttribute('id','delete');

   
    task.innerHTML =input.value;
    input.value = ""
    var p = document.getElementById("clickme")
    count += 1;
    p.innerHTML = count+" " +"Item's left";

} 






