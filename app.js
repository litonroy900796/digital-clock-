let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');
let progress=document.getElementById('progress');

const digitalclock=()=>{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

  
    if(h==0){
        h=12
    }else if(h>12){
        h=h-12
    }
    
    
    if(h<10){
        h='0'+h
    }else if(m<10){
        m='0'+m
    }else if(s<10){
        s='0'+s
    }  
    hour.textContent=h;
    minute.textContent=m;
    second.textContent=s;

    progress.style.width=(s/60)*100 + '%';

}
setInterval(digitalclock,1000)