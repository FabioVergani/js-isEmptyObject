function isEmptyObject(o){
 let i=true;
 for(i in o){i=false;break;};
 return i;
};
//
//function isEmptyObject(o){let i=true;for(i in o){i=false;break;};return i;};
//
console.log(isEmptyObject({}));//true
console.log(isEmptyObject(window));//false
