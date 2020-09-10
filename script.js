var dict = {};
var pages = [
    'index.html',
    'index2.html',
  ];
dict["DFS"]=[4,"https://www.youtube.com/watch?v=iaBEKo5sM7w&ab_channel=GoGATEIIT"]
dict["BFS"]=[4,"BFS"]
dict["BEST"]=[4,"BEST"]
dict["HOFFMAN"]=[4,"HOFFMAN"]
function myfunc(){
    let info=prompt(" what meterlias are you searching?")
    let h1=document.createElement("h1")
    let h2=document.createElement("h2")
    let h3=document.createElement("h3")
    try {
        if( dict[info]==null) throw "No Value";

       
      }
      catch(err) {
        console.log(err)
        document.getElementById("flex-box-res").innerHTML = err.message;
      }
    let text=document.createTextNode(" you are searching for "+info+", That what we found: THE ADDRESS: "+dict[info][1]   )
    h1.setAttribute("id","myfunc")
    h2.setAttribute("id","myfunc2")
    h2.append(+dict[info][0] +" LIKES ")
    h1.appendChild(text)
    document.getElementById("flex-box-res").appendChild(h1)
    document.getElementById("flex-box-res2").appendChild(h2)

}
function reset(){
    document.getElementById("myfunc").remove()
}
function like(){
    dict["DFS"][0]+=1
    document.getElementById("myfunc2").remove()
    let h2=document.createElement("h2")
    h2.setAttribute("id","myfunc2")
    h2.append(+dict[info][0] +" LIKES ")
    document.getElementById("flex-box-res2").appendChild(h2)

    

}
function Addtodict(){
    }
      
  
function validatePIN (pin) {
    function isCharDigit(NUM){
        return !!NUM.trim() && NUM > -1;
      }
    var n=pin.length
    if(n!=4 & n!=6 ){return false}
    for(i=0;i<n;i++){
        if(! isCharDigit(pin[i])){return false}
    }
return true  
}

/*
let markMass=89,johnMass=89,markH=1.8,johnH=1.7,bmiM,bmiJ,to_return
bmiM=BMI(markMass,markH)
bmiJ=BMI(johnMass,johnMass)
to_return=bmiM<bmiJ
function BMI(mass,H){
  return (mass/(H^2))
}
let x=false ==""
let y=""==false
*/

/*
challenge 2!

*/
let average1=(130+120+120)/3
let av2=(116+94+123)/3
let bool=average1>av2
if(bool){
  console.log("John has ween with score of : "+average1)
}
else{
console.log("Mike has ween with score of : "+av2)
}