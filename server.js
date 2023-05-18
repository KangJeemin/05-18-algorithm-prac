import http from 'http'  
import persent from './algorithm4.js' 
import result from './algorithm1.js'

let a =0;
let b =0;

if(result==true){
  a++
}
else{
  b++
}


const server =http.createServer((res,req),()=>{
  setTimeout(()=>{
    persent(a,b)
  },1000)
})


server.listen(3000,()=>{
  console.log("server실행")
})