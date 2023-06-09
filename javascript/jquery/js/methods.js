// let fx = ()=>{
//     $.fx.off= !$.fx.off
// }
//  bu fx.off degiskenini bir classa id click eventi olarak verince animasyonlarda toogle özelligi görür
// yani çalışıyorsa durdurur calısmıyorsa calıstırır daha dogrusu animasyton yapıları durdurr ya da acar 

// trim()
// index()
// find()


// $(document).ready(()=>{
//     // $("p").after("cnjdjdddj")

//     $("li").click(()=>{
//         // let indis = $(this).index()
//     //   let aftering = $(this).after("<b> bla bla bla  </b>") not work 
//         // alert(indis)
//         //  $("p").text(indis)
//         // alert(aftering)  not work 
//     })
// })



// clone()
// detach() kaldırmak için kullanılır 
// on( )

// $(document).ready(()=>{
//     // $("button").click(()=>{
//     // //   $("p").clone().appendTo("#append")
//     // //    $("p").detach()


//     // })

//     // $("button").on({
//     //     mouseenter:()=>{
//     //         alert("maouseenter")
//     //     },
//     //     mouseleave:()=>{
//     //         alert("mouseleave")
//     //     },
//     //     click:()=>{
//     //         alert("click")
//     //     }
//     // })
// })

// parant() parants() sibling() chidren() find() next() nextAll() nextUtil()  prev() prevAll() prevUtil()


// $(document).ready(()=>{
//     // $("#ptag").parent().css("background" , "black").css("padding","1rem")
//     // $("#ptag").parents().css("background" , "red").css("padding","1rem")
//     // $(".div").children().css("color" , "black").css("padding","1rem")
//     // $("li").siblings().css("color" , "blue").css("padding","1rem")
//     //  $("ul").find("li").css("color" , "black").css("padding","1rem")
//     // $("#orta").next().css("color", "red")
//     // $("#start").nextAll().css("color","blue")
//     // $("#start").nextUntil("#orta").css("color", "red")
//     // $("#orta").prev().css("color", "red")
//     // $("#orta").prevAll().css("color", "red")
//     // $("#end").prevUntil("#orta").css("color", "red")
// })



// fist() ilk , last() son, eq(indis) belirtileni göstrerir, fiter()  not()

$(document).ready(()=>{
   $("li").first().css("color", "blue")
   $("li").last().css("color", "blue")
   $("li").filter("#orta").css("color","red")
   $("li").not("#orta").css("color","blue")
})