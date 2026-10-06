/* ═══════════════════════════════════════════════════════════════
   JUNE BAKEHOUSE & DELI — CLIENT PITCH DECK ENGINE
   Handles Navigation, Live ROI Calculator, Presenter Notes & Touch
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('dock-dots');
  const prevBtn = document.getElementById('dock-prev');
  const nextBtn = document.getElementById('dock-next');
  const notesBtn = document.getElementById('dock-notes');
  const fullBtn = document.getElementById('dock-fullscreen');
  const printBtn = document.getElementById('dock-print');
  const counterEl = document.getElementById('slide-counter');
  const notesDrawer = document.getElementById('notes-drawer');
  const notesClose = document.getElementById('notes-close');
  const notesBody = document.getElementById('notes-body');

  let currentIdx = 0;
  const totalSlides = slides.length;

  // Speaker notes per slide
  const speakerNotes = [
    {
      title: "Slide 1: Executive Opening",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Set a collaborative, respectful tone. June isn't just an ordinary café; it's an architectural sanctuary in Patrakar Colony.</p>
        <h4>What to say word-for-word:</h4>
        <p>"Thank you for taking the time to meet with us today. When you look at June Bakehouse — the double-height solarium, the precision of your espresso, the Berliners — it is undeniably one of the most aesthetically refined dining spaces in Indore."</p>
        <p>"However, in today's market, having great food and great ambience is only half the battle. Today, we're not pitching a standard generic website. We're showing you how your digital flagship can actively capture <strong>high-margin revenue, private event buyouts, and direct table bookings</strong> with zero aggregator commissions."</p>
      `
    },
    {
      title: "Slide 2: The Core Problem",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Agitate the silent revenue drain that every top café suffers from: over-dependence on Instagram algorithms and food delivery aggregators.</p>
        <h4>What to say word-for-word:</h4>
        <p>"Right now, almost every boutique café in Indore makes the same mistake: they treat Instagram as their only storefront."</p>
        <p>"Here's what happens: an excited foodie sees your pistachio pastry on Instagram reels. They click your bio link. If there's no instant, beautiful digital flagship with clear menu and booking actions, over <strong>60% of them drop off</strong> before ever walking in."</p>
        <p>"Worse, when guests want to host a 15-person birthday brunch or private celebration, they don't want to play phone tag on Instagram DMs. When they can't book effortlessly, they book elsewhere."</p>
      `
    },
    {
      title: "Slide 3: 3 Direct Revenue Pillars",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Introduce the three highest-margin profit channels that June's website will unlock.</p>
        <h4>What to say word-for-word:</h4>
        <p>"We designed this flagship around three specific revenue pillars:"</p>
        <ul>
          <li><strong>1. Private Events & Gatherings:</strong> June's solarium and courtyard are made for intimate celebrations, brand pop-ups, and corporate brunches. Just 2 to 3 events a month bring in ₹70,000–₹1,50,000 in pure revenue.</li>
          <li><strong>2. Priority Table Reservations:</strong> Eliminate weekend waitlist walkouts. Guests lock in tables, meaning guaranteed covers and higher average spend.</li>
          <li><strong>3. Chef's Specials & Hamper Curation:</strong> Highlight seasonal bakery drops (festive hampers, artisanal sourdoughs, whole celebration cakes).</li>
        </ul>
      `
    },
    {
      title: "Slide 4: Interactive ROI Calculator",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Walk the owner through their own numbers. Let them see the money on screen.</p>
        <h4>What to say word-for-word:</h4>
        <p>"Let's look at the actual math. Even under conservative estimates — say, just 4 reserved tables a day and 2 private group events a month — look at the number on the right."</p>
        <p>"That is over <strong>₹28 Lakhs in annual direct revenue</strong> funneled straight into your cash registers — with zero commissions paid to Zomato or Swiggy."</p>
        <p>"The return on investment on this platform pays for itself within the very first month."</p>
      `
    },
    {
      title: "Slide 5: Live Showcase Walkthrough",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Show the actual live deployed website on GitHub Pages.</p>
        <h4>What to say word-for-word:</h4>
        <p>"Instead of showing you wireframes, we've already engineered the working flagship. Look at this on mobile — the glass solarium imagery, the warm terracotta accents, the bilingual 'जून' typography."</p>
        <p>"Most importantly: notice the bottom sticky action bar on phones. One tap to call your front desk, one tap for GPS Google Maps navigation straight to Patrakar Colony, and instant access to your curated menu."</p>
      `
    },
    {
      title: "Slide 6: Frictionless Customer Journey",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Prove to the owner that this will NOT create extra operational headaches for their staff.</p>
        <h4>What to say word-for-word:</h4>
        <p>"You might be thinking: 'Will my floor team have to manage another complex software?' Absolutely not."</p>
        <p>"When a customer taps 'Reserve' or 'Event Inquiry', it triggers a seamless, pre-formatted concierge message directly to your manager's WhatsApp with guest name, date, time, and party size. Your manager clicks reply to confirm in 5 seconds."</p>
      `
    },
    {
      title: "Slide 7: Why June's Brand Deserves This",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Position this against generic DIY templates (Wix, WordPress, Squarespace) and show why custom engineering matters.</p>
        <h4>What to say word-for-word:</h4>
        <p>"Cheap templates are slow, cluttered, and break on Indian phones. June is a luxury experience — your digital flagship loads in under a second, dominates Indore Google searches, and feels as refined as walking into your glasshouse solarium."</p>
      `
    },
    {
      title: "Slide 8: Rollout Plan & Timeline",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Remove friction about implementation time and effort.</p>
        <h4>What to say word-for-word:</h4>
        <p>"We handle everything end-to-end. In Week 1, we finalize the menu curation and photography. In Week 2, we calibrate the WhatsApp concierge workflow. By Week 3, we launch, update your Google Business listing, and roll out QR code cards on tables."</p>
      `
    },
    {
      title: "Slide 9: Commercials & Next Steps",
      notes: `
        <h4>Goal of this slide:</h4>
        <p>Close with confidence. Present the two turnkey options.</p>
        <h4>What to say word-for-word:</h4>
        <p>"We have two packages: The Growth Launch and The Full Flagship Retainer. As you saw in the calculator, even a single private brunch booked through this site covers the entire setup cost. Shall we begin setup this week so we're live for this weekend's traffic?"</p>
      `
    }
  ];

  // Initialize navigation dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dock-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(document.querySelectorAll('.dock-dot'));

  function updateSlide(newIdx) {
    if (newIdx < 0 || newIdx >= totalSlides) return;

    slides[currentIdx].classList.remove('active');
    slides[currentIdx].classList.add(newIdx > currentIdx ? 'prev' : '');

    currentIdx = newIdx;

    slides.forEach((s, i) => {
      s.classList.remove('active', 'prev');
      if (i === currentIdx) {
        s.classList.add('active');
      } else if (i < currentIdx) {
        s.classList.add('prev');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIdx);
    });

    counterEl.textContent = `${String(currentIdx + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;

    // Update notes panel content
    if (speakerNotes[currentIdx]) {
      notesBody.innerHTML = speakerNotes[currentIdx].notes;
    }
  }

  function nextSlide() {
    if (currentIdx < totalSlides - 1) updateSlide(currentIdx + 1);
  }

  function prevSlide() {
    if (currentIdx > 0) updateSlide(currentIdx - 1);
  }

  function goToSlide(idx) {
    updateSlide(idx);
  }

  // Event Listeners for Buttons
  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);

  notesBtn?.addEventListener('click', () => {
    notesDrawer.classList.toggle('open');
  });

  notesClose?.addEventListener('click', () => {
    notesDrawer.classList.remove('open');
  });

  fullBtn?.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  printBtn?.addEventListener('click', () => {
    window.print();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Ignore if user is inside an input/slider
    if (e.target.tagName === 'INPUT' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;
      case 'n':
      case 'N':
        notesDrawer.classList.toggle('open');
        break;
      case 'f':
      case 'F':
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
        break;
      case 'p':
      case 'P':
        window.print();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  });

  // Touch Swipe for Mobile / iPad
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  }

  // ─── Live ROI Calculator Logic ───
  const avgBillInput = document.getElementById('calc-avg-bill');
  const dailyTablesInput = document.getElementById('calc-daily-tables');
  const monthlyEventsInput = document.getElementById('calc-monthly-events');

  const avgBillVal = document.getElementById('val-avg-bill');
  const dailyTablesVal = document.getElementById('val-daily-tables');
  const monthlyEventsVal = document.getElementById('val-monthly-events');

  const annualRevEl = document.getElementById('roi-annual-rev');
  const monthlyTablesRevEl = document.getElementById('roi-monthly-tables');
  const monthlyEventsRevEl = document.getElementById('roi-monthly-events');
  const commissionSavedEl = document.getElementById('roi-comm-saved');

  function calculateROI() {
    if (!avgBillInput || !dailyTablesInput || !monthlyEventsInput) return;

    const avgBill = parseInt(avgBillInput.value, 10);
    const dailyTables = parseInt(dailyTablesInput.value, 10);
    const monthlyEvents = parseInt(monthlyEventsInput.value, 10);
    const avgEventSpend = 35000;

    avgBillVal.textContent = `₹${avgBill.toLocaleString('en-IN')}`;
    dailyTablesVal.textContent = `${dailyTables} tables/day`;
    monthlyEventsVal.textContent = `${monthlyEvents} events/mo`;

    const monthlyTableRev = dailyTables * avgBill * 30;
    const monthlyEventRev = monthlyEvents * avgEventSpend;
    const totalMonthly = monthlyTableRev + monthlyEventRev;
    const totalAnnual = totalMonthly * 12;
    const commissionSaved = Math.round(totalAnnual * 0.22); // ~22% saved vs delivery aggregators

    if (annualRevEl) {
      annualRevEl.textContent = `₹${(totalAnnual / 100000).toFixed(1)} Lakhs`;
    }
    if (monthlyTablesRevEl) {
      monthlyTablesRevEl.textContent = `₹${(monthlyTableRev / 1000).toFixed(0)}k/mo`;
    }
    if (monthlyEventsRevEl) {
      monthlyEventsRevEl.textContent = `₹${(monthlyEventRev / 1000).toFixed(0)}k/mo`;
    }
    if (commissionSavedEl) {
      commissionSavedEl.textContent = `₹${(commissionSaved / 100000).toFixed(1)}L saved`;
    }
  }

  avgBillInput?.addEventListener('input', calculateROI);
  dailyTablesInput?.addEventListener('input', calculateROI);
  monthlyEventsInput?.addEventListener('input', calculateROI);

  // Initial Calculation
  calculateROI();

  // Initial speaker notes
  if (speakerNotes[0]) {
    notesBody.innerHTML = speakerNotes[0].notes;
  }
});
