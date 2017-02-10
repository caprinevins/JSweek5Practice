var groundcontrol = ["this is ground control", "to major tom", "youve really made the grade."]

//to wrap the variable in a function, add funtion name and pass array to the function

  function singbowie(groundcontrol){
    for(var i=0; i< groundcontrol.length; i++){
	console.log(groundcontrol[i]);
    }
  }

//call (or invoke) your functino here, and pass the array (from var groundcontrol) 

singbowie (groundcontrol);
