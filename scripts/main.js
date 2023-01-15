const button = document.querySelector("button");
const main = document.querySelector("body");
const h1 = document.querySelector("h1");

var elts = document.getElementsByTagName('p');

elts[0].style.color = 'blue';
elts[1].style.color = 'green';
elts[2].style.color = 'red';


button.addEventListener("click", function() {
  
if (main.classList.contains("clair")) {
    main.classList.add("sombre");
    main.classList.remove("clair");
    button.innerText = "mode clair 🌞";
  } 

else {
    main.classList.add("clair");
    main.classList.remove("sombre");
    button.innerText = "mode sombre 🌒";
    }
});



    


for(let i = 0 ; i < 10 ; ++i) 
{   
    document.write("java");

    if(i === 5)
        continue;
    
    document.write('script ');
}



