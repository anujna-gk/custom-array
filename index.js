function Array() {
  this.sizeproperty = arguments.length;

  // console.log(this.sizeproperty);
  // console.log(this);
  // console.log(typeof arguments);
  // console.log(arguments);
  // console.log(this.arguments);
  // console.log(Array.arguments);
  // console.log(this.Array);
  // console.log(Array);
  console.log("//////////////////////////");
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

Array.prototype.custompush = function (item) {
  last = this.sizeproperty;
  this[last] = item;
  this.sizeproperty++;
  console.log(this);
};

Array.prototype.custompop = function () {
  last = this.sizeproperty;

  if (last === 0) {
    console.log("empaty array");
    return;
  } else {
    delete this[last - 1];
    this.sizeproperty--;
    console.log(this);
  }
};

console.log("obj 1");
const array1 = new Array(5, 6, 7, 8);
console.log(array1);

array1.custompush(9);

console.log("obj 2");
const array2 = new Array();

array2.custompop();

console.log("obj 3");
const array3 = new Array(7, 8, 4, 5, 2, 3, 78, 54, 23, 45);
console.log(array3);
array3.custompop();
array3.custompop();
array3.custompush(28, 29);
