console.log("participantHandler.js ready");

var container = document.getElementById("participants-names-ages"),
    participant = document.getElementsByClassName("participant"),
    carrier = document.getElementById("carrierInput");

var participantsValue,
    participantsArr,
    num;


function getParticipants() {

  'use strict';

  var carrier_value = localStorage.getItem("carrierValue");

  console.log("getValue",carrier_value)

  participantsValue = carrier_value;

};

function showParticipants(){

  getParticipants();

  var count;

  if(participantsValue !== null){

    container.innerHTML = "";

    participants = participantsValue.split(",");

    participantsArr = [];

    participants.forEach(function(item,index){

      var newItem = item.split('|');

      participantsArr.push(newItem);

      createParticipant();

    })

    var nameInput = document.querySelectorAll(".input-name");
    var ageInput = document.querySelectorAll(".input-age");

    for (var i = 0; i < nameInput.length; i++) {

      nameInput[i].value = "" + participantsArr[i][0] + "";
      ageInput[i].value = "" + participantsArr[i][1] + "";

    }

  }else{
    createParticipant();
  }
}
var removeBtn = document.getElementsByClassName('button');

function removeParticipant(){
  console.log("clicked");
  console.log(participantsArr);

  var thisClassName = this.className;

  var classOfThis = document.getElementsByClassName(thisClassName);

  for (var i = 0; i < classOfThis.length; i++) {
    console.log(classOfThis.length,participantsArr[i]);
  }

}
// creates template for participants
var newParticipant;

function createParticipant(){

  newParticipant = document.createElement('div');
  newParticipant.setAttribute("class","participant");

  var inputText = ["name","age"];

  inputText.forEach(function(el){
    var labels = document.createElement('label');
    labels.htmlFor = el;
    labels.innerHTML = el;
    newParticipant.appendChild(labels);
  })

  inputText.forEach(function(el){
    var inputs = document.createElement('input');
    inputs.type = 'text';
    inputs.setAttribute("class","input-" + el +"");
    newParticipant.appendChild(inputs);
  })

  var removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.setAttribute("class","removeBtn");
  removeBtn.innerHTML = '<i class="material-icons">cancel</i>';
  removeBtn.addEventListener('click',removeParticipant,false);
  newParticipant.appendChild(removeBtn);

  container.appendChild(newParticipant);
}

console.log(newParticipant);

function addParticipant(){

  container.appendChild(newParticipant);

}

function storeParticipants() {

  getParticipants();

  var participantStr;
  var participantArr = [];
  var collectionArr = [];

  for (var i = 0; i < participant.length; i++) {

    var participantName = participant[i].querySelectorAll(".input-name")[0].value;
    var participantAge = participant[i].querySelectorAll(".input-age")[0].value;

    participantStr = participantName +"|"+ participantAge;

    participantArr.push(participantStr);

  }

  for (var i = 0; i < participantArr.length; i++) {

    collectionArr.push(participantArr[i]);

  }

  carrier.value = collectionArr;

  localStorage.setItem("carrierValue", carrier.value);

  carrier.value = "";

  location.reload();
}
function setParticipants(){


}
//

(function() {
  'use strict';
  showParticipants();
}());
