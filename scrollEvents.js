console.log('it works!!');

//  grab elements needed
const terms = document.querySelector('.terms-and-conditions');
const btn = document.querySelector('.accept');


function watchTerms(payload){
    //remove disabled 
    if((payload[0].intersectionRatio) == 1)
    btn.disabled = false;
    else{
        btn.disabled = true;
    }

    ob.unobserve(terms.lastElementChild);
}

//  watch the element
const ob = new IntersectionObserver(watchTerms,{
    root:terms,
    threshold:1
});

//  observes given element
ob.observe(terms.lastElementChild);

