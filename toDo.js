let myList ={
day1:{
school:'study',
work:'reports',
home:'eat',
completed:'false'
},
day2:{
    school:'presentation',
    work:'approving reports',
    home:'laundary',
    completed: 'true'
},
day3:{
    school:'interneship period',
    work:'Orientation of the new people',
    home:'family time',
    completed: 'true'
}
}
// Function to add another day 
const newDay=(newDay,school,work,home,completed)=>{
    myList[newDay]={
        school:school,
        work:work,
        home:home,
        completed:completed
    }
    console.log(myList);     
}
 newDay('day4','work on project','give report','watch movie','true')


// Function to display a task by category

function accessSpecificDay (newDay){
for(let [key,value]of Object.entries(newDay)){
console.log(key + ':' + value)
     }
 }
accessSpecificDay( myList.day3)


//  function to mark tasks complete
function completedDays(markeDayComplete){
    if(myList[markeDayComplete] && myList[markeDayComplete].completed == 'true'){
        myList[markeDayComplete].completed == 'true';
        console.log(`Day ${markeDayComplete} marked as complete.`);
    }
    else{
    console.log(`${markeDayComplete} is incomplete.`);
}
}
completedDays('Day2');


// function to remove a task 
function deleteDay(dayNumber,tasks){
    if(myList.hasOwnProperty('day' + dayNumber) && myList['day' + dayNumber].hasOwnProperty(tasks)){
        delete myList['day'+ dayNumber][tasks]
        console.log(`Task ${tasks} is deleted from day ${dayNumber}`)

    }
    else {
        console.log(`Task ${dayNumber} doesn't exist in Day${dayNumber}`)
    }

}

deleteDay(1 ,'school');






