function getFormValue(){
        var a = document.getElementById("fname").value;
        var b = document.getElementById("lname").value;
        var c = document.getElementById("display");

        c.style.fontSize = "40px";
        c.style.fontFamily = "monaco";
        c.innerHTML = "Hello " + a + " " + b;

};