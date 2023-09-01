const floatingButton = document.getElementById("myFloatingButton");

function handleScroll(){
    // show or hide the button, svg or  the arrow based on scroll position
    window.addEventListener("scroll", ()=>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            floatingButton.style.visibility = "visible";
        } else {
            if (floatingButton.style.visibility !== "hidden") {
                floatingButton.style.visibility = "hidden";
            }
            
        }
    });

    floatingButton.addEventListener("click", () => {
        //go to the top of the page 
        document.body.scrollTop = 0 ;
        document.documentElement.scrollTop= 0;
    })
}

export default handleScroll