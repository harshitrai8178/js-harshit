// stack (primitive datatype), heap(non primitive)
let myname="harshit"
let anothername=myname
anothername = "rai"
console.log(myname);
console.log(anothername);

let userone={
    email:"abc@gmail.com",
    upi:"abc@ybl"
}
console.log(userone)
let usertwo=userone
usertwo.email="xyz@gmail.com"

console.log(userone.email);
console.log(usertwo.email);