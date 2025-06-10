// ----------------------------------------
// infer types or implicit
// ----------------------------------------
// let name = "hello";
// name = "usman"
// let subscribers = 30_000;
// subscribers = 10;

// ----------------------------------------
//  Defines types ( Explicit types )
// ----------------------------------------

// let userName: string = "MAnsar";
// userName = "Virat";

// let age: number = 40_2;
// age = 30;

// let isSubscribed: boolean = true;
// isSubscribed = false;

// let skills: string[] = ["JS", "CSS", "HTML"];
// skills = ["1", "2", "3"];

// const marks: number[] = [10, 30, 50];
// console.log(marks);

// let emptyArray: [] = [];

// let userDetails: {name: string; age: number; result: string} = {
//     name:"ansar",
//     age:30,
//     result:"10"
// }

// userDetails.age = 30;

// ----------------------------------------
// tsc test.ts  - used to create js file.
// ----------------------------------------

// interface Details {
//     name: string;
//     age: number;
//     result: string;
//     getName: ()=>void;
// }

// let userDetails: Details = {
//     name:"ansar",
//     age:3,
//     result:"pass",
//     getName(){
//         console.log(this.name)
//     }
// }
// let admDetails: Details = {
//     name:"a",
//     age:1,
//     result:"p",
//     getName() {
//          this.name
//     },
// }

// ----------------------------------------
// type
// ----------------------------------------

// type Details =  {
//     name:string;
//     age:number | string;
//     result:boolean;
//     getName:()=>void;
// }

// let admDetails: Details = {
//     name:"ansar",
//     age:"40",
//     result:false,
//     getName() {
//         console.log(this.age)
//     },
// }

// let userDetails: Details = {
//     name:"vals",
//     age:90,
//     result:true,
//     getName(){
//         console.log("hell")
//     }
// }
// ----------------------------------------
//  Union operator
// ----------------------------------------

// let skills: (string | number | boolean)[] = ["js", "css", "html", 10,20,30,true];

// ----------------------------------------
//  Optional
// ----------------------------------------

//  below example, note the question mark. if the question mark icon added then that key is an optional,
// typescript will not show an error.
// type Details = {
//   name: string;
//   age?: number | string;
//   result?: boolean;
//   getName?: () => void;
// };

// let userName: Details = {
//     name:"anu",

// };

// ----------------------------------------
// Functions
// ----------------------------------------

// interface Details {
//   name: string;
//   my: number;
//   safety?: boolean;
// }

// let cars: Details = {
//   name: "vw",
//   my: 10,
//   safety: true,
// };

// const vehicles=(cars: Details)=>{
//     return cars.safety
// }
// vehicles(cars)

// ----------------------------------------

// const carDetails = (x:{carName:string; price:number}) =>{

//     return x.carName
// }
// carDetails({carName:"Touareg", price:120_000})

// ----------------------------------------

// type Details = {
//   name: string;
//   age?: number | string;
//   result?: boolean;
//   getName?: () => void;
// };

// let userName: Details = {
//     name:"anu",
//     age:40,
//     result:true,
// }

// const getUser = (userName: Details): string | number | undefined=>{
//     return userName.age
// }
// // if nothing return then : void  -  const getUser = (user:details): void {}

// getUser(userName)

// ----------------------------------------
// Named types
// ----------------------------------------

// type Status = "pending" | "resolved" | "rejected";
// // let currentStatus: Status = "rejected"

// let currentStatus:Status='rejected'
