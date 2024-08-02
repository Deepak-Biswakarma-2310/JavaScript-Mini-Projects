const input = document.getElementById("input");

function reverse(str){
    return str.split("").reverse().join("");
}

function check(){
    const value = input.value;
    const reversed = reverse(value);
    if(value === reversed){
        alert("Palindrome");
    }else{
        alert("Not a Palingdrom");
    }
    input.value = "";
}
