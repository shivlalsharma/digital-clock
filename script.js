const time = document.getElementById('time');

const displayTime = ()=>{
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let session = 'PM';

    if(h>=12){
        session = 'PM';
    }
    else{
        session = 'AM';
    }

    if(h>12){
        h = h-12;
    }

    h = h < 10 ? '0'+h:h;
    m = m < 10 ? '0'+m:m;
    s = s < 10 ? '0'+s:s;

    const display = h + ' : '+ m + ' : ' + s + ' ' + session ;
    time.innerText = display;
}

setInterval(displayTime,1000);