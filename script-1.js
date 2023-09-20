  function process_responses() {
  
    var data = new FormData();
  
    data.append("nucleus", document.getElementById("nucleus").value);
    data.append("mitochondrion", document.getElementById("mitochondrion").value);

   
  }
  function hide_choices(){
    document.getElementById('nucleus').hidden = true;
    document.getElementById('ribosome').hidden = true;
    document.getElementById('cytoplasm').hidden = true;
    document.getElementById('vacuole').hidden = true;
    document.getElementById('cell_membrane').hidden = true;
    document.getElementById('mitochondrion').hidden = true;
    
  }
  function show_choices(){
    document.getElementById('nucleus').hidden = false;
    document.getElementById('ribosome').hidden = false;
    document.getElementById('cytoplasm').hidden = false;
    document.getElementById('vacuole').hidden = false;
    document.getElementById('cell_membrane').hidden = false;
    document.getElementById('mitochondrion').hidden = false;
    
  }
  function show_answers() {
    start_over();
    document.getElementById('nucleus_entry').value = "nucleus";
    document.getElementById('ribosome_entry').value = "ribosomes";
    document.getElementById('cytoplasm_entry').value = "cytoplasm";
    document.getElementById('vacuole_entry').value = "vacuole";
    document.getElementById('cell_membrane_entry').value = "cell membrane";
    document.getElementById('mitochondrion_entry').value = "mitochondrion";
  }
  function start_over(){
    document.getElementById("nucleus_entry").value="";
    document.getElementById("nucleus_entry").style.backgroundColor="beige";
    document.getElementById("mitochondrion_entry").value="";
    document.getElementById("mitochondrion_entry").style.backgroundColor="beige";
    document.getElementById("ribosome_entry").value="";
    document.getElementById("ribosome_entry").style.backgroundColor="beige";
    document.getElementById("cytoplasm_entry").value="";
    document.getElementById("cytoplasm_entry").style.backgroundColor="beige";
    document.getElementById("vacuole_entry").value="";
    document.getElementById("vacuole_entry").style.backgroundColor="beige";
    document.getElementById("cell_membrane_entry").value="";
    document.getElementById("cell_membrane_entry").style.backgroundColor="beige";
    document.getElementById("score_entry").value="0/6";
  };
  function checkInput(txt) {
    const input = document.getElementById('nucleus');
    const position = input.selectionStart;
    var response = document.getElementById('nucleus').value
   // document.getElementById('nucleus').value= response.replaceAll("c","X");
    alert(position);
    };
  function process(){
    var nuc = document.getElementById("nucleus_entry").value;
    nuc1=nuc.toLowerCase();
    nuc1.replaceAll("_","");
  var score = 0
  if (nuc1.replaceAll(" ","")=="nucleus"){
      document.getElementById("nucleus_entry").style.backgroundColor = 'green'
      score= score +1
    }
    else
    {document.getElementById("nucleus_entry").style.backgroundColor = 'red'}
  
  var rib = document.getElementById("ribosome_entry").value;
  if (rib.toLowerCase()=="ribosomes"){
      document.getElementById("ribosome_entry").style.backgroundColor = 'green'
      score= score +1
    }
    else
    {document.getElementById("ribosome_entry").style.backgroundColor = 'red'}
  
  var cyt = document.getElementById("cytoplasm_entry").value;
  if (cyt.toLowerCase()=="cytoplasm"){
      document.getElementById("cytoplasm_entry").style.backgroundColor = 'green'
      score = score +1
    }
    else
    {document.getElementById("cytoplasm_entry").style.backgroundColor = 'red'}
  
  var vac = document.getElementById("vacuole_entry").value;
  if (vac.toLowerCase()=="vacuole"){
      document.getElementById("vacuole_entry").style.backgroundColor = 'green'
      score = score+1
    }
    else
    {document.getElementById("vacuole_entry").style.backgroundColor = 'red'}

  var mem = document.getElementById("cell_membrane_entry").value;
  if (mem.toLowerCase()=="cell membrane"){
        document.getElementById("cell_membrane_entry").style.backgroundColor = 'green'
        score = score+1
      }
      else
      {document.getElementById("cell_membrane_entry").style.backgroundColor = 'red'}
  

    var mit = document.getElementById("mitochondrion_entry").value;
  if (mit.toLowerCase()=="mitochondrion"){
      document.getElementById("mitochondrion_entry").style.backgroundColor = 'green'
      score = score+1
    }
    else
    {document.getElementById("mitochondrion_entry").style.backgroundColor = 'red'}
    {document.getElementById("score_entry").value=score+"/6"}
  };
  function stop_keyboard() {
    document.activeElement.blur(); // lose focus on the active element and hide keyboard
};
  
nucleus.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

ribosome.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

cytoplasm.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

vacuole.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

cell_membrane.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

mitochondrion.addEventListener("dragstart", (ev) => {
 ev.dataTransfer.clearData();
 ev.dataTransfer.setData("text/plain", ev.target.textContent);
 stop_keyboard();
});

const time = document.querySelector('.stopwatch')
const mainButton = document.querySelector('#main-button')
const clearButton = document.querySelector('#clear-button')
const stopwatch = { elapsedTime: 0 }

mainButton.addEventListener('click', () => {
  if (mainButton.innerHTML === 'Start Timer') {
    startStopwatch();
    stopwatch.elapsedTime = 0
    stopwatch.startTime = Date.now()
    displayTime(0, 0, 0, 0)
    start_over();
    document.getElementById('show_answers').hidden = true;
    mainButton.innerHTML = 'Submit'
  } else {
    stopwatch.elapsedTime += Date.now() - stopwatch.startTime
    clearInterval(stopwatch.intervalId)
    process();
    document.getElementById('show_answers').hidden = false;
    mainButton.innerHTML = 'Start Timer'
  }
})

clearButton.addEventListener('click', () => {
  stopwatch.elapsedTime = 0
  stopwatch.startTime = Date.now()
  displayTime(0, 0, 0, 0)
  start_over();
})

function startStopwatch() {
  //reset start time
  stopwatch.startTime = Date.now();
  //run `setInterval()` and save id
  stopwatch.intervalId = setInterval(() => {
    //calculate elapsed time
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
    //calculate different time measurements based on elapsed time
    const milliseconds = parseInt((elapsedTime%1000)/10)
    const seconds = parseInt((elapsedTime/1000)%60)
    const minutes = parseInt((elapsedTime/(1000*60))%60)
    const hour = parseInt((elapsedTime/(1000*60*60))%24);
    //display time
    displayTime(hour, minutes, seconds, milliseconds)
  }, 100);
}

function displayTime(hour, minutes, seconds, milliseconds) {
  const leadZeroTime = [hour, minutes, seconds, milliseconds].map(time => time < 10 ? `0${time}` : time)
  time.innerHTML = leadZeroTime.join(':')
}










