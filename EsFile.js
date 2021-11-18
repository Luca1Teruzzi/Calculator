
$('#table').append(localStorage.getItem("tabella"));
//console.log("nome: ",localStorage.getItem("nome"));


$("#btnpiu").click(function (){
    bottoncino("+");
});
$("#btnmeno").click(function (){
    bottoncino("-");
});
$("#btnper").click(function (){
    bottoncino("*");
});
$("#btndiviso").click(function (){
    bottoncino("/");
});
var  bottoncino=function(segno){


    
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()){
        var n1= parseInt(input1.val());
        var n2= parseInt(input2.val());
        switch(segno){
            case "+":
                var risultato=n1+n2;
                break;
            case "-":
                var risultato=n1-n2;
                break;
            case "*":
                var risultato=n1*n2;
                break;
            case "/":
                var risultato=n1/n2;
                break;
        }
        
        var string = 
        "<tr><td>" + n1 + "</td><td style ='text-allign:center'>"+segno+"</td><td>" + n2 +"</td><td>"+ risultato +"</td></tr>";
        var table=localStorage.getItem("tabella");
        localStorage.clear();
        localStorage.setItem("tabella", table + string);
        $('#table').append(string);
        input1.val("");
        input2.val("");
    }
   
};
