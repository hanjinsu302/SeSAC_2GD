"use strict";
//tuple 
/*

    tuple= 배열
    길이와 타입이 지정되어 있는 배열
 
 */
let drink = ["콜라", "사이다"];
drink[0] = "cola";
console.log(drink);
//drink[1] = 2; string 여소를 number로 바꾸려고하면 오류 발생
drink.push("str");
console.log(drink);
let drink2 = ["콜라", 2500];
//drink2.push["사이다"]; readonly 새로운 요소 추가 error
//drink2[0] ="cola" readonly 요소 변경 error!
console.log(drink2[0]);
console.log(drink2[1]);
let olimpic;
olimpic = [
    {
        name: " 소트트랙",
        type: "혼성계주",
    },
    true,
];
//olimpic[1] =false; //readonly = Error!!!!
//enum
/*

 */
var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["user"] = 1] = "user";
    Auth[Auth["guest"] = 2] = "guest";
})(Auth || (Auth = {}));
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
var Cafe;
(function (Cafe) {
    Cafe["americano"] = "\uC544\uBA54\uB9AC\uCE74\uB178";
    Cafe["latte"] = "\uB77C\uB5BC";
})(Cafe || (Cafe = {}));
console.log(Cafe.americano);
console.log(Cafe.latte);
var Cake;
(function (Cake) {
    Cake[Cake["choco"] = 0] = "choco";
    Cake[Cake["vanlilla"] = 10] = "vanlilla";
    Cake[Cake["strawberry"] = 11] = "strawberry";
    Cake["kiwi"] = "kiwi";
})(Cake || (Cake = {}));
console.log(Cake.choco, Cake.vanlilla, Cake.strawberry, Cake.kiwi);
const student1 = {
    name: "js",
    isPassed: false,
};
const otani = {
    name: " 오타니",
    isPassed: true,
    position: "pitcher",
    weight: 95.3,
    height: 193,
    backNumber: 17,
    1: "A",
    2: "A+",
    3: "F",
};
otani.position = "투수";
otani["1"] = "B";
console.log(otani);
const toycar = {
    name: "타요",
    start() {
        console.log("이름은" + this.name + "입니다" + "색은" + this.color + "입니다");
    },
    color: "blue",
    price: 25000,
};
toycar.start();
let daniel = {
    name: "han",
    gender: "men",
    age: 20,
};
let albert = {
    name: "덤블도어",
    gender: "Male",
};
console.log(albert);
let heroGame_A = {
    title: "DC 언체인드",
    price: 50000,
    desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
    category: "액션",
    platform: "모바일",
};
let heroGame_B = {
    title: "MARVEL 퓨처파이트",
    price: 65000,
    category: "롤플레잉",
    platform: "모바일",
};
console.log(heroGame_A, heroGame_B);
