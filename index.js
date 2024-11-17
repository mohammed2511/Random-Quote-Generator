




function quote(){

    var x =[  "“Without music, life would be a mistake.”"  ,  "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“You only live once, but if you do it right, once is enough.”" ];
var y =[ "― Friedrich Nietzsche, Twilight of the Idols"  , "― Frank Zappa"  , "― Marcus Tullius Cicero" , "― Mae West"];


    var num = Math.floor( Math.random() *  x.length );


    document.getElementById("demo").innerHTML= x[num]
    document.getElementById("demo2").innerHTML=  y[num]
}

