/*const dragArea = document.querySelector('.list-container');
new Sortable(dragArea ,{
    animation:200
})*/

const draggables = document.querySelector('.draggable');
console.log(draggables);
const container = document.querySelector('.list-container');
console.log(container);
console.log("drag1")
draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart",()=>{
        console.log("drag2");
    })
    
});
console.log("drag3");
