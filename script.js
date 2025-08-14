document.querySelector('#push').onclick =function input(){
     if(document.querySelector('#newtask input').value.length ==0){
        alert("Please Enter a Task")
     }
     else{
        document.querySelector('#tasks').innerHTML +=`
         <div class="task">
         <span id="taskname">
            ${document.querySelector('#newtask input').value}
         </span>
          <button class="delete">
             <i class="fa-regular fa-trash"></i>
          </button>
         </div>`;
        

        //Remove text when  delete button press
         var current_task = document.querySelectorAll(".delete");
         for(var i=0 ; i<current_task.length ; i++){
             current_task[i].onclick = function(){
                this.parentNode.remove();
             }
         }
         
         //Crossing the task on clicking on it
          var tasks = document.querySelectorAll('.task');
        for(var i=0 ; i<tasks.length ; i++){
            tasks[i].onclick =function(){
                this.classList.toggle('completed'); //this line means when .completed class not there add it when there remove it
            }
        }
        
       
}
  //Clear the input section after add button press
 document.querySelector('#newtask input').value ="";

}
