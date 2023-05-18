"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var algorithm3_1 = require("./algorithm3");
var result;
/**
 * 내가 만든 가위바위보
 * input()
 *
 *  */
function gamBamBo(me, you) {
    var a, b, c;
    a = "가위";
    b = "바위";
    c = "보";
    try {
        if (me != c) {
            new Error("에러 발생");
            return false;
        }
        else {
            //가위가 아니거나, 바위가 아니거나, 보가
            //a=가위,b=바위,c=보
            //주먹<보
            if (me === b && you === c) {
                return true;
            }
            //가위<주먹
            else if (me === a && you === b) {
                return false;
            }
            //보<가위
            else if (me === c && you === a) {
                return true;
            }
            else if (me === c && you === b) {
                return true;
            }
            else if (me === b && you === a) {
                return true;
            }
            else if (me === a && you === c) {
                return true;
            }
            else {
                console.log("비겼습니다");
                return false;
            }
        }
    }
    catch (_a) {
        console.log("가위 바위 보만 입력하세요.");
        return false;
    }
}
result = gamBamBo((0, algorithm3_1.random)(), (0, algorithm3_1.random)());
exports.default = result;
