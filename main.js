const dynamictext = document.querySelector(".name2 ")
const words =["Front end", "Freelancer","Programmer","Designer"];
let wordindex =0;
let charindex =0;
let isdeleting =false;
const typeEffect = () => {
    const currentword = words[wordindex];
    const currentchar = currentword.substring(0,charindex);
    dynamictext.textContent= currentchar;
    if(!isdeleting && charindex < currentword.length){
        charindex++;
        setTimeout(typeEffect,200);
    } else if(isdeleting && charindex >0){
      charindex--;
      setTimeout(typeEffect,100);
    }else{
        isdeleting =!isdeleting;
        wordindex =!isdeleting? (wordindex +1) % words.length : wordindex;
        setTimeout(typeEffect,1200);
    }
    
}

typeEffect();