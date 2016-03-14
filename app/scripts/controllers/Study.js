   var num,num1;
    var str='String sentensis'//Работа со строками~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var obj={};
    console.log(Math.random(num)*20);
    console.log(Math.random(num));
   num1=function(min,max){
     return (Math.random()*(max-min)+min); 
 }
 console.log(num1(-10,30));
 console.log(num1(-100,100));
    console.log(Math.PI);
    console.log(str.substring(9,6));
    console.log(str.slice(-7));
    console.log(str.replace('String','Number'));
    console.log(str.indexOf('se'));
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

//Date ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var TimeNow=(Date.now());
console.log(TimeNow);
var _date =new Date();
var _date1 =new Date(2017,4,18,20,45);
console.log(_date);
console.log(_date1);
console.log(_date.getMilliseconds()+'ms');
console.log(_date.getHours()+'h');
console.log(_date.getMinutes()+'m');
// Регулярные выражения RegEx /s/-find token,/\s/-find probel...см.Regexpert.com~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .exec-поиск совпадений
var myre1=/a(b+)(c*)/gi,
myre2=/[dea]/gi;
var myar1=myre1.exec("deaabcbdeAbcdeabcde"),
myar2=myre2.exec("dea abc bde Abc de abc de");
console.log(myre1.lastIndex);
console.log(myar1.input);
console.log(myar1);
console.log(myar2);
console.log(myar2[0]);
console.log(myar2[1]);
console.log(myar2[2]);
//.replace(шило,на мыло) - замена если есть 
var str1="This is test 1.2.3";
var reg1=/test/g;//
var reg_str=str1.replace(    
reg1,function(t){
  t="rest";
  return t;
}
);
console.log(reg_str);
console.log(reg_str[0]);console.log(reg_str[1]);console.log(reg_str[2]);console.log(reg_str[3]);console.log(reg_str[4]);console.log(reg_str[5]);
console.log(reg_str.length);
//.match(regexp) 
var str5="abcdefgh 1.2.3";
var re=/[a-z]/gi;
var re1=/[abc]|(\d+(\.)*)/gi;// /[abc]-по одному a,b,c
var result=str5.match(re);
var result1=str5.match(re1);
console.log(result);
console.log(result1);
console.log(result1.length);

// bool~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(Boolean(''));
console.log(Boolean(!''));
console.log(Boolean('sdfs'));
console.log(Boolean(obj));
// 
String(2345);
console.log(typeof String(2345));

Number('12345');
console.log(Number('12345'));
Boolean(2345);
console.log(Boolean(12345));
// 
console.log(typeof (213 + '')); //быстро в строку
console.log(typeof (+ '213')); //быстро в число
console.log(!!'213'); //быстро в bool
// 
console.log(parseInt("199px")); //Забор только числа метод
console.log(parseFloat("19.657px")); //Забор только числа метод
//JSON parse stringify~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var object1={
    a:"php",
    b:"javascript",
    c:"ajax"
}
var prs=JSON.stringify(object1);
var h=JSON.parse(prs);
console.log(prs);
console.log(h);
// Объекты~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var obj1={
	test:'text',
	xyz:'axes',
	func:function(){
console.log(this.test);//тоже самое obj1.test
}
};
console.log(obj1.test);
console.log(obj1.func);

var obj2=obj1;
obj1.set='num';
obj1.test='Изменил text в obj1';
console.log(obj1);
console.log(obj2.test);
obj1.func();
//Массивы~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var arr=[1,2,'str',{}];//Литерал представление массива
var arr1=new Array(1,2,'str',{});
//Фильтр для массива
var arr2=["First","Second","Third"];
var filtered=arr2.filter(function(e){
// Идентификация массива str.indexOf(searchValue, fromIndex)   fromIndex поиск от 0 до -1
console.log(e.indexOf('x'));
  return e.indexOf('o') ===-1;
})
console.log(filtered);

