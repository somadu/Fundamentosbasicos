function print(arr){
    arr=[];
    for (var i=1;i<=255;i++){
        arr.push(i);
    }
    return arr;
  }

function inpar(x){
    var sum=0;
    for (var i=1;i<=1000;i++){
        if(i%2===0){
            sum=sum+i;
        }
    }
    return sum;
}

function par(x){
    var sum=0;
    for (var i=1;i<=5000;i++){
        if(i%2>0){
            sum=sum+i;
        }
    }
    return sum;
}

function suma(x){
    var sum=0;
    for (var i=0; i<x.length;i++){
      sum=sum+x[i];
      }
      return sum;
  }
  
function suma(x){
    var sum=0;
    for (var i=0; i<x.length;i++){
        if(sum<0){
            sum=x[i];
        }
    return sum;
    }
}

function mayor(x){
    var sum=0;
    for (var i=0; i<x.length;i++){
        if(sum<x[i]){
            sum=x[i];
        }
    }
  return sum;
}

function avera(x){
    var avg=0;
    for (var i=0; i<x.length;i++){
      avg=avg+x[i];
    }
  return avg/x.length;
}

function impa(x){
    var imp=[];
    for (var i=1; i<50;i++){
      if(i%2>0){
        imp.push(i);
      }
    }
  return imp
}

function mar(x){
    var t=[]
    for (var i=0; i<x.length;i++){
       if(x[i]>y){
          t.push(x[i]);
        }
    }
    return t
}

function cubo(x){
    for (var i=0; i<x.length;i++){
      x[i]=x[i]*x[i];
  }
  return x
}

function rempla(x){
    for (var i=0; i<x.length;i++){
      if(x[i]<0){
        x[i]=0;
      }
  }
  return x
}

function rempla(x){
    var max=0
    var min=0
    var sum=0
      for (var i=0; i<x.length;i++){
        if(max<x[i]){
          max=x[i];
        }
        if(min>x[i]){
          min=x[i];
        }
        sum=sum+x[i]
    }
    var avg=sum/x.length
    return [max,min,avg]
  }

function change(x){
    var temp=x[0];
    x[0] = x[x.length-1];
    x[x.length-1]=temp;
    return x
}

function change(x){
    for( var i=0;i<x.length;i++){
      if(x[i]<0){
        x[i]="Dojo";
      }
    }
    return x
  }

  y=change([1,5,10,-2])
  console.log(y)