let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
function generador (who,action,what,when){
    return excuse = who[Math.floor(Math.random()*3)]+" "+action[Math.floor(Math.random()*3)]+" "+what[Math.floor(Math.random()*2)]+" "+when[Math.floor(Math.random()*4)];
}
let excusa=(generador(who,action,what,when));
document.querySelector("#excuse").innerHTML = excusa;