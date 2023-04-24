//your JS code here. If required.
function a (){
  const prom = new Promise((resolve,reject)=>{
     setTimeout(function() {
       resolve("Hello, world!")
     }, 1000);
  })
  .then((res)=>{
    const rend = document.getElementById('output');
	rend.innerHTML = `${res}`
  })
	
  
 
}
a()