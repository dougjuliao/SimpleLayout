"use strict";
const removeClass = (item,classe) => {
    document.querySelectorAll(item).forEach((vl) => {
        vl.classList.remove(classe);
    });
};
const addClass = (conf) => {
    document.querySelectorAll(conf.item).forEach((vl,i) => {
        vl[conf.parent][0].addEventListener('click',function(ev){
            removeClass(conf.content,conf.classe);
            removeClass(conf.item,'active');
            document.getElementById(this.dataset.href).classList.add(conf.classe);
            this.parentNode.classList.add('active');
        });
    });
};
let confContent = {
    item:'.navigation-li',
    content:'.content',
    parent:'childNodes',
    classe:'show'
};
addClass(confContent);