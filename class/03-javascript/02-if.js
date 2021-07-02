//f(x) = x+3;
//f(3)

function add(x, y) {
    console.log(x + 3 + y);
}

// add(10, 5);

function hello(){
    alert("안녕하세요");
}//선언식

//const hello=()=>{} 화살표 함수

// hello();

//조건문
//시작점(if)과 (추가 : else if) 끝점(else) -> 끝점에는 조건이X
//조건문 실무 예시 : 회원가입 비밀번호 다시 입력

// if("철수" === "영희"){
//     console.log("같음");
// } else {
//     console.log("다름");
// }

//화살표 함수
const name = (aaa) => {
     if(aaa === "철수") {
        console.log("같음");
    } else {
        console.log("다름");
    }
};

name('철수');

const child = (age) => {
    if(age < 13) {
        console.log("어린이")
    } else{
        console.log("청소년")
    }
};

child(10);
child(15);

const profile = (age)=>{
    if(typeof age === 'number'){//에러핸들링(실무) 조건문
        //typeof = 데이터 타입 확인
    if(age >= 20){
        console.log("성인입니다")
    } else if(age >= 8){
        console.log("학생입니다")
        //(8<= age <=19)X->조건문 안에서는 한번에 하나씩 (8<=age && age <=19) 
    } else{
        console.log("어린이입니다")
    } 
 }else {
        console.log('잘못된 입력')//else 에러핸들링
    }
};//조건문 2개
profile(7);
profile(20);
profile(8);
profile('dfsdfsd')





