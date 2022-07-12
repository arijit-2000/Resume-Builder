function addNewWEField() {

  var newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder");
  newNode.setAttribute("rows", 5);

  var weOb=document.getElementById("we");
  var weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
  console.log();
}