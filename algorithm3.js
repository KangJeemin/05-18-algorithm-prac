"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
function random() {
    var a = Math.floor(Math.random() * 3);
    switch (a) {
        case 0:
            return "가위";
            break;
        case 1:
            return "바위";
            break;
        case 2:
            return "보";
            break;
        default:
            return "";
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
exports.random = random;
