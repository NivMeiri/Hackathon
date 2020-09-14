var dict = {};
info=""
var pages = [
    'index.html',
    'index2.html',
  ];


  let basicLink =  function(name , url) {
    this.name = name;
    this.url = url;
    this.numOfLikes = 0;
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

dict["DFS"] = new basicSubject("DFS");
dict["DFS"].linkArray.push(new basicLink("YouTube","https://www.youtube.com/watch?v=iaBEKo5sM7w&ab_channel=GoGATEIIT"));
dict["DFS"].linkArray.push(new basicLink("Moodle","someLink"));
//console.log(dict["DFS"])
//dict["DFS"]=[4,"https://www.youtube.com/watch?v=iaBEKo5sM7w&ab_channel=GoGATEIIT", "link 2", "link 3"]
dict["BFS"]=[4,"BFS"]
dict["BEST"]=[4,"BEST"]
dict["HOFFMAN"]=[9,"HOFFMAN"]
function showSearch(text){
  var name =document.getElementById("Search")
  console.log(name.value);
  searchFunc(name.value)
}

function searchFunc(info){
    //info=search
    let h1=document.createElement("h1")
    let h2=document.createElement("h2")
    try {
        if( dict[info]==null) throw "No Value";
      }
      catch(err) {
        console.log(err)
        document.getElementById("flex-box-res").innerHTML = err.message;
      }
    let text=document.createTextNode(" you are searching for "+info+", That's what we found: "/*+dict[info][1]*/ )
    console.log(typeof(text));
    for ( let i =0 ; i< dict[info].linkArray.length ; i++){
        console.log(dict[info].linkArray[i].name);
          // text+=(dict[info].linkArray[i].name + "\n");
          // text+=(dict[info].linkArray[i].url + "n");
    }
    h1.setAttribute("id","searchFunc")
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
