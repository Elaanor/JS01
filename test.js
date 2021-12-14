// let array = [1,2,3,4,5];
// let i = 0;

// for (; i < array.length; i++) {
 
    
// }

// let isim=["Mustafa" ,"Enes","Elif"];

// for (let j = 0; j < isim.length; j++) {
//     console.log(isim[j]);
    
// }


// let arr = [1,2,3,4,5,6];

// for (let i = 0; i < array.length; i++) {
//     if (arr[i] == 2) {
//         console.log("Çift",arr[i]);
//         continue
//     }
    
// }

let names = new Array("Ahmet","Mehmet");

let name = ["Ahmet","x"];
let f = [];
f[0]= "Ahmet";
f[1]= "Mehmet";


let isimn = ["Ali","Ahmet"];
isimn.push("Serkan")
console.log(isimn);

isimn.unshift("Musti");

let nn = ["Ali","Veli","Ayşe","Ahmet"];


nn.splice(1,1,"HAKAN","Elif");
console.log("splice",nn);

let arr = [1,2,5];
arr.splice(-1,0,3);
console.log(arr);

let str = "test";
let arrstr = ["t","e","s","t"];

console.log(arrstr.slice(-1))
console.log(str.slice(1,3))


// let nm = [12,16,18,20];
// nm.pop();
// console.log(nm);
// nm.shift();

// delete nm[2];
// console.log(nm[2]);
let nm = [12,16,18,20];
let is = ["Paris","İstanbul"];


let _c=nm.concat(is);
console.log(_c);

let num = [3,8,4,1,7,9];
let _ss = num.sort();
console.log(_ss);

let alf = ["s","b","i"];
let _as = alf.sort();
console.log(_as);

let rnum = [3,8,4,1,7,9];
let _rnum = rnum.reverse();
console.log(_rnum);


let iss = ["Paris","İstanbul","Viyana"];
let _search = iss.indexOf("Viyana");
console.log(_search);
