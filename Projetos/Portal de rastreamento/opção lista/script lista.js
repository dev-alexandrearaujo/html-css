function addItem() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");
    var input5 = document.getElementById("input5");
    
    var item1 = input1.value;
    var item2 = input2.value;
    var item3 = input3.value;
    var item4 = input4.value;
    var item5 = input5.value;
    
    if (item1 && item2 && item3) {
        var ul = document.getElementById("myList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item1 + " - " + item2 + " - " + item3 + " - " + item4 +  " - " + item5));
        ul.appendChild(li);
        
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
}