// let h1=document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function (){
//             h1.style.color=color;
//             console.log("Color ",color," is Done!")
//             resolve("Color Chnages!!!!!!")
//         },delay);
//     });
// }
// // changecolor("red",2000).then (()=>{
// //     console.log("Red was Added!");
// //     return changecolor("blue",2000);
// // }).then(()=>{
// //     console.log("Bluw was Completed!");
// //     return changecolor("green",2000);
// // }).then(()=>{
// //     console.log("Green is Done!!");
// // })
// async function demo(){
//     await changecolor("red",2000);
//     await changecolor("blue",2000);
//     await changecolor("purple",2000);
//     await changecolor("yellow",2000);
//     await changecolor("green",2000);
// }
// let api="https://catfact.ninja/fact";

// fetch(api)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1= ",data.fact);
//     return fetch(api);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data 2= ",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error - ",err);
// });
// let req="https://catfact.ninja/fact";

// let url="https://dog.ceo/api/breeds/image/random";

// let btn=document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     console.log("Button was clicked!!!!");
//     let ans=await getreq();
    
//     let p=document.querySelector("#fact");
//     p.setAttribute("src",ans);
//     console.log(ans);
// })

// async function getreq(){
//     try{
//         let res=await axios.get(url);
//         console.log("Data1 is : ",res.data.fact);
//         ans = res.data.message;
        
//         return ans;

//     }catch(e){
//         console.log("Error is : ",e);
//     }
// }
let url="http://universities.hipolabs.com/search?name=";

// let country="nepal";

async function getcolleges(country){
    try{
        let res =await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }catch(e){
        console.log("Error is ",e);
    }
}
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let ans =await getcolleges(country);
    console.log(ans);
    show(ans);
    // let p=document.querySelector("#result");
    // p.innerText=ans;
})

function show(ans){
    let list =document.querySelector("#result");
    list.innerText=" ";
    for(i of ans){
        console.log(i.name);
        let li=document.createElement("li");
        li.innerText=i.name;
        list.appendChild(li);
    }
    
}