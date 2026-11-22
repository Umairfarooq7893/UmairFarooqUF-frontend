// ----- Mobile menu toggle -----
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// ----- Auto footer year -----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ==========================================
// CONNECT FRONTEND TO BACKEND
// ==========================================
const BACKEND_URL = 'https://umairfarooquf-backend.onrender.com';

// 1. Podcast Booking Form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Submitting...';
    
    const locDetailsInput = document.getElementById('locationDetails');
    const locDetails = (locDetailsInput && locDetailsInput.offsetParent !== null) ? locDetailsInput.value : '';

    const data = {
      name: document.getElementById('name').value,
      designation: document.getElementById('designation').value,
      company: document.getElementById('company').value,
      contact: document.getElementById('contact').value,
      location: document.getElementById('location').value,
      locationDetails: locDetails,
      notes: document.getElementById('notes').value
    };

    try {
      const res = await fetch(`${BACKEND_URL}/api/book-podcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Booking request sent successfully! I will get back to you soon.');
        bookingForm.reset();
        document.getElementById('locationDetailsDiv').style.display = 'none';
      } else { 
        alert('Something went wrong. Please try again.'); 
      }
    } catch (err) { 
      alert('Network error. The server might be waking up (takes 50 seconds). Please try again.'); 
    }
    btn.textContent = originalText;
  });
}

// 2. Partnership Form
const partnershipForm = document.getElementById('partnershipForm');
if (partnershipForm) {
  partnershipForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = partnershipForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';

    let extraDetails = '';
    const type = document.getElementById('type').value;
    if (type === 'sponsorship' && document.getElementById('budget')) extraDetails = document.getElementById('budget').value;
    if (type === 'collaboration' && document.getElementById('startup-stage')) extraDetails = document.getElementById('startup-stage').value;
    if (type === 'consulting' && document.getElementById('consult-topic')) extraDetails = document.getElementById('consult-topic').value;

    const data = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      type: type,
      extraDetails: extraDetails,
      message: document.getElementById('message').value
    };

    try {
      const res = await fetch(`${BACKEND_URL}/api/partnership`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Partnership request sent successfully!');
        partnershipForm.reset();
        document.getElementById('dynamicFields').style.display = 'none';
      } else { 
        alert('Something went wrong. Please try again.'); 
      }
    } catch (err) { 
      alert('Network error. The server might be waking up (takes 50 seconds). Please try again.'); 
    }
    btn.textContent = originalText;
  });
}

// 3. Ideas Submission Form
const ideaForm = document.getElementById('submitIdeaForm');
if (ideaForm) {
  ideaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = ideaForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Submitting...';

    const data = {
      title: document.getElementById('title').value,
      category: document.getElementById('category').value,
      problem: document.getElementById('problem').value,
      solution: document.getElementById('solution').value,
      description: document.getElementById('description').value,
      name: document.getElementById('name').value,
      contact: document.getElementById('contact').value
    };

    try {
      const res = await fetch(`${BACKEND_URL}/api/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Idea submitted successfully!');
        ideaForm.reset();
      } else { 
        alert('Something went wrong. Please try again.'); 
      }
    } catch (err) { 
      alert('Network error. The server might be waking up (takes 50 seconds). Please try again.'); 
    }
    btn.textContent = originalText;
  });
}