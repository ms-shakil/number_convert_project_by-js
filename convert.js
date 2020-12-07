
var click_button = document.querySelector(".c_button")
var textarea = document.querySelector(".Text_area")
// colling area
click_button.onclick = function(){
var input_b =document.getElementById("Select1").value
var convert_b =document.getElementById("optionB").value
var input_box = document.getElementById("input_area").value
// function start
function decimal_to (number,convert){
    var lst =[]
    while (number > 0){
        var mod = number % convert
        mod =Math.floor(mod)   
        if(mod == 10){
          mod = "A"
        }
        else if (mod == 11){
          mod ="B"
        }
        else if(mod == 12){
          mod ="C"
        }
        else if (mod == 13){
          mod ="D"
        }
        else if(mod ==14){
          mod ="E"
        }
        else if(mod ==15){
          mod ="F"
        }
        mod = String(mod)
        lst.push(mod)
        if(mod == "A"){
          mod= 10
        }
        else if (mod == "B"){
          mod =11
        }
        else if(mod == "C"){
          mod =12
        }
        else if (mod == "D"){
          mod =13
        }
        else if(mod =="E"){
          mod =14 
        }
        else if(mod =="F"){
          mod =15
        }   
        mod = parseInt(mod)
        var num = number - mod
        var zz = num / convert
        number = zz
    }
    lst.reverse()
  return lst  
}

function other_to_decimal(number,convert){
    var lst2 =[]
    for(i = 0; i<lst.length; i++){
      if (lst[i]=="A" || lst[i]=="a"){
        lst[i]=10
      }
      else if(lst[i]=="B" || lst[i]=="b"){
        lst[i]=11
      }
      else if(lst[i]=="C" || lst[i] =="c"){
        lst[i]=12
      }
      else if(lst[i]=="D" || lst[i]=="d"){
        lst[i]=13
      }
      else if(lst[i]=="E" || lst[i] =="e"){
        lst[i]=14
      }
      else if(lst[i]=="F" || lst[i]=="f"){
        lst[i]=15
      }
      var int = parseInt(lst[i])
      lst2.push(int)
    }
    var data =[]
    var n = 0
    for (var j = lst2.length - 1; j >= 0; j--){
  
      var dec = lst[j]*convert**n
      n+=1 
      data.push(dec)
    }
    e =0
    for(k = 0; k<data.length;k++){
     
      e+=data[k]
    }
  
    return e
  }
// function end
// main area start
var inp = input_b
if (inp =="decimal"){
  var inp_val =input_box
  var inp2 =convert_b
  if(inp2 =="octal"){
     var val = 8
     var kk = decimal_to(inp_val, val)
     var zz = kk.join("")
     textarea.innerHTML  = zz
  }
  else if(inp2 =="binary"){
    var val = 2
    var kk = decimal_to(inp_val, val)
    var zz = kk.join("")
    textarea.innerHTML  = zz
  }
  else if(inp2 =="hexadecimal"){
    var val = 16
    var kk = decimal_to(inp_val, val)
    var zz = kk.join("")
    textarea.innerHTML  = zz
  }
}
else if(inp =="binary"){
  var inp_val =input_box
  var inp2 =convert_b
  var lst = inp_val.split('')
  if(inp2 =="decimal"){
   var val = 2
   var zz = other_to_decimal(lst,val)
   textarea.innerHTML  = zz
  }
  else if(inp2 =="octal"){
    var val = 2
   var kk = other_to_decimal(lst,val)
   var zz = decimal_to(kk,8)
   textarea.innerHTML  = zz.join("")
  }
  else if(inp2 =="hexadecimal"){
    var val = 2
   var kk = other_to_decimal(lst,val)
   var zz = decimal_to(kk,16)
   textarea.innerHTML  = zz.join("")
  }
}
// octal
else if(inp =="octal"){
  var inp_val = input_box
  var inp2 = convert_b
  var lst = inp_val.split('')
  if(inp2 =="decimal"){
   var val = 8
   var zz = other_to_decimal(lst,val)
   textarea.innerHTML  = zz  
  }
  else if(inp2 =="binary"){
    var val = 8
   var kk = other_to_decimal(lst,val)
   var zz = decimal_to(kk,2)
   textarea.innerHTML  = zz.join("")
  }
  else if(inp2 =="hexadecimal"){
    var val = 8
   var kk = other_to_decimal(lst,val)
   var zz = decimal_to(kk,16)
   textarea.innerHTML  = zz.join("")
  }
}
// hexa
else if(inp =="hexadecimal"){
    var inp_val = input_box
    var inp2 = convert_b
    var lst = inp_val.split('')
    if(inp2 =="decimal"){
     var val = 16
     var zz = other_to_decimal(lst,val)
     textarea.innerHTML  = zz  
    }
    else if(inp2 =="binary"){
      var val = 16
     var kk = other_to_decimal(lst,val)
     var zz = decimal_to(kk,2)
     textarea.innerHTML  = zz.join("")
    }
    else if(inp2 =="octal"){
      var val = 16
     var kk = other_to_decimal(lst,val)
     var zz = decimal_to(kk,8)
     textarea.innerHTML  = zz.join("")
    }
  }
// main area end
}
