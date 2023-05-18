import { random } from "./algorithm3";
let result:boolean
/**
 * 내가 만든 가위바위보
 * input()
 * 
 *  */
 function gamBamBo(me:string,you:string){
  let a,b,c;
  a="가위";
  b="바위";
  c="보";
  try{
    if(me===a){
      if(you===a){
        console.log("비겼습니다")
        return true
      }
      else if(you===b){
        console.log("당신이 졌습니다.")
        return true

      }
      else if(you===c){
        console.log("당신이 이겼습니다.")
        return true

      }
      else{
        console.log("뭐고?")
        return false
      }
    }
    if(me===b){
      if(you===b){
        console.log("비겼습니다")
        return true
      }
      else if(you===c){
        console.log("당신이 졌습니다.")
        return true

      }
      else if(you===a){
        console.log("당신이 이겼습니다.")
        return true

      }
      else{
        console.log("뭐고?")
        return false
      }
    }
    if(me===c){
      if(you===c){
        console.log("비겼습니다")
        return true
      }
      else if(you===b){
        console.log("당신이 이겼습니다.")
        return true

      }
      else if(you===a){
        console.log("당신이 졌습니다.")
        return true

      }
      else{
        console.log("뭐고?")
        return false
      }
    }
  }
 catch{
  console.log("가위 바위 보만 입력하세요.")
  return false;
 }

}
gamBamBo("바위","가위")

// result=gamBamBo(random(),random())
// export default result

