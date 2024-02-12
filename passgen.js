function passgenerator(length) {
    let lower="abcdefghijklmnopqrstuvwxyz"
    let  upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
    let specialcase=`!@#$%^&*()<>?|\.,{}[]~+-_=`
    let str=""
    let a=Math.floor(0+Math.random()*lower.length)
    let b=Math.floor(0+Math.random()*upper.length)
    let c=Math.floor(0+Math.random()*specialcase.length)
    for (let index = 0; index<length; index++) {
              let randomchoice=Math.floor(Math.random()*3)
              switch (randomchoice) {
                case 0:
                    str += lower[Math.floor(Math.random() * lower.length)];
                    break;
              
              case 1:
                str += upper[Math.floor(Math.random() * upper.length)];
                break
                case 2:
                    str += specialcase[Math.floor(Math.random() * specialcase.length)];
                    break;
              }
    }
    return str
}
a=passgenerator(4)
console.log(a)