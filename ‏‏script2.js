let word=[1,2,'a','b']
;et word2=[]
for ( let i =0 ; i< word.length ; i++){
  if (typeof word[i] === 'number') { word2.push(word[i])}
}
console.log(word2)
