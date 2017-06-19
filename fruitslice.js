var fruits=["apple", "orange", "bannana", "pear"];
function fruitSlicer(fruits){
    fruits.pop();
    console.log(fruits);
    fruits.push("kiwi");
    console.log(fruits);
    fruits.shift();
    console.log(fruits);
    fruits.unshift("Mango");
    console.log(fruits);
    var fruitslice =fruits.slice(0,2);
    console.log("post-slice fruits are: " +fruits);
    console.log("and fruitslice is: " +fruitslice);
    var fruitsplice = fruits.splice(2,3);
    console.log("post-splice, fruits are " +fruits);
    console.log("and fruitsplice is " +fruitsplice);
    //reset array for further examples
    var fruits=["apple", "orange", "bannana", "pear"];
    fruits[4] = "pinapple";
    console.log("adding pinapple by fruits[4] "+ fruits);
}
