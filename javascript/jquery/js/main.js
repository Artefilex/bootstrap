// external js kullanılıyorsa document ready kullanmamız lazım 

// $(document).ready(()=>{
//     $('button').click(() => {
//         // $("#jquery").hide()
//         $(".blabla").css("color", "red" )
//         //   $("p").hide()
//        })
       
//     //  $(":button").click()   tüm buttonları secer 
//     // $(":checkbox") tüm checkboxlar
//     //  $(":header") tüm h etşketlerini secer 
//     // $(":empty") boş olan divleri secer 
//     // :first :last 
//     // :input
//     // :checked :password :reset :odd :even :focus : image 
//     //  : contains()  $("p:contains(deneme))
//     //  :has()
//     // :not()

//     //  , ile bircok seyi ayırıp aynı seyleri verebiliyoryz 
// });

$(document).ready(()=>{
    $("body").css("background" , "rgb(156,156,156)")
    $("table").css({"background" : "black", "color": "white" })
    let objCss = {
        "backgound": "black",
        "color": "white",
        "width": "75%",
        "margin": "auto",
        "margin-top": "1rem"
    }
    
    $("table").css(objCss)
        $("input").focus(function() {
            $(this).addClass("focused");
        });

        $("input").blur(function() {
            $(this).removeClass("focused");
        });

   
})
