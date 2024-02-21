let myList ={
day1:{
school:'study',
work:'reports',
home:'eat'
},
day2:{
    school:'presentation',
    work:'approving reports',
    home:'laundary'
}

}
// Function to add another day 
const newDay=(newDay,school,work,home)=>{
    myList[newDay]={
        school:school,
        work:work,
        home:home
    }
        
}
//calling the function to add another day
newDay('day3','work on project','give report','watch movie')
console
// console.log(myList);


// Function to display a task by category
function accessSpecificDay (newDay){
let entries = Object.entries(newDay)
console.log(entries)
}
accessSpecificDay(myList.day3)
