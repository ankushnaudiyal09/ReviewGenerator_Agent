/* =========================================
   CONFIG
========================================= */

const FIVE_STAR_REVIEWS = [

"One of the best digital marketing agencies in Dehradun. Their SEO services helped improve our Google rankings and generate consistent leads.",

"Set up Digital transformed our online presence through SEO and Google Ads. We started seeing quality enquiries within weeks.",

"Highly recommended digital marketing company in Dehradun. Professional team, transparent reporting, and measurable results.",

"The team helped us grow our business through local SEO and performance marketing. Excellent experience overall.",

"Great agency for lead generation and online marketing. Their strategies delivered real business growth for us.",

"Professional digital marketing experts with strong knowledge of SEO, Meta Ads, and Google Ads.",

"Our website traffic increased significantly after working with Set up Digital. Excellent communication and support.",

"Best digital marketing agency in Dehradun for SEO and lead generation. Highly recommended.",

"Their SEO strategies helped us rank for important local keywords and improve online visibility.",

"Set up Digital delivered outstanding results through Google Ads and conversion optimization.",

"The team is highly professional and understands business growth through digital marketing.",

"We saw a noticeable increase in qualified leads after implementing their marketing strategies.",

"Excellent experience working with Set up Digital. Their attention to detail and reporting is impressive.",

"Great agency for local businesses looking to improve their online presence and lead generation.",

"Their expertise in search engine optimization helped us attract more customers online.",

"Very knowledgeable team with deep understanding of SEO and digital advertising.",

"Set up Digital helped us improve our online visibility and generate quality enquiries consistently.",

"Professional approach, excellent communication, and strong marketing execution.",

"The best digital marketing company we have worked with. Transparent and results-focused.",

"Their Google Ads campaigns generated high-quality leads and improved our return on investment.",

"Excellent support and guidance throughout the project. Highly recommended for digital marketing services.",

"Our business growth improved significantly after partnering with Set up Digital.",

"Reliable, professional, and highly skilled digital marketing team.",

"Their local SEO strategies helped us dominate local search results in our industry.",

"Great experience from start to finish. The team genuinely cares about client success.",

"Highly effective digital marketing solutions with measurable business impact.",

"Their expertise in performance marketing and SEO delivered excellent results.",

"Professional agency with strong focus on lead generation and customer acquisition.",

"We experienced substantial growth in website traffic and online enquiries.",

"Excellent digital marketing services with clear communication and transparent reporting.",

"The team consistently delivered quality work and exceeded expectations.",

"One of the most reliable digital marketing agencies in Dehradun.",

"Their marketing campaigns helped us attract the right audience and improve conversions.",

"Outstanding SEO services and business growth strategies.",

"Set up Digital helped us build a strong online presence and improve brand visibility.",

"Professional, responsive, and highly experienced digital marketing experts.",

"Their lead generation campaigns delivered consistent and high-quality enquiries.",

"Highly recommended for businesses looking to scale through digital marketing.",

"Great results, professional support, and excellent communication throughout the project.",

"Exceptional digital marketing agency in Dehradun. Highly recommended for SEO, Google Ads, and business growth."

];

const FOUR_STAR_REVIEWS = [

"Good experience working with Set up Digital. The team is professional and understands digital marketing well.",

"Set up Digital helped improve our online visibility through SEO and local marketing strategies.",

"The team was responsive and delivered quality digital marketing support throughout the project.",

"Professional digital marketing agency with good communication and transparent reporting.",

"Happy with the SEO and online marketing services provided by Set up Digital.",

"Their local SEO efforts helped us improve our presence on Google search and maps.",

"Good experience overall. The team was supportive and provided valuable marketing insights.",

"Set up Digital helped us generate more enquiries through targeted online marketing campaigns.",

"Reliable digital marketing company with a strong understanding of business growth strategies.",

"Their Google Ads campaigns performed well and delivered quality traffic to our website.",

"Good support and consistent communication throughout the engagement.",

"The team helped improve our website visibility and online reach effectively.",

"Professional approach and clear reporting made the entire process smooth.",

"Set up Digital provided valuable guidance for improving our digital presence.",

"Their SEO services helped us achieve better rankings for important keywords.",

"Good experience working with the team. They were knowledgeable and responsive.",

"Reliable agency for businesses looking to improve their online marketing efforts.",

"The digital marketing strategies were well planned and professionally executed.",

"Set up Digital delivered noticeable improvements in website traffic and engagement.",

"The team understands local SEO and online lead generation very well.",

"Professional communication and good execution of marketing campaigns.",

"Their expertise in digital marketing helped us improve brand visibility online.",

"Good results from SEO and content optimization efforts.",

"The team was cooperative and delivered work on time.",

"Happy with the quality of service and marketing support provided.",

"Set up Digital helped us establish a stronger online presence.",

"Their local SEO work improved our business visibility significantly.",

"Good digital marketing agency with experienced professionals.",

"The team was helpful and provided practical recommendations for growth.",

"We saw positive improvements in our online performance after working with them.",

"Professional digital marketing support with a focus on measurable outcomes.",

"Good experience overall and satisfied with the marketing strategies implemented.",

"Their SEO efforts contributed to better search visibility and website performance.",

"Reliable and responsive team with good marketing expertise.",

"Set up Digital helped us reach a wider audience through online marketing.",

"Their advertising campaigns generated relevant traffic and enquiries.",

"Good agency for businesses looking to improve digital visibility and growth.",

"Professional service and a results-oriented approach to marketing.",

"The team delivered quality work and maintained good communication throughout.",

"Overall a positive experience working with Set up Digital for digital marketing services."

];


const THREE_STAR_REVIEWS = [
  "The overall experience was satisfactory and the team was cooperative.",
  "The project was completed as expected and communication was decent.",
  "Average experience overall with some positive outcomes.",
  "The team was helpful and responsive when required.",
  "The services provided were acceptable for our business needs.",
  "Decent experience with room for improvement.",
  "The marketing support was satisfactory overall.",
  "Communication was good and project delivery was on time.",
  "Reasonable experience working with the team.",
  "The agency delivered acceptable results.",
  "Overall a fair digital marketing experience.",
  "The team showed professionalism throughout the project.",
  "The service quality met basic expectations.",
  "The marketing campaigns performed reasonably well.",
  "An average but satisfactory experience overall."
];

const ONE_STAR_REVIEWS = [
  "The experience did not meet expectations.",
  "Communication and project management need improvement.",
  "The results were disappointing overall.",
  "Expected significantly better outcomes.",
  "The service quality needs substantial improvement.",
  "The project did not deliver the expected value.",
  "Support and responsiveness could be improved considerably.",
  "The overall experience was unsatisfactory.",
  "There were challenges throughout the engagement.",
  "The marketing efforts did not achieve desired outcomes.",
  "Expected more professionalism and communication.",
  "The project execution needs improvement.",
  "The service did not align with expectations.",
  "Unfortunately the experience was not positive.",
  "Significant improvements are needed in service delivery."
];


const TWO_STAR_REVIEWS = [
  "The experience could have been better overall.",
  "Some aspects of communication need improvement.",
  "The results did not fully meet expectations.",
  "There is room for improvement in execution and reporting.",
  "The project took longer than expected.",
  "Average experience with limited business impact.",
  "Support was available but improvements are needed.",
  "Expected stronger results from the marketing campaigns.",
  "The communication process could be improved.",
  "The experience was below expectations.",
  "Some deliverables could have been handled better.",
  "The overall value received was moderate.",
  "More proactive communication would have helped.",
  "The results were not as strong as anticipated.",
  "There is potential for improvement in service quality."
];



const GOOGLE_REVIEW_URL =
"https://g.page/r/CVvQqkZzepFIEBE/review";

const RATING_LABELS = {
  1: "We're sorry to hear that 😔",
  2: "We appreciate your feedback 🙏",
  3: "Thank you for sharing your experience",
  4: "Great to hear! 😊",
  5: "Amazing! Thank you! 🚀"
};

/* =========================================
   REVIEW DATA
   (Will fill later)
========================================= */

const reviews = {
  1: ONE_STAR_REVIEWS,
  2: TWO_STAR_REVIEWS,
  3: THREE_STAR_REVIEWS,
  4: FOUR_STAR_REVIEWS,
  5: FIVE_STAR_REVIEWS
};

/* =========================================
   STATE
========================================= */

let selectedRating = null;
let selectedReview = null;

/* =========================================
   SCREEN HANDLER
========================================= */

function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const target =
    document.getElementById(id);

  target.classList.add("active");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

function goBack(){

  selectedReview = null;

  showScreen("screen-rating");

}

/* =========================================
   STAR LOGIC
========================================= */

const stars =
document.querySelectorAll(".star");

stars.forEach(star => {

  star.addEventListener("click", () => {

    const rating =
      Number(star.dataset.rating);

    setRating(rating);

  });

  star.addEventListener("mouseenter", () => {

    const rating =
      Number(star.dataset.rating);

    highlightStars(rating);

  });

});

document
.getElementById("stars")
.addEventListener("mouseleave", () => {

  if(selectedRating){
    highlightStars(selectedRating);
  }
  else{
    highlightStars(0);
  }

});

function highlightStars(rating){

  stars.forEach(star => {

    const current =
      Number(star.dataset.rating);

    star.classList.toggle(
      "lit",
      current <= rating
    );

  });

}

function setRating(rating){

  selectedRating = rating;

  highlightStars(rating);

  const label =
  document.getElementById(
    "ratingLabel"
  );

  label.textContent =
    RATING_LABELS[rating];

  const star =
  document.querySelector(
    `.star[data-rating="${rating}"]`
  );

  star.classList.remove("pop");

  void star.offsetWidth;

  star.classList.add("pop");

  setTimeout(() => {

    buildReviewScreen(rating);

    showScreen("screen-reviews");

  },400);

}

/* =========================================
   RANDOM REVIEW PICKER
========================================= */

function getRandomReviews(
  reviewPool,
  count = 5
){

  const shuffled =
    [...reviewPool];

  for(
    let i = shuffled.length - 1;
    i > 0;
    i--
  ){

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [shuffled[i], shuffled[j]]
      =
    [shuffled[j], shuffled[i]];

  }

  return shuffled.slice(0,count);

}

/* =========================================
   BUILD REVIEW SCREEN
========================================= */

function buildReviewScreen(rating){

  const display =
  document.getElementById(
    "ratingDisplay"
  );

  const starsHtml =
  Array.from(
    {length:5},
    (_,i)=>
    `<span style="color:${
      i < rating
      ? '#f59e0b'
      : '#cbd5e1'
    }">★</span>`
  ).join("");

  display.innerHTML = `
    <span class="stars-mini">
      ${starsHtml}
    </span>

    <span class="rating-text">
      ${rating} Star
    </span>
  `;

  const list =
  document.getElementById(
    "reviewList"
  );

  list.innerHTML = "";

  selectedReview = null;

  document.getElementById(
    "submitBtn"
  ).disabled = true;

  const selectedReviews =
  getRandomReviews(
    reviews[rating],
    5
  );

  selectedReviews.forEach(
    (text,index)=>{

      const card =
      document.createElement(
        "div"
      );

      card.className =
        "review-card";

      card.style.animationDelay =
        `${index * 0.06}s`;

      card.innerHTML =
      `<p>${text}</p>`;

      card.onclick = ()=>{

        document
        .querySelectorAll(
          ".review-card"
        )
        .forEach(card=>{
          card.classList.remove(
            "selected"
          );
        });

        card.classList.add(
          "selected"
        );

        selectedReview = text;

        document
        .getElementById(
          "submitBtn"
        )
        .disabled = false;

      };

      list.appendChild(card);

    }
  );

}

/* =========================================
   SUBMIT REVIEW
========================================= */

async function submitReview(){

  if(!selectedReview){
    return;
  }

  const btn =
  document.getElementById(
    "submitBtn"
  );

  btn.disabled = true;

  btn.innerHTML = `
    <span class="btn-icon">
      ⏳
    </span>

    <span class="btn-text">
      Copying...
    </span>
  `;

  try{

    await navigator.clipboard
      .writeText(
        selectedReview
      );

    document
    .getElementById(
      "reminderText"
    )
    .textContent =
      selectedReview;

    showScreen(
      "screen-success"
    );

    setTimeout(()=>{

      window.open(
        GOOGLE_REVIEW_URL,
        "_blank"
      );

    },600);

    showToast(
      "✅ Review copied successfully"
    );

  }
  catch(error){

    console.error(error);

    document
    .getElementById(
      "reminderText"
    )
    .textContent =
      selectedReview;

    showScreen(
      "screen-success"
    );

    showToast(
      "📋 Please copy review manually"
    );

  }

  btn.disabled = false;

  btn.innerHTML = `
    <span class="btn-icon">
      📋
    </span>

    <span class="btn-text">
      Copy & Open Google Reviews
    </span>

    <span class="btn-arrow">
      →
    </span>
  `;

}

/* =========================================
   OPEN AGAIN
========================================= */

function openGoogleAgain(){

  if(selectedReview){

    navigator.clipboard
    .writeText(
      selectedReview
    )
    .catch(()=>{});

  }

  window.open(
    GOOGLE_REVIEW_URL,
    "_blank"
  );

  showToast(
    "📋 Review copied again"
  );

}

/* =========================================
   TOAST
========================================= */

function showToast(message){

  const toast =
  document.getElementById(
    "toast"
  );

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  setTimeout(()=>{

    toast.classList.remove(
      "show"
    );

  },3000);

}

