// $(document).ready(()=>{
//   $("#park").attr({"width" : "500px" , "height":"30rem"})
//   $("p:first").html("val val val")
//   $("form").submit((e)=>{
//     e.preventDefault()
//     let iValue = $("#name").val()
//     let sValue = $("#surname").val()
//    if(iValue !== null && sValue !== null){
//     $("#tagOfP").text( iValue + " " + sValue)
//    }
//    $("#name" ).val("")
//    $("#surname").val("")
// })
// })
//  val( ) valuyu almak
//  show() hide() = animasyonsuz fade() slide( animasyınlu)
//  stop()  durdurmak animate()   toogle() düz ters
// attr() for img
//  fadeIn() fadeOut() fadetoggle( )fadeto()
// slidedown slideup slidetoggle
// animate()


$(document).ready(() => {
  $("#show").click(() => {
    $("#aloha").show(2000);
  });
  $("#hide").click(() => {
    $("#aloha").hide(2000);
  });
  $("#fade").click(() => {
    $("#aloha").fadeIn("slow");
  });
  $("#slide").click(() => {
    $("#aloha").slideDown(1000);
  });
  $("#animate").click(() => {
    $("#aloha").animate({
      width: 100,
      height: 200,
      opacity: 0.6,
      left: 500,
      right: 10,
    });
  });
  $("#hello").click(() => {
    $("#art").animate({
      width: "+=10"
    }, () => {
      if ($("#art").css("width") === "350") {
        alert("It sucks!");
      }
    });
  });
  $("#slideUp").click(()=>{
   $("p").slideUp(1000).delay(200).fadeIn(1000)
  })
  $("#slideUp").hover(()=>{
    $("#slideUp").css({"color":"blue", "background":"white" })
  },()=>{
    $("#slideUp").css({"color":"white", "background":"blue" })
  })
  $("#onTag").on("click", function() {
    // Olay gerçekleştiğinde yapılacak işlemler
    alert("Button clicked!");

})

});

$(()=>{
  $(document).mousemove((e)=>{
    $("#moveTag").text(e.pageX + " "+ e.pageY)
  })
})
// delay gecikme 