console.log(arr);
console.log(arr1);
//Достать переменные из массива
console.log(arr[2]);
console.log(arr1[2]);
//добавить в массив
arr[6999]='four';
console.log(arr);
//длина массива
console.log(arr.length);
arr.length;
//Удаление элемента
delete arr[1];//или без дырки
arr.splice(1,1);
// Maтрица
arr2=[
[1,2,3],[4,5,6],[7,8,9]
];
console.log(arr2[1][1]);
//Методы массивов 
var arr3=arr.concat(arr2);//соединение 2х массивов
console.log(arr3);
// Добавляет в конец элемент массива
arr.push('new');
arr.unshift('first')// Добавляет в начало элемент массива
console.log(arr);
//Удаление в конеце элемента массива
arr.pop();
// Удаляет в начале элемент массива
arr.shift();
//Reverse массива 
var reverseArr=arr.reverse();
console.log(reverseArr);
//Циклы~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
obj5={
  prop1:'one',
  prop2:'two'
}
var set1;//пустая переменная доступ к св-вам объекта obj5
for (set1 in obj5 ){
  console.log(set1 +': '+ obj5.prop1);
}
//Функции~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Декларированные ф-ции Cтандартные
function funcDec(a,b){
  
  return a+b;
}
console.log(funcDec(3,5));

function func1(){
 function example(){
  return 'one'
}

return example();

function example(){
  return 'two'
}

};


// Литерал ф-ции~~~~~~~~~~~~~~~~~~~~~~~~~~
var funcExp =function (a,b){
  return a+b;
}
console.log(funcExp(3,5));

function func2(){
  var example= function (){
    return 'one'
  }

  return example() ;

  var example= function (){
    return 'two'
  }

};
// Отличие 2х ф-ций
console.log(func1());
console.log(func2());

// Ф-ции обратного вызова

var res=function (callback){
  var name='Max';
  return callback(name);

}
// Вызываем и Создаем ф-цию вывода c произвольной переменной n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(res(function(n){
  return ('Hello' +':'+ n);
}));
//Ф-ция в ф-ции вызов
var func4=function(){
  return function (){
    console.log('Hello Max');
  };
}; 

func4()();

//Cамовызов анонимной ф-ции (закрытой)c внешними переменными~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var c=25;
var d=23;
;(function(){
  console.log('Hello anonim func');
  console.log(c,d);
})(c,d);
// Область видимости переменных scope~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var k=5;
var first=function(){
  console.log(k);
  var k=7;
  console.log(k);
  var second=function(){
    console.log(k);
    // var k=15;
    console.log(k);
  }
  second();
};
first();
 // DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 var elem=document.getElementsByTagName("p");//<p></p>
 var elem1=document.getElementById("test");//<p id="test"></p>
 var elem2=document.getElementsByClassName("first");//<p class="first"></p>
 var Selector1=document.querySelector("p");//

 console.log(elem2);
 console.log(Selector1);

 for (var i=0,len=elem.length;i<len;i++){
  console.log(elem[i].tagName);
    console.log(elem[i].parentNode);//Имя узла родителя
     console.log(elem[i].nodeType);//1
     
   }
//Timers  delay!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
;(function(){
 var delay=5000;
 var i=0; 

 var start =function(){
  console.log('Timer start!!');
    // var elem=document.getElementsByClassName('first');
    var elem=document.getElementById('circle');
    var bot=elem.offsetTop;
    console.log(i);

    if (i<10){
      setTimeout(start,delay);
      elem.style.top=bot + 5 + 'px';
      i++;

    }
// console.log(i);
}
setTimeout(start,1000);
})();

// События изменение цвета~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){

  var ed=document.getElementById('square');

  ed.onmouseover=function(){
    // alert('ewueruw');
    var t=setTimeout(onmouseover,3000);
    if(t){
        // alert('3000');
        this.style.backgroundColor="blue";
      }
      else {
       alert('0');
       this.style.backgroundColor="red";
     }
     
     
   }

   ed.onclick=function(){
// alert('ewueruw');
this.style.backgroundColor="yellow";    

}

})();
// Событие изменение дня и ночи~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){
  var buttons=document.getElementsByTagName('button');
  console.log(buttons);
  for (var i=0;i<buttons.length;i++ ){
    // console.log(buttons[i]);
    buttons[i].onclick=function(){

  // alert('кнопка нажата');
  if (this.id==='day'){
    // console.log(buttons[i].id);
    // alert('DAY');
     // document.getElementById()="day";
     document.body.className ="day";

   }
   else if (this.id==='night'){
    // alert('NIGHT');
     // console.log(buttons[i].id);
     document.body.className ="night";
    // document.getElementById()="night";
  }
}
}

// var v=document.getElementsByClassName("day");
// var v=document.getElementById("test_day");
// var b1=document.getElementById("day");
// var b2=document.getElementById("night");

// b1.onclick=function(){

// alert ("day");
// v.style.backgroundColor="black";

// }
// b2.onclick=function(){

// alert ("night");
// v.style.backgroundColor="red";

// }
// [1,2,3].forEach(console.log());
var o = {x:1,y:{z:3}};//объект
var a = [o,[4,99],[5,6]]; //массив
console.log(o.x);//=>1
console.log(a[1]["0"]);//=>99
console.log(a[0].y);//=>объект о св-во у=>{z:3}
console.log(a[0].y.z);//=>объект о св-во у.z=>3

//Побитовый сдвиг~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var bit=0x12ff,bit1=0x00ff,result,result1;
result=bit<<1;
result1=bit | bit1;
result2=bit & bit1;
var r=parseInt(0x12ff);

console.log(result);
console.log(result1);
console.log(result2);
console.log(r);

})();
//Циклы do{}while~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){
  var i=0,j=0,k=0,m;
  var arr=[25,12,56,99,1234,-100,199,87,15,999];
  do{
    m=arr[i];    
   // console.log(arr[0]);  
   console.log(i);  
   console.log(arr[i]);
// console.log(m);

i++;
}while (i<arr.length);
//Циклы while

while (j<arr.length){
  console.log(arr[j]);
  j++;
}
//Циклы доступ к св-вам объекта o
var o={x:1,y:3,z:5},s;

for (s in o){
console.log(s +':'+o[s]);//выводит x:1,y:3,z:5
console.log(s);// 
}
// Инстр-ции Break,Continue,Return~~~~~~~~~~~~~~~~~~
var mas=[1,2,3,4,5,6,7,8];
// var mas=[];
var success=false;
//метка finish_cicle 
finish_cicle: if(mas){

  for (var l=0,len=mas.length;l<len;l++){
   var _l=mas[l];
   console.log(l);
   console.log(_l);
   if(_l>8){      
    console.log('Break is Work!!');
    break finish_cicle;
  }
  for (var c=0,len1=_l.length;c<len1;c++){
    var _c=_l[c];
    console.log(_c);
    console.log(_l);
    if(_c==8){      
      console.log('Break is Work!!');
      break finish_cicle;
    }
  }
}
success=true;
console.log(success);
}
// Continue~~~~~~~~~~~~~~~~~~~
var u=0,q=30;
console.log(u);
while(u<10){
  u++;
  console.log(u);
  timeout: while(q>11){
    q-=1;
    console.log(q);
    if (q%2){
    // debugger//Отладчик в if~~~~~~~~~~~~~~~~~~~~~~~~~~~
    console.log(q+':не четное');
    continue timeout;
  }

}
console.log(u);
}


})();
//ООП~~~~for Jaavscript методы для прототипа записывает в объект св-ва~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){
  function point(x,y){
    this.x=x;
    this.y=y;
  }

  var r,v;
  console.log(r);
//Метод r
point.prototype.r=function(){
  console.log(Math.sqrt(this.x*this.x));    
};
v=new point(4,5);
v.r();
// ООП ~~~~for Jaavscript функциональный стиль Записывает в объект методы и св-ва~~~~~~~~~~~~~~~~~~~~~
function func1(name){
  this.name=function(){
    console.log(name);
  }
};
var ob=new func1('max');
ob.name();

})();
//ОПП при помощи наследования Object.create(Person)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function(){
  var Person={
    constructor:function(name,age,gender){
      this.name=name;
      this.age=age;
      this.gender=gender;
      return this;
    },
    greet:function(){
      console.log('Hi my name is :'+this.name);
    }
  };

  var firstname,secondname,thirdname;
  firstname=Object.create(Person).constructor("max",35,"male");
  secondname=Object.create(Person).constructor("ira",38,"famale");
  thirdname=Object.create(Person).constructor("mama",59,"female");
  console.log(firstname.name);
  console.log(secondname.age);
  console.log(thirdname.gender);
  firstname.greet();
  secondname.greet();
  thirdname.greet();

