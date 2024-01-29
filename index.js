function introduction(name){
   var a = `Hi, my name is ${name}.`;
   console.log(a);
   return a;
}
introduction(name);

function introductionWithLanguage(name,language){
   var b = `Hi, my name is ${name} and I am learning to program in ${language}.`;
   console.log(b);
   return b;
}
introductionWithLanguage(name, language);

function introductionWithLanguageOptional(name,language="JavaScript"){
   var b = `Hi, my name is ${name} and I am learning to program in ${language}.`;
   console.log(b);
   return b;
}
introductionWithLanguage(name, language);