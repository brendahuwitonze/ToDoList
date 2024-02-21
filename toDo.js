let myList ={
task1:{
school:'study',
work:'reports',
home:'eat'
},
task2:{
    school:'presentation',
    work:'approving reports',
    home:'laundary'
}

}

const newTask=(taskName,school,work,home)=>{
    myList[taskName]={
        school:school,
        work:work,
        home:home
    }
        
}
newTask('task3','work on project','give report','watch movie')
console.log(myList);