// 1 . fait
//  2 .
 let maBoolean = true
//  3.
 let monArray=[]
//   4.
let monObjet ={}
// 5.
let monString = ""
// 6.
 let monInt = 52
//  7.
let objet={
    nom: "",
    appeller(){
        return objet.nom
    }
}
objet.appeller()
// 8.
 let myFonct=(nom , prenom)=>{

 }
//  9.

if(monInt < 8){
    console.log("non , il est plus grand")

}
// 10.
for (let i = 0; i <= 9; i++) {
    console.log(i)
    
}
// 11.

let ladate=new Date()
document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())
console.log(ladate)


// let date={
//     jour : 13,
//     mois : 01,
//     année : 2020
// }

// console.log( jour +"/"+ mois +"/"+ année)

//  12.
let strings="string"
let majAll=()=>{
    console.log(strings.toUpperCase())
}
majAll()
//  13.
let string="string"
let majuscule=()=>{
    console.log(string.charAt(0).toUpperCase() + string.substring(1) + string.charAt(5).toUpperCase())
}
majuscule()
//  14.
let longueur =()=>{
    alert(string.length)
}
longueur()
// 15.
let alea=()=>{
    console.log(Math.floor(Math.random()*100))
}
alea()
// 16.

let chiffre=()=>{

    console.log()
}
chiffre()
// 17.
let valeur=()=>{
    if(typeof monObjet === Object){
        alert("Votre valeur est de type objet")
    }else if (typeof monInt === Number){
        alert("Votre valeur est de type number")
    }else if (typeof monArray === Array){
        alert("Votre valeur est de type array")
    }else if (typeof monBoleean === Boolean){
        alert("Votre valeur est de type boolean")
    }else if (typeof monString === String){
        alert("Votre valeur est de type string")
    }
    
}
valeur()
// 18.
 let object={
     nom : "Zainab",
     age :"3" ,
     modeling(){
         alert("Bonjour " + nom +" tu as " + age +" ans")
     }
 }
 object.modeling()

//  19.
let objet2={
addKey(){
    nom="ok"
    console.log(object)
}
}
addKey()
// 20.
 let carre={
     size:"", 
     borderaspect: "", 
     epaisseur: "",
     couleur: "" , 
     ajout(){
if(this.size.value == "solide" || "dotted"){
    alert("Rentrer une autre valeur")
}else if(this.couleur.value !="red" || "blue"|| "green"){
alert("Entre une autre valeur")
}else if(this.epaisseur.value == false ||  this.size.value== false ){
alert("entre une valeur correct")
}else if(this.epaisseur.value == false && this.size.value == false){
    alert("Entre une valeur correct")
}else{
    
    alert(`votre carré a pour${size} : XX px , boderaspect:`)
}
     }
 }
 ajout()
//   21.
let sect=document.createElement("section")
let h1=document.createElement("h1")
sect.appendChild(h1)
// 22.
sect.setAttribute("id" ,"management")
h1.innerText="Bienvenue"
//  23.
let sousTitre=document.createElement("h3")
sousTitre.innerText="Connexion :"
let input1=document.createElement('input')
input1.innerText="Nom"
let input2 =document.createElement('input')
input2.innerText="Mot de passe"
let input3 =document.createElement('input')
input3.innerText="Retapez Mot de passe"

let btn=document.createElement('button')
btn.innerText="connexion"

btn.addEventListener('click', ()=>{
    if(input2.value == input3.value && input1.value == true){

    }else if(input1.value > 5){
alert("le nom depasse 5 caractére")
    }else if(input2.value <=6){

    }
})