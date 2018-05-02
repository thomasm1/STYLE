// get var from inline style
element.style.getPropertyValue("--foo");

// get var from anywhere
getComputedStyle(element).element.style.getPropertyValue("--foo");

// set var on inline style
element.style.setProperty("--foo", 38 + 3 );

//
var root = document.documentElement;
document.addEventListener("mouseover", evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
  
    root.style.setProperty("--mouse-x", x);
    root.style.setProperty("--mouse-y", y);
});
//// SAME THIING ///
/*
<html tomsapp
    style="--mouse-x: [$mouse.x / innerWidth];
           --mouse-y: [$mouse.y / innerHeight];
     ">
<style>
       #mouse.slide {
     background-image: radial-gradient(
       at       50%            50%, 
         at calc(100% * var(--mouse-x)) 50%,
       at calc(100% * var(--mouse-x)) calc(100% * var(--mouse-y)),
       transparent, black); no need to change javascript ... 
       transparent 30%, black 20%);
      }
// again
.iris {
  --look: 0.7;
  cx: calc(25px + 40px * var(--mouse-x));
}
*/