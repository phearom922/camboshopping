// const accordionContent = document.querySelectorAll(".accordion-content");

// accordionContent.forEach((item, index) =>{
//     // let span = item.querySelector("span")
//     // span.addEventListener("click", () =>{
//     //     item.classList.toggle("open")
//     // })

//     let header = item.querySelector("header"); //កន្លែងនេះគឺយើងចង់ចុចលើ Header
//     // let title = item.querySelector(".title");
//     //ទើបយើងចាប់យកត្រឹម Header 
//     header.addEventListener("click", ()=>{
//         item.classList.toggle("open");

//         let description = item.querySelector(".description");
//         if(item.classList.contains("open")){  //កន្លែងនេះគឺជាកាឆែកមើល (contains) ទៅលើខ្លាស់
//             //មានន័យថា ប្រសិនបើ .accordion-content មានថែមខ្លាស់ open
//             description.style.height = `${description.scrollHeight}px`;
//             // description.style.height = "60px"; We Can write like this
//             //but can't be scroll text content full
//             item.querySelector("i").classList.replace("fa-plus","fa-minus");

//         }else{
//             description.style.height = "0px";
//             item.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }
//         removeOpen(index);
//     })
//     // // ខាងលើនេះយើងបង្កើត Event Click on Header

//     // console.log(item); //`វានឹងចាប់យក  Element ដែលមានឈ្មោះខ្លាស់ថា .accordion-content
//     // //ហើយវាមានចំនួន 2 item តាម​ File html​ ដែលយើងបានបង្កើតវា
// })

// function removeOpen(index1){
//     accordionContent.forEach((item2 , index2) =>{
//         if(index1 != index2){
//             item2.classList.remove("open");
//             let des = item2.querySelector(".description");
//             des.style.height = "0px";
//             item2.querySelector("i").classList.replace("fa-minus","fa-plus");
//         }
//     })
// }



// ============Method 2=============

const accordionContent = document.querySelectorAll(".accordion-content");


accordionContent.forEach(function(main){
    
    const header = main.querySelector("header");
    
    header.addEventListener("click", function() {
    main.classList.toggle("show-text");
    if(main.classList.contains("show-text")){
        main.querySelector("i").classList.replace("fa-plus","fa-minus");

    }else{
        main.querySelector("i").classList.replace("fa-minus","fa-plus");
    }
   })
})