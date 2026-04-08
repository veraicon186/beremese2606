document.addEventListener("DOMContentLoaded", () => {

/* ---------- HOST TYPES ---------- */

const guestTypes = {

ceremony: {
content: `
<p>Milí přátelé,</p>

<p>dovolujeme si Vám oznámit, že náš svatební obřad proběhne<br>
<strong>26. června 2026 ve 12.30 h</strong><br>
v kostele svatého Mikuláše na Staroměstském náměstí v Praze.
</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s námi.</p>

<p>Vaši Dana a Petr</p>

<p>Svatební blahopřání nás potěší na adrese<br>
Polská 3, Praha 2 – Vinohrady.</p>
`
},

day: {
content: `
<p>Milí,</p>

<p>dovolujeme si oznámit, že náš svatební obřad proběhne<br>
<strong>26. června 2026 ve 12.30 h</strong><br>
v kostele sv. Mikuláše na Staroměstském náměstí v Praze.</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s námi.</p>


<p>Po skončení obřadu Vás srdečně zveme ke svatebnímu stolu v restauraci<br>
<a href="https://www.google.com/maps/place/Bastion+Prague+Restaurant/@50.0676699,14.4237698,17z/data=!4m10!1m2!2m1!1sBastion,+Na+Hradbách+2,+Praha+2+!3m6!1s0x470b94618f32b977:0xa4d5cc7d807ec82b!8m2!3d50.0678563!4d14.4269151!15sCiBCYXN0aW9uLCBOYSBIcmFkYsOhY2ggMiwgUHJhaGEgMlogIh5iYXN0aW9uIG5hIGhyYWRiw6FjaCAyIHByYWhhIDKSAQpyZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0Vk1sa3lXbXBsUjBweFdtMTRNMUpGT1VOWFJHZ3paVzVHZEUweVl4QULgAQD6AQQIABAs!16s%2Fg%2F1hc4mlwst?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Bastion, Na Hradbách 2, Praha 2</a><br>
od 14.30.
</p>

<p>Prosíme o potvrzení účasti na<br>
<a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a zároveň o zaslání názvu <strong>písně, která by na oslavě neměla chybět.</strong></p>

<p>Vaši Dana a Petr</p>
`
},

evening: {
content: `
<p>Milí,</p>

<p>dovolujeme si oznámit, že náš svatební obřad proběhne<br>
<strong>26. června 2026 ve 12.30 h</strong><br>
v kostele sv. Mikuláše na Staroměstském náměstí v Praze.</p>

<p>Zároveň Vás srdečně zveme na svatební veselí v restauraci<br>
<a href="https://www.google.com/maps/place/Bastion+Prague+Restaurant/@50.0676699,14.4237698,17z/data=!4m10!1m2!2m1!1sBastion,+Na+Hradbách+2,+Praha+2+!3m6!1s0x470b94618f32b977:0xa4d5cc7d807ec82b!8m2!3d50.0678563!4d14.4269151!15sCiBCYXN0aW9uLCBOYSBIcmFkYsOhY2ggMiwgUHJhaGEgMlogIh5iYXN0aW9uIG5hIGhyYWRiw6FjaCAyIHByYWhhIDKSAQpyZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0Vk1sa3lXbXBsUjBweFdtMTRNMUpGT1VOWFJHZ3paVzVHZEUweVl4QULgAQD6AQQIABAs!16s%2Fg%2F1hc4mlwst?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">Bastion, Na Hradbách 2, Praha 2</a><br>
od 18.30.</p>

<p>Prosíme o potvrzení účasti na<br>
<a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a zároveň o zaslání názvu <strong>písně, která by na oslavě neměla chybět.</strong></p>

<p>Vaši Dana a Petr</p>
`
}

};


/* ---------- URL PARAM ---------- */

const params = new URLSearchParams(window.location.search);
let type = params.get("type") || "ceremony";

if(!guestTypes[type]){
type = "ceremony";
}

document.getElementById("guestContent").innerHTML = guestTypes[type].content;


/* ---------- ANIMACE ---------- */

const animation = document.getElementById("animation");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const ripple = document.querySelector(".ripple");

let state = 1;


/* ripple efekt */

function playRipple(){
ripple.classList.remove("animate");
void ripple.offsetWidth;
ripple.classList.add("animate");
}


/* přepnutí karet */

function switchCards(){

if(state === 1){
card1.classList.remove("active");
card2.classList.add("active");
state = 2;
}else{
card2.classList.remove("active");
card1.classList.add("active");
state = 1;
}

}



/* hlavní animace */

function playAnimation(){

playRipple();

setTimeout(() => {
switchCards();
},600);



}


/* první přehrání */

setTimeout(playAnimation,500);


/* kliknutí */

animation.addEventListener("click",playAnimation);

});