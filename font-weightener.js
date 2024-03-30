(function(){

    const MIN_DISTANCE = 200;
    const MIN_FONT_SIZE = 100;
    const MAX_FONT_SIZE = 800;

    const items = document.querySelectorAll("*[font-weightener='true']");

    items.forEach(el => {
        
        let content = el.innerHTML;
        let openBrackets = false;
        let resault = "";
        for (let i = 0; i < content.length; i++) {

            if (content[i] === "<") { openBrackets = true; }
            
            if (!openBrackets && content[i].charCodeAt(0) > 33 && content[i].charCodeAt(0) < 1000) {
                resault += `<span>${content[i]}</span>`;
            }
            else{
                resault += content[i];
            }
            
            if (content[i] === ">") { openBrackets = false; }
            
        }
        el.innerHTML = resault;
        
    });

    let letters = document.querySelectorAll("*[font-weightener='true'] span");
    onmousemove = function(e){
        letters.forEach(letter => {
            
            let distance = Math.sqrt(Math.pow(e.pageX - letter.offsetLeft, 2) + Math.pow(e.pageY - letter.offsetTop, 2));
            
            if (distance < MIN_DISTANCE) {
                letter.style.fontWeight = (MIN_DISTANCE - distance)/MIN_DISTANCE * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE;
            }
            else{
                letter.style.fontWeight = MIN_FONT_SIZE;
            }

        });
    }

})();