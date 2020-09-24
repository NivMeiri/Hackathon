var dict1 = {};
var dict2 = {};
var dict3 = {};
var dict4 = {};
var dict5 = {};
var LogInDict = { "Niv": "123",
"Hadassa": "345",
"Guy": "678","Shiri":"666"};
info=""
var pages = [
    'index.html',
    'index2.html',
  ];
  let basicLink =  function(name , url,like) {
    this.name = name;
    this.url = url;
    this.numOfLikes = like;
    this.comments = [];
  }
  let basicSubject = function(name){
    this.name= name;
    this.linkArray = [];
  }
  function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('Big_data.jpg')";
  }
dict1["DFS"] = new basicSubject("DFS");
dict1["DFS"].linkArray.push(new basicLink("YouTube","Depth First Search Algorithm",20));
dict1["DFS"].linkArray.push(new basicLink("Moodle Ben Gurion","Lecture No. 3 - DFS",13));
dict1["DFS"].linkArray.push(new basicLink("Google-Drive","Algorithms summary",7));
dict2["Limit"] = new basicSubject("Limit");
dict2["Limit"].linkArray.push(new basicLink("YouTube","Limit",1));
dict2["Limit"].linkArray.push(new basicLink("Moodle Ben Gurion","limit",2));
dict2["Limit"].linkArray.push(new basicLink("Google-Drive","limit",3));
function SelectPage(num){
  alert(num)
}
 
function GoToPage(){
  num=document.getElementById("Course").value
  if(num==1){window.open("C:/Users/Admin/Desktop/TEST/Hackathon/Algo.html");}
  else if (num==2){window.open("C:/Users/Admin/Desktop/TEST/Hackathon/Calculus.html");}
  else if (num==3){window.open("C:/Users/Admin/Desktop/TEST/Hackathon/Computunal_Models.html");}
  else if (num==4){window.open("C:/Users/Admin/Desktop/TEST/Hackathon/Linear_Alg.html");}
  else if (num==5){window.open("C:/Users/Admin/Desktop/TEST/Hackathon/Advanced_Prog.html");}
}
function check(form){
if(!(form.userid.value in LogInDict)){alert("There is no such a username!!")}
else{
  if((form.userid.value in LogInDict) && LogInDict[form.userid.value]==form.psw.value){
      window.open("C:/Users/Admin/Desktop/TEST/Hackathon/second.html")
      }
  else{
      alert("the password was wrong!!!")
      }
  }
}

function showSearch(id_num){
  var name =document.getElementById("Search")
  alert("search: "+name.value+"    number: "+id_num)
  if(id_num==1){  searchFunc(name.value,dict1)}
  if(id_num==2){  searchFunc(name.value,dict2)}
  if(id_num==3){  searchFunc(name.value,dict3)}
  if(id_num==4){  searchFunc(name.value,dict4)}
  if(id_num==5){  searchFunc(name.value,dict5)}
}
function searchFunc(info2,dict){
    info=info2
    let h1=document.createElement("h1")
    let h2=document.createElement("h2")
    let h3=document.createElement("h3")
    let h4=document.createElement("h3")
    try {
        if( dict[info]==null) throw "No Value";
      }
      catch(err) {
        console.log(err)
        document.getElementById("flex-box-res").innerHTML = err.message;
      }
      h1.setAttribute("id","searchFunc")
      h2.setAttribute("id","myfunc2")
      let text=document.createTextNode( info+" :תוצאות עבור")
      for ( let i =0 ; i< dict[info].linkArray.length ; i++){
      let SourceName=document.createTextNode("    "+dict[info].linkArray[i].name+": " )
      let SourceUrl=document.createTextNode(dict[info].linkArray[i].url+"\n" )
      let SourceLike=document.createTextNode(" | "+dict[info].linkArray[i].numOfLikes+" likes" )
      h2.append(SourceName)
      h2.append(SourceUrl)
      h2.append(SourceLike)
      h2.style.fontSize="25"
      if(i==1){
      h3.append(SourceName)
      h3.append(SourceUrl)
      h3.append(SourceLike)
      h3.style.fontSize="25"
      }
      if(i==2){
        h4.append(SourceName)
        h4.append(SourceUrl)
        h4.append(SourceLike)
        h4.style.fontSize="25"
        }
    }
    h1.appendChild(text)
    h1.style.marginLeft="600"
    document.getElementById("flex-box-res").appendChild(h1)
    document.getElementById("flex-box-res2").appendChild(h2)
    document.getElementById("flex-box-res4").appendChild(h3)
    document.getElementById("flex-box-res5").appendChild(h4)
    document.getElementById("flex-box").style.display='block'
}
function reset(){
    document.getElementById("searchFunc").remove()
    document.getElementById("myfunc2").remove()
}
function like(){
  reset()
  Clean_Show()
}
function Clean_Show(){
  let text=document.createTextNode( "DFS"+" :תוצאות עבור")
  let h1=document.createElement("h1")
  h1.appendChild(text)
  h1.style.marginLeft="600"
  document.getElementById("flex-box-res").appendChild(h1)
  let h2=document.createElement("h2")
  document.getElementById("flex-box-res2").appendChild(h2)
  info-"DFS"
   let SourceName=document.createTextNode("    "+dict[info].linkArray[0].name+": " )
   let SourceUrl=document.createTextNode(dict[info].linkArray[0].url+"\n" )
   let SourceLike=document.createTextNode(" | "+(dict[info].linkArray[0].numOfLikes+1)+" likes" )
   h2.append(SourceName)
   h2.append(SourceUrl)
   h2.append(SourceLike)
   h2.style.fontSize="25" 
   document.getElementById("flex-box-res2").appendChild(h2)
}
