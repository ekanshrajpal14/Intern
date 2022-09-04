document.querySelector("#cross").addEventListener("click", function (elem) {
    document.querySelector("#con").style.display = "none";
    document.querySelector("#top").style.height = "0";
    document.querySelector("#cross i").style.display = "none";
})
var first = 0;
document.querySelector("#btn2").addEventListener("click", dets => {
    if (first === 0) {
        document.querySelector("#image1").style.width = "0%";
        first = 1;
    }
    else if (first === 1) {
        document.querySelector("#image2").style.width = "0%"
        first = 2;
    }
    else {
        document.querySelector("#image3").style.width = "0%"
        first = 3;
    }


})
document.querySelector("#btn1").addEventListener("click", dets1 => {
    if (first === 3) {
        document.querySelector("#image3").style.width = "100%"
        first = 2;

    }
    else if (first == 2) {
        document.querySelector("#image2").style.width = "100%"
        first = 1;
    }
    else {
        document.querySelector("#image1").style.width = "100%"
        first = 0;
    }
})
