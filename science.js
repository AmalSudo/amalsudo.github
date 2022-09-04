const dateday = new Date();
let textDay = dateday.toDateString();
document.getElementById("daydate").innerHTML = textDay;
const datetime = new Date();
let textTime = datetime.toLocaleTimeString();
document.getElementById("timedate").innerHTML = textTime;

const everything= document.getElementById('whole');

function myfunction() {

let i=0;

while (i<21){
  
    
    i++;
    let container= document.createElement('div');
    container.classList.add('container');
    
    
    let header= document.createElement('h3');
    header.classList.add('header');
    
    let parg= document.createElement('p');
    parg.classList.add('parph');
    
    let date1= document.createElement('p');
    date1.classList.add('date');

    let image= document.createElement('p');
    image.classList.add('image');

    let read_More= document.createElement('p');
    read_More.classList.add('readmore');

    everything.appendChild(container);
    container.appendChild(header);
    container.appendChild(parg);
    container.appendChild(date1);
    container.appendChild(read_More);
    container.appendChild(image);                   

fetch("https://inshorts.deta.dev/news?category=science")
    .then(result => result.json())
    .then(news =>{
        header.innerHTML= news.data[i].title;
        parg.innerHTML= news.data[i].content;
        date1.innerHTML= news.data[i].date;
        read_More.innerHTML= "<a href=' " + news.data[i].readMoreUrl+ " ' >read more...</a>";
        image.innerHTML="<img src=' " + news.data[i].imageUrl + " ' />";
    })
    }};

