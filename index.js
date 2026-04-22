function changeReact()
{
   let rec = document.querySelector("p");
   let img1 = document.querySelector("img");
   let div = document.querySelector(".d");
   rec.innerText="I am React";
   img1.src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png";
   div.style.backgroundColor="lightblue";
}

function changeAngular()
{
    let ang = document.querySelector("p");
    let img2 = document.querySelector("img");
    let div = document.querySelector(".d");
    ang.innerText="I am Angular";
    img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSVsyTE3Rq2DeKnZ9DvrUCTjEv6k0NTDNvw&s";
    div.style.backgroundColor="red";
}