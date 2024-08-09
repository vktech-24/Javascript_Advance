 class mystatic {
    static myname = "vimal"
    static mystaticmethod(){
        console.log('hi this is vimal')
    }
 }

// exp:- utility class

 mystatic.mystaticmethod();

 console.log(mystatic.myname)

 class mathutil{
    static add(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiple(a,b){
        return a*b;
    }
    static devide(a,b){
        return a/b;
    }
 }

 console.log(mathutil.add(10,20));
 console.log(mathutil.subtract(10,20));
 console.log(mathutil.multiple(10,20));
 console.log(mathutil.devide(10,20));


