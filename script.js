var dict = {};
info=""
var pages = [
    'index.html',
    'index2.html',
  ];
dict["DFS"]=[4,"https://www.youtube.com/watch?v=iaBEKo5sM7w&ab_channel=GoGATEIIT"]
dict["BFS"]=[4,"BFS"]
dict["BEST"]=[4,"BEST"]
dict["HOFFMAN"]=[9,"HOFFMAN"]
function showSearch(text){
  console.log(text)
}
function myfunc(){
    info=prompt(" what meterlias are you searching?")
    let h1=document.createElement("h1")
    let h2=document.createElement("h2")
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
    document.getElementById("myfunc2").remove()

}
function like(){
    reset()
    dict[info][0]+=1
    Clean_Show()

}
function Clean_Show(){
  
  let h1=document.createElement("h1")
  let h2=document.createElement("h2")
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
function Addtodict(){
    }
