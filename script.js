const container=document.getElementById("container");
const yes=document.getElementById("yesbtn");
const no=document.getElementById("nobtn");

const containerRect = container.getBoundingClientRect();
const noBtnRect= no.getBoundingClientRect();

no.addEventListener("mouseover",() => {
   const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
   const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;
   no.style.left= i + 'px';
   no.style.top= j + 'px';
   no.style.position= 'absolute';
});

yes.addEventListener("click", () =>{
    location.href = "yeshomepage.html";
});