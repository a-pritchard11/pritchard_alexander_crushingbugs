console.log("JavaScript File is linked");

//variables

const labels = document.querySelectorAll(".label")
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

const resetbutton = document.querySelector("#reset-btn")
// add variable for reset button

// functions

function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it under "currentDraggedElement"
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called")
}

function dropped(e) {
    
    if(this.children.length>=1) {
        return
    }

    e.preventDefault();
    console.log("Dropped")

    // drop the piece
    this.appendChild(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;

    
}



// Event Listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})

//listen for click event, call a reset function

//function reset() {
    //collect all the labels and put them back
    //check all the target zones/loop through them, see IF the dropzone has a label in it. if it does
//}