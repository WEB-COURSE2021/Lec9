//document.getElementById("demo").innerHTML = "hello my name is hossam";
//document.write("hello");

//window.alert("hello in my site");



//console.log("hello");


/*function x() { var y = 10; var z = 30; return y + z; }

document.write(x());*/
//مينفعش ادخل دالة جوة متغير واطبع الدالة لكن لو الدالة من الاول مش متخزنة في متغير هتنطبع

/*var x = myfunction(1, 2);

function myfunction(a, b) { return a + b; }

document.write(x);*/
/*
var player = { name: "messi", age: 35, national: "Argentina", The_function1: function() { return this.name + " " + this.age; } };
var name1 = player.The_function1();
document.write(name1);*/


//function popup1() { window.alert("thank u for submitting"); }




/*var x, y, z, m;
x = "ahmed";
y = "loves";
z = "al ahly";

m = x + " " + y + " " + z;
document.write(m);*/


/*var x = myfunction(20, 30);

function myfunction(a, b) {

    return a * b;
}

document.write(x);*/


/*var car = { name: "fiat", model: "500", price: 20125, method_running: function() { return this.name + " " + this.model; } };
var name1 = car.method_running();
document.write(name1);*/

//document.write(car.name + " " + car.price);
//document.write(car["model"]);


/*var person = { name: "ahmed", age: 20, national: "egypt", drink: function(juice) { return this.name + " " + this.age + juice; } }

var name1 = person.drink("orange");
document.getElementById("demo").innerHTML = name1;*/











/////////////////////////// FIRST WAY OF FUNCTION /////////////////////
/*var x = drink("orange");

function drink(juice) { return juice; }

document.getElementById("demo").innerHTML = x;*/

///////////////////////////////// Second Way Of function ///////////////////////

/*function drink(my_name) { return "hello this is my name" + " " + my_name; }
document.getElementById("demo").innerHTML = drink("hossam");*/

///////////////////////////////////////// Third Way of Function ////////////////////////////////////

/*var person = { name: "hema", age: 32, national: "egypt", drink: function(juice) { return this.name + " " + this.age + " " + juice; } }
document.getElementById('demo').innerHTML = person.drink("orange");*/

////////////////////////////////////////////////////////////ARRAY///////////////////////////////////////////////////////////////////////////

/*var car = ["tyota", "BMW", "Fiat"];
car[0] = "hossam";
document.getElementById("demo").innerHTML = car[0];*/

///////////////////////////////////////////////////////////////////EVENT CLICK///////////////////////////////////////////////////////////////


/*var x = "ahmed";

function the_name() { document.getElementById("demo").innerHTML = x; }

the_name(); // لازم تنادي علي الدلة //*/

/*function the_name() {
    var x = 10;
    document.getElementById("demo").innerHTML = x;
}

the_name();*/
/*
{

    var x = 80;

}

document.getElementById("demo").innerHTML = x;
var z, m;
m = 30;
var z = x + m;
document.getElementById("sum").innerHTML = z;*/


/*var x = 10; {
    let x = 20;
    document.getElementById("demo").innerHTML = x;
}*/

/*var x = 10;

{
    let x;
    x = 20;
    document.getElementById("demo").innerHTML = x;
}


document.getElementById("sum").innerHTML = x;*/


/*
var x = 10;
if (x > 50) {
    document.getElementById("demo").innerHTML = "hello";

} else {
    //document.getElementById("demo").innerHTML = "bye"

    if (x > 5) { document.getElementById("demo").innerHTML = "hello"; } else { document.getElementById("demo").innerHTML = "bye"; }

}*/

/*var x = 0;
while (x < 5) {
    document.write(x);
    x++;
}
document.write(x)*/

/*var x = 0;

do {
    document.write(x);
    x++;
}

while (x < 5);*/
/*
var x;
for (x = 0; x < 10; x += 2) {
    document.write(x);
}*/

/*
var x;
for (x = 0; x <= 10; x += 2) {
    document.write(x);
}*/

