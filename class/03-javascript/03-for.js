//반복문
//초기식 let i =0 기준점 / 조건식 i<5 몇번째까지 / 증감식 i=i+1 몇개씩 /


// let students = ["철수", "영희", "훈이"]

// for(let i = 0; i < 3; i = i+1){
//     console.log(students[i]);
// }
//i =0; 철수
//i = i+1=>1; 영희
//console.log(students[0]);console.log(students[1]);console.log(students[2]);와 동일

//긴 반복문 사용
let students = ["철수", "영희", "훈이", "영희", "훈이", "영희", "훈이", "영희", "훈이", "영희", "훈이", "영희", "훈이", "영희", "훈이", "영희", "훈이"]

console.log(students.length);

for(let i = 0; i < students.length; i = i+1){
    console.log(students[i]);
}

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ]


  for(let i = 0; i < fruits.length; i = i+1){
      console.log(fruits[i].number +". "+ fruits[i].title);
  };

  