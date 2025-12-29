function changeHeading() {
    let a = document.getElementById("heading").innerHTML;
    
    if (a == "hello") {
        document.getElementById("heading").innerHTML = "I love dogs";
    } else {
        document.getElementById("heading").innerHTML = "hello";
    }
}