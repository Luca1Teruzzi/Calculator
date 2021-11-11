

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
    myStorage = window.localStorage;
    if(localStorage.lengt!=0){
        for(var i=0;i<localStorage,length;i++){
            $('#table').append(localStorage.getItem(i));
        }
    }
    
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
        $('#table').append(string);
    
        localStorage.setItem(localStorage.length+1, string);
        input1.val("");
        input2.val("");
    }
   
};
