var time = new Date().getHours();
// var time = 23;
var greeting = "Hi";
var name = "Irina";

// console.log(time);

// Your conditional statements here
if (time < 12) {
  greeting = "Good Morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}

// alert()
alert(`${greeting} ${name}`);