//добавим новый класс с наследованием св-в Person и добавлением нового св-ва~~~~~~~Джедай #20~~~~~~~~~~~~~~~
var Webdevelop=Object.create(Person);
Webdevelop.constructor=function(name,age,gender,skills){

  Person.constructor.apply(this,arguments);
  this.skills=skills || [];
  return this;
}
//Добавим еще 1 метод в Webdevelop и вызовим его
Webdevelop.develop=function(){
  console.log("Working...");
}

var developer=Object.create(Webdevelop).constructor("max",35,"male",["html","css","js","php","mysql"]);

console.log(developer.skills);
Webdevelop.develop();

})();
(function(){
//ОПП Джедай #21~~~~~~~~~~~~~Наследование через new и prototype~~~~~~~~~~~~~~~~~~~~~~~~~~
//Суперкласс Person(Person-ф-ция коструктор с большой буквы)
var Person=function(name){
  this.name=name;
  return this;
}
var devel;
//Прототипу можно присваивать любые Методы и св-ва,они будут доступны всем экземплярам объекта
Person.prototype.greet=function(){
  console.log("My name is:"+this.name);
}
//новый класс на основе суперкласса Person
var Web=function(name,skills){

  //apply присваивает явным образом this ф-ции Person(Объекту)  

  // Person.call(this,arguments);//синтаксис Person.call(Person,"max","javascript") значения аргументов ф-ции прописываем через запятую
  Person.apply(this,arguments);//или Person.apply(Person,["max","php"]);или массивом
  
  this.skills=skills||[];
// Person.call(this);
return this;
}

console.log(Web.prototype);
// Все объекты имеют св-ва constructor
console.log(Person.constructor);

var test=Object.create(Web).constructor("ira",["python","rybi"]);
console.log(test.name);
console.log(test.skills);
//наследование на другой прототип Джедай 21 Web.constructor из Person.constructor
Web.prototype=Object.create(Person.prototype);
Web.prototype.constructor=Web;

devel=new Web("ira",["python","rybi","nodejs"]);
//Проверка на принадлежность к классу
console.log(devel instanceof Person);

console.log(devel.name);
})();
// Урок №22 Джедай 
(function(){
  var Vec2=function(x,y){
    this.x=x;
    this.y=y;
    return this;
  }
  Vec2.prototype.add=function(vec){
    this.x +=vec.x;
    this.y +=vec.y;
  
    return this;
  }

Vec2.prototype.multScalar=function(scalar){
this.x *=scalar;
this.y *=scalar;
return this;
}

  var world={
    gravity:new Vec2(0,1),
    airResistance: .9,
    wind:new Vec2(10,1)
  }

  var obj={
    position:new Vec2(20,40),
    speed:new Vec2(1,5),
    Update:function(){
      world.gravity
      .add(world.airResistance);
  this.position//или this.position
  .add(this.speed)
  .multScalar(world.airResistance)   ; 
  console.log(this.position.add(this.speed));
  return this.position.add(this.speed);
}

}
console.log(obj.position);
console.log(obj.Update());
console.log(obj.position);
console.log(obj.speed);
console.log(world.gravity);
console.log(obj.Update());
console.log(obj.Update());
console.log(obj.Update());
console.log(obj.position);
console.log(this);
console.log(obj.position);
// console.log(obj.position.add());
})();
// создание элементов изменение св-в
(function(){
    // reg.login=undefined;
    var b=document.getElementById('but'),
    s=document.getElementById('out');
    console.log(reg.login);
    if(reg.login !=undefined) {
      b.style.opacity="1";
      b.style.backgroundColor="green";
      b.style.fontSize="30px";
    }
    else {
      b.style.backgroundColor="grey";

    }

    console.log('Funct work');
    b.onclick=function(){
      alert('s start');
      s.style.backgroundColor="yellow";
      s.style.fontSize="40px";
      
    }
  })();

