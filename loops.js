console.log("heeeey";
           )


<!--
i++ is shorthand for i = i +1
i -- is shorthand for i = i -1

for(var i = 0; i<5; i++){}

initialization var i = 0
  declares the counter variable
condition i < 5;
  determines if the loop will run
increment i++
  describes how counterwill change after each run

FOR Loop examples

for (var i=0; i < 5; i ++){
console.log( i );
}

You will see zero - four the first time through the loop

for (var i = 99; i > 0; i --){
  console.log(i + "bottles of beer on the wall");
}

//write a for loop that console logs woof four times//

for (var i = 0; i < 5; i ++){
  console.log("woof");
}


//write a for loop that alternates whoa and dude//

for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    console.log("whoa");
  } else {
    console.log("dude");}
  }
}

//write a loop that causes the following output to the console
//100, 80, 60, 40, 20

for (var i = 100; i > 0; i = i - 20) {
  console.log(i)
}