/*
var x = new Date();
switch (x.getDay()) {

    case 0:
        document.write("hello");
        break;

    case 1:
        document.write("hi");
        break;

    case 2:
        document.write("hi");
        break;
    case 3:
        document.write("hi hoso");
        break;

}*/


/*var x = 10;

function my_num() {
    var x = 20;
    return document.getElementById("demo").innerHTML = x;
}

my_num();
document.getElementById("demo").innerHTML = x;*/


/*const x = 10;
document.write(x); {
    const x = 30;
    document.write(x);
}

document.write(x);*/

/*
const x = 10;
document.write(x);

{
    const x = 20;
    document.write(x);
}

document.write(x);*/

/**********************************On click event action*************** */
/*var x = new Date();

function the_time() {

    switch (x.getDay()) {
        case 0:
            document.getElementById("demo").innerHTML = "sunday"
            break;

        case 5:
            document.getElementById("demo").innerHTML = "wenesday"
            break;

     
    }




}*/

/*
var x = 5;
if (x > 10) { document.write("hello"); }
document.write("hi");*/









///////////////////////////////////////////////////////////////REVISION OF LEC 7,8//////////////////////////////////////////////////////////////

////////////////////////////lec7////////////////////////

/*1*/

//document.getElementById("demo").innerHTML = "hello";

/*2*/
//document.write("hello");

/*3*/
//window.alert("hello in my site");

/*4*/
//console.log("welcome in my console write now for depugging");

/*5*/
/*var x = 10;
document.write(x);*/

/*6*/
/*function my_function() {
    return document.write("hello");
}

my_function(); //now we are making a calling of function.*/

/*var x = my_function(1, 2);

function my_function(a, b) { return a * b; };
document.write("the result is : " + " " + x);*/

/*7*/
/*
var car = { name: "fiat", price: 120000 }
document.write(car.name);

var car = { name: "fiat", price: 120000 }
document.write(car["price"]);

var car = { name: "fiat", price: 120000, the_speed: function() { return this.name + " " + this.price; } }
document.write(car.the_speed());

var car = { name: "fiat", price: 120000, the_speed: function() { return this.name + " " + this.price; } }
var x = car.the_speed();
document.write(x);*/

////////////////////////////////////Lec8/////////////////////////////////

/*8- to connect with event click
function welcom1() {
    return document.getElementById("demo").innerHTML = Date();
}*/

/*9*/

/*
var x = new Date();

function the_week_days() {

    return document.getElementById("demo").innerHTML = x.getDay();
}*/

/*10*/
/*var cars = ["Fiat", "Toyota", "BMW"];
cars[2] = "Ford";
document.write(cars[2]);*/

/*11*/
/*
var x = 10; //Global//
document.write(x);

function num1() { //Local//
    var x = 20;
    document.write(x);
}
num1();
*/

/*12*/
/*
var x = 10;
document.write(x + " ");

{ var x = 20; }
document.write(x + " ");

function the_head() { return document.write(x); }
the_head();*/

/*13*/
/*var x = 10;
document.write(x); {
    let x = 20;
    document.write(x);
}

document.write(x);*/

/*14*/
/*
const x = 20;
document.write(x); {
    let x = 40;
    document.write(x);
}
document.write(x);*/

/*15*/
/*
var x = 10;
if (x < 10) {
    document.write("hello");
} else {
    if (x > 5) { document.write("hosso") } else { document.write("bye"); }
}*/

/*
var x = 0;
while (x < 5) {
    document.write(x);
    x++;
}
document.write(x);*/
/*
var x = 0;
do {

    document.write(x);
    x += 2;
}
while (x < 10);*/
/*
for (var x = 0; x < 5; x++) { document.write(x); }*/

/*16*/

/*
var x = 5;
switch (x) {
    case 2:
        document.write("hello");
        break;

    case 3:
        document.write("bye");
        break;

    default:
        document.write("hi hosso");
}
*/