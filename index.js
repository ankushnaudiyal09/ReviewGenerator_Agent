const GOOGLE_REVIEW_URL =
"https://g.page/r/CVvQqkZzepFIEBE/review";

const reviews = {
5:[
"Excellent dental clinic in Dehradun with highly professional dentists and friendly staff. Highly recommended.",
"One of the best dentists in Dehradun. Professional treatment and excellent patient care.",
"Outstanding dental treatment experience. Clean clinic and highly skilled dentist.",
"Highly recommended dental clinic in Dehradun for oral care and dental treatment.",
"Professional staff, modern clinic and exceptional dental consultation.",
"Best dental clinic in Dehradun. Great service and excellent treatment."
],
4:[
"Good dental clinic in Dehradun with experienced dentists and helpful staff.",
"Professional treatment and good overall experience.",
"Clean clinic and quality dental care.",
"Friendly staff and smooth treatment process.",
"Good dental consultation and patient support.",
"Reliable dental services in Dehradun."
],
3:[
"Overall satisfactory dental treatment experience.",
"Good patient care and cooperative staff.",
"Decent dental services in Dehradun.",
"Professional consultation and support.",
"Reasonable experience overall.",
"Clinic provides satisfactory dental care."
],
2:[
"Experience could have been better.",
"Some areas of treatment need improvement.",
"Expected more detailed consultation.",
"Average patient experience.",
"Service quality can improve.",
"Communication could be better."
],
1:[
"Not fully satisfied with the experience.",
"Needs improvement in patient management.",
"Expected better treatment experience.",
"Could improve communication and support.",
"Service quality needs improvement.",
"Below expectations overall."
]
};

let selectedReview = null;

const stars = document.querySelectorAll(".star");

stars.forEach(star=>{

star.addEventListener("click",()=>{

const rating = Number(star.dataset.rating);

stars.forEach(s=>{

s.classList.remove("active");

if(Number(s.dataset.rating)<=rating){
s.classList.add("active");
}

});

renderReviews(rating);

});

});

function renderReviews(rating){

const section =
document.getElementById("reviewSection");

section.style.display="block";

const list =
document.getElementById("reviewList");

list.innerHTML="";

document.getElementById("submitBtn")
.disabled=true;

reviews[rating].forEach(review=>{

const div =
document.createElement("div");

div.className="review-card";

div.innerHTML=`<p>${review}</p>`;

div.onclick=()=>{

document
.querySelectorAll(".review-card")
.forEach(x=>x.classList.remove("selected"));

div.classList.add("selected");

selectedReview=review;

document.getElementById("submitBtn")
.disabled=false;

};

list.appendChild(div);

});

}

function showToast(msg){

const toast =
document.getElementById("toast");

toast.innerText=msg;

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},3000);

}

async function submitReview(){

if(!selectedReview){
return;
}

document.getElementById("loader")
.style.display="flex";

try{

await navigator.clipboard.writeText(
selectedReview
);

setTimeout(()=>{

window.location.href =
GOOGLE_REVIEW_URL;

},1500);

}catch(e){

document.getElementById("loader")
.style.display="none";

showToast("Unable to copy review");

}

}