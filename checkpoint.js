// 
//
// var checkpointFirst = document.getElementById("checkpoint-first");
//
// var checkpoint = document.getElementsByClassName("checkpoint");
//
// window.onload = function () {
//
//   checkpointFirst.classList = "checkpoint-first active";
//
// }
//
// window.onscroll = function(){
//   /*=== use first checkpoint if at the very top of the page ===*/
//
//   var checkpointFirstBottom = checkpointFirst.offsetTop + checkpointFirst.clientHeight;
//
//   if (window.scrollY < checkpointFirstBottom) {
//
//     console.log("first offsettop" , checkpointFirstBottom);
//     checkpointFirst.classList = "checkpoint-first active";
//
//   }else{
//
//     checkpointFirst.classList = "checkpoint-first";
//
//   }
//   /*=== ===*/
//   for (var i = 0; i < checkpoint.length; i++) {
//
//     var checkpointHeight = checkpoint[i].offsetTop;
//
//     console.log("checkpoint height" , checkpointHeight);
//
//     var checkpointBottom = checkpoint[i].offsetTop + (checkpoint[i].clientHeight);
//
//     if (window.scrollY > checkpointHeight && window.scrollY < checkpointBottom) {
//
//       checkpoint[i].classList = "checkpoint active";
//
//     }else{
//
//       checkpoint[i].classList = "checkpoint";
//
//     }
//
//   }
// }
