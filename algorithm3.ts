export function random():string{
 let a=Math.floor(Math.random()*3)
 switch(a){
  case 0:
    return "가위"
    break;
  case 1:
    return "바위"
    break;
  case 2:
    return "보"
    break;
  default:
    return ""
 }
//  if(a===0){
//   return "가위"
//  }
//  if(a===1){
//   return "바위"
//  }
//  if(a===2){
//   return "보"
//  }

}
