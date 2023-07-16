const inText = document.getElementById('inT');
const listItem = document.getElementById('listContain');
document.addEventListener('keypress',function(a){
   if(a.key === 'Enter'){
      addTask();
   }
});
function addTask(){
   if(inText.value == ''){
    alert('please enter any task');
   }
   else{
    let li = document.createElement('li');
    li.innerHTML = inText.value;
    listItem.appendChild(li); 
    let span = document.createElement('span');
    span.innerHTML = "&times;";
    li.appendChild(span);
    saveDate();
   }
   inText.value = '';  
}
function reMove(e){
   if(e.target.tagName == 'LI'){
      e.target.classList.toggle('checked1');
      saveDate();
   }
   else if(e.target.tagName == 'SPAN'){
      e.target.parentElement.remove();
      saveDate();
   }
}
listItem.addEventListener('click',reMove,false);

function saveDate(){
   localStorage.setItem('data',listItem.innerHTML);
}
function ShowData(){
   listItem.innerHTML = localStorage.getItem('data');
}
ShowData();