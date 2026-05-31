/* ─── index.js ─── Google Review Funnel v2 ─────────── */

const GOOGLE_REVIEW_URL = "https://g.page/r/CVvQqkZzepFIEBE/review";

const RATING_LABELS = {
  1: "We're sorry to hear that 😔",
  2: "We'll try to do better 🙏",
  3: "Thanks for your feedback",
  4: "Great to hear! 😊",
  5: "Amazing! Thank you! 🎉"
};

const reviews = {
  5: [
    "Excellent dental clinic in Dehradun with highly professional dentists and a warm, friendly staff. Highly recommended for anyone looking for quality dental care!",
    "One of the best dentists in Dehradun. Professional treatment, excellent patient care, and a clean modern clinic. Will definitely return.",
    "Outstanding dental experience from start to finish. Skilled dentist, caring staff, and a comfortable environment. Truly the best in Dehradun.",
    "Highly recommended for all dental needs in Dehradun. The team is knowledgeable, gentle, and puts patients at ease instantly.",
    "Professional staff, modern equipment, and exceptional dental consultation. My whole family now visits this clinic for all dental care.",
    "Best dental clinic in Dehradun. Great service, painless treatment, and excellent follow-up care. Couldn't ask for more."
  ],
  4: [
    "Good dental clinic in Dehradun with experienced dentists and a very helpful, friendly staff. Overall a great experience.",
    "Professional treatment and a good overall experience. The clinic is clean, well-maintained, and the staff is courteous.",
    "Clean clinic and quality dental care. The dentist was thorough and explained everything clearly. Would recommend.",
    "Friendly staff and a smooth treatment process. Appointment was on time and the consultation was very detailed.",
    "Good dental consultation and excellent patient support throughout. A reliable choice for dental care in Dehradun.",
    "Reliable dental services in Dehradun. Good experience overall — professional team and a comfortable clinic environment."
  ],
  3: [
    "Overall satisfactory dental treatment experience. The clinic is decent and the staff is cooperative and polite.",
    "Good patient care and cooperative staff. Treatment was adequate, though waiting time could be improved.",
    "Decent dental services in Dehradun. The treatment was satisfactory and the clinic maintains good hygiene standards.",
    "Professional consultation and support. A reasonable experience overall — would consider returning for follow-up care.",
    "Reasonable experience overall. The dentist was helpful and addressed my concerns, though the process took longer than expected.",
    "Clinic provides satisfactory dental care. Good hygiene standards and a reasonably professional environment."
  ],
  2: [
    "The experience could have been better. Some areas of patient communication and treatment process need improvement.",
    "Expected more from the consultation. The staff was polite but the overall treatment experience left room for improvement.",
    "Average patient experience. The clinic has potential but needs to work on wait times and communication with patients.",
    "Some areas of treatment need improvement. The basic care was okay but the overall patient experience was lacking.",
    "Service quality can improve. While the clinic is clean, the consultation was brief and I felt my concerns weren't fully addressed.",
    "Communication could be better. The treatment itself was fine but managing patient expectations and wait times needs work."
  ],
  1: [
    "Not fully satisfied with the experience. Expected a more professional and patient-friendly approach from the clinic.",
    "Needs improvement in patient management. The wait time was excessive and the consultation felt rushed.",
    "Expected a better treatment experience. The clinic needs to work on communication and overall patient care standards.",
    "Could improve communication and patient support significantly. The experience did not meet basic expectations.",
    "Service quality needs improvement across the board. A disappointing experience overall.",
    "Below expectations overall. Hoping the clinic addresses these issues for future patients."
  ]
};

// ─── State ──────────────────────────────────────────
let selectedRating = null;
let selectedReview = null;

// ─── Screen Navigation ───────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.style.animation = 'none';
  requestAnimationFrame(() => {
    el.style.animation = '';
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  showScreen('screen-rating');
  selectedReview = null;
}

// ─── Stars ───────────────────────────────────────────
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = Number(star.dataset.rating);
    setRating(rating);
  });

  star.addEventListener('mouseenter', () => {
    const rating = Number(star.dataset.rating);
    highlightStars(rating);
  });
});

document.getElementById('stars').addEventListener('mouseleave', () => {
  if (selectedRating) highlightStars(selectedRating);
  else highlightStars(0);
});

function highlightStars(rating) {
  stars.forEach(s => {
    s.classList.toggle('lit', Number(s.dataset.rating) <= rating);
  });
}

function setRating(rating) {
  selectedRating = rating;
  highlightStars(rating);

  // Pop animation on selected star
  const star = document.querySelector(`.star[data-rating="${rating}"]`);
  star.classList.remove('pop');
  void star.offsetWidth;
  star.classList.add('pop');

  // Update label
  const label = document.getElementById('ratingLabel');
  label.textContent = RATING_LABELS[rating];
  label.style.color = rating >= 4 ? '#f59e0b' : rating === 3 ? '#64748b' : '#ef4444';

  // Transition to reviews screen after brief delay
  setTimeout(() => {
    buildReviewScreen(rating);
    showScreen('screen-reviews');
  }, 400);
}

// ─── Build Review Screen ─────────────────────────────
function buildReviewScreen(rating) {
  // Mini star display
  const display = document.getElementById('ratingDisplay');
  const starsHtml = Array.from({ length: 5 }, (_, i) =>
    `<span style="color:${i < rating ? '#f59e0b' : '#cbd5e1'}">★</span>`
  ).join('');
  display.innerHTML = `
    <span class="stars-mini">${starsHtml}</span>
    <span class="rating-text">${rating} star${rating > 1 ? 's' : ''} — ${RATING_LABELS[rating]}</span>
  `;

  // Review cards
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  selectedReview = null;
  document.getElementById('submitBtn').disabled = true;

  reviews[rating].forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `<p>${text}</p>`;
    card.onclick = () => {
      document.querySelectorAll('.review-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedReview = text;
      document.getElementById('submitBtn').disabled = false;
    };
    list.appendChild(card);
  });
}

// ─── Submit ──────────────────────────────────────────
async function submitReview() {
  if (!selectedReview) return;

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = `<span class="btn-icon">⏳</span><span class="btn-text">Copying & Opening...</span>`;

  try {
    await navigator.clipboard.writeText(selectedReview);

    // Show reminder text
    document.getElementById('reminderText').textContent = selectedReview;

    // Switch to instructions screen
    showScreen('screen-instructions');

    // Open Google Reviews
    setTimeout(() => {
      window.open(GOOGLE_REVIEW_URL, '_blank');
    }, 600);

    showToast('✅ Review copied to clipboard!');

  } catch (e) {
    // Clipboard failed — fallback: show text for manual copy
    document.getElementById('reminderText').textContent = selectedReview;
    showScreen('screen-instructions');

    setTimeout(() => {
      window.open(GOOGLE_REVIEW_URL, '_blank');
    }, 600);

    showToast('📋 Please copy your review manually');
  }

  // Reset button
  btn.disabled = false;
  btn.innerHTML = `<span class="btn-icon">📋</span><span class="btn-text">Copy & Open Google Reviews</span><span class="btn-arrow">→</span>`;
}

// ─── Open Google Again ───────────────────────────────
function openGoogleAgain() {
  // Re-copy to clipboard silently
  if (selectedReview) {
    navigator.clipboard.writeText(selectedReview).catch(() => {});
  }
  window.open(GOOGLE_REVIEW_URL, '_blank');
  showToast('📋 Review re-copied & opening Google...');
}

// ─── Toast ───────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}