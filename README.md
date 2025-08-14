# To-do-list
A simple and interactive to-do list web application built with HTML, CSS, and JavaScript. This project allows users to manage daily tasks efficiently with an intuitive interface. Add Tasks , Mark as Completed , Delete Tasks ,  Responsive Design.

__________________________________________________________________________________________________________________________________________________________________________________[HTML code]=>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do-List</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> <!--this works before inside head only. cant be put inside thte innerHTML as it will be ignored by the browser now the i element delete icon code will
                                                                                                                 be used in the innerHTML as it wouldnt have worked if this link would had not been written-->
</head>
<body>
<div class="container">
       <div id="newtask">
          <input type="text" placeholder="Task to be done...">
           
           <button id="push">Add</button>
       </div>
          <div id="tasks"></div>
</div>

_______________________________________________________________________________________________________________________________________________________________________________
[CSS]=>

*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    background: linear-gradient(135deg , #8052ec , #D161ff);

}
.container{
    border: 2px solid white;
    width: 40%;
    position: absolute;
    transform: translate(-50% , -50%);
    min-width: 450px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
}
#newtask{
    background-color: #ffff;
    padding: 30px 20px;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0 , 0 ,0 ,0.3);
}
#newtask input{
    width: 70%;
    height: 70%;
    font-family: 'poppins' , sans-serif;
    border: 2px solid #d1d3d4;
    padding: 12px;
    color: #111111;
    font-weight: 500;
    position: relative;
}
#newtask input:focus{
    outline-style: none;
    border-color: #8052ec;
}
#newtask button{
    position: relative;
    float: right;
    width: 20%;
    height: 45px;
    border-radius: 5px;
    font-family: 'Poppins' , sans-serif;
    font-weight: 500;
    font-size: 16px;
    background-color: #8052ec;
    border: none;
    color: #ffff;
    cursor: pointer;
}
#tasks{
    background-color: #ffff;
    padding: 30px 20px;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    width: 100%;
    position: relative;
}
.task{
    background-color: #ffff;
    height: 50px;
    padding: 5px 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #d1d3d4;
    cursor: pointer;
}
.task span{
    font-family:'Poppins' , sans-serif;
    font-family: 15px;
    font-size: 15px;
    font-weight: 400;
}
.task button{
    background-color: #8052ec;
    color: #ffff;
    height: 45px;
    width: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
}
.completed{
    text-decoration: line-through;
}

______________________________________________________________________________________________________________________________________________________________________________
[java Script code] =>

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
 document.querySelector('#newtask input');
        value ="";
}



______________________________________________________________________________________________________________________________
[JavaScript explanation] => https://youtu.be/6Ugq8wFYOuM       (detailed explaination of the code)
