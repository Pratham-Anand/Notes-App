

let shownotes=()=>{
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes);
    }

    let html="";

    notesobj.forEach(function(element,index){
        html+=`<div class="col-sm-3 mb-3 notescard">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button type="submit"  onclick="deletenote(this.id)" id="${index}" class="btn btn-primary delc" >Delete Node</button>
          </div>
        </div>
      </div>`
    })

    let noteselm=document.getElementById("notes");
    console.log(notes);

    if(notes.length!=0){
        noteselm.innerHTML=html;
    }
}



let deletenote=(index)=>{
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}


let addbtn=document.getElementById("addbtn");
shownotes();

addbtn.addEventListener("click",(e)=>{
    
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes);
    }
    if(addTxt.value.length==0) alert("Type something first");
   else { notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value="";
    console.log(notesobj);
}
    shownotes();
   
})

let search=document.getElementById("s");

search.addEventListener("input",()=>{
    let val=s.value.toLowerCase();
    let notescard=document.getElementsByClassName("notescard");
    Array.from(notescard).forEach((element)=>{
        let txt=element.getElementsByTagName("p")[0].innerText;
        if(txt.includes(val)){
            element.style.display="block";
        }
        else{
            element.style.display="none"; 
        }
    })
})






