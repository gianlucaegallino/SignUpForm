let sendBTN = document.getElementById("submitbt");

sendBTN.addEventListener('click', function() {
    let p1 = document.getElementById("password");
    let p2 = document.getElementById("CONFIRM");
    let error = document.getElementById("errorbox");
    let form = document.getElementById("myform");
    
    if(p1.value == null) {
        console.log("resr");
    }

    if(p1.value != p2.value || p1.value == "" || p2.value == "") {
        error.innerText = "* passwords dont match";
    } else {
        form.submit();
    }
});