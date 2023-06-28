// 문제1: 배열의 삭제 400,500 삭제하기

let nums = [100, 200, 300, 400, 500];

let result = nums.splice(0, 3);

console.log(result);

// 문제2: 배열의 내장함수
// pass 부분에 배열 내장함수를 이용하여 코드 입력 후
// 출력 [200, 100, 10000, 300]

//데이터
const arr = [200, 100, 300];
//pass
arr.splice(2,0,10000);

console.log(arr);


// 문제3: 변수의 타입
// 다음 출력 값으로 올바른 것은?

const arr2 = [100,200,300];
console.log(typeof(arr2))

/**
 * undefined
 * string 
 * number --> 정답⭐️ 이유:모름
 *  */


// 문제4: 변수의 타입2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

/**
 * 1) 입력 a = 1, 출력: number
 * 2) 입력 a = 2.22, 출력: boolean --> 정답⭐️ 이유: 2.22는 float? boolean은 T,F!
 * 3) 입력 a = 'p', 출력: string
 * 4) 입력 a = [1,2,3], 출력: object
 */


// 문제 5: for문 계산
// 다음 코드의 출력 값으로 알맞은 것은?

let a = 10;
let b = 2;

for(let i=1; i<5; i+=2) {
    a += i;
    // 실행1) i=1 // a = 1+10 -> 11
    // 실행2) i=3 // a = 3+11 -> 14
    // 실행3) i=5 // i<5 조건에 만족하지 않으므로 실행되지 않는다.
}

// 14 + 2 = 16 !!
console.log(a+b);

/**
 * 1) 10
 * 2) 12
 * 3) 14
 * 4) 16
 */
