/* ==============================================
   UNIFIED JAVASCRIPT — ADAGACHE GROUP OF COMPANIES
   Covers: All Pages — Homes, Oil & Gas, Travel, Integrated, Autos, Properties, Media
   ============================================== */

// ========== DATA ==========
const plotsData = [
  { size: "170 SQM", price: 4500000, name: "3 Bedroom Terrace", badge: "Best Seller", prototype: "170 SQM 3 Bedroom Terrace", img: "images/170sqm.webp" },
  { size: "250 SQM", price: 6700000, name: "4 Bedroom Semi-Detached", badge: "Fast Selling", prototype: "250 SQM 4 Bedroom Semi-Detached", img: "images/250sqm.webp" },
  { size: "350 SQM", price: 9500000, name: "4 Bedroom Fully Detached", badge: "Premium", prototype: "350 SQM 4 Bedroom Fully Detached", img: "images/350sqm.webp" },
  { size: "450 SQM", price: 12000000, name: "5 Bedroom Detached", badge: "Luxury", prototype: "450 SQM 5 Bedroom Detached", img: "images/450sqm.webp" },
  { size: "600 SQM", price: 15900000, name: "6 Bedroom Mansion", badge: "Elite", prototype: "600 SQM 6 Bedroom Mansion", img: "images/600sqm.webp" },
  { size: "1000 SQM", price: 27000000, name: "Block of Flats", badge: "Investor Choice", prototype: "1000 SQM Block of Flats", img: "images/1000sqm.webp" }
];

const ceoBioFullHTML = `
<p><strong>John Abbah Adagache</strong>, popularly known as <strong>Jblingz Adagache</strong>, is a dynamic Nigerian entrepreneur, creative leader, and visionary founder with diversified interests across multiple high-impact industries. He is the <strong>Chief Executive Officer of Adagache Integrated Global Services</strong>, a multi-sector company operating in real estate, oil and gas, travel and tours, and automobile services.</p>
<p>Based in Abuja, Nigeria, John has positioned his brand at the intersection of value creation, trust, and long-term investment growth. Through his real estate ventures (including <strong>Adagache Homes</strong> and landmark projects like Solar City Apo), he is deeply committed to helping individuals and organizations secure premium spaces to live, work, and invest, with a strong emphasis on due diligence, proper documentation, and sustainable asset acquisition.</p>
<p>John is of <strong>Idoma descent</strong> from Benue State, and his work reflects a strong sense of purpose, integrity, and community upliftment. Beyond business, he is actively involved in philanthropy, supporting initiatives that empower individuals with opportunities for livelihood, stability, and personal growth.</p>
<p>In addition to his corporate pursuits, John is a music performing artist. In 2022, he released his debut project, <strong>"The King Jesus EP"</strong>, marking his entry into the music industry as a faith-driven and purpose-centered creative. His artistry reflects themes of identity, spirituality, resilience, and excellence.</p>
<p>Expanding his influence into lifestyle and culture, John is also the CEO of <strong>JESUS ABOVE EVERYTHING (JAE Unlimited)</strong>, a fashion brand built on bold expression, faith-inspired values, and contemporary design. He further leads <strong>Trillionaires Empire</strong>, an entertainment company focused on talent development, creative production, and brand expansion within the global entertainment space.</p>
<p><strong>Driven by a clear global vision</strong>, John Abbah Adagache is steadily working to position his brands on the international stage, blending entrepreneurship, creativity, and social impact. His mission is rooted in building legacy-driven enterprises that create value, inspire confidence, and uplift communities—locally and globally.</p>
`;

const ceoBioShortHTML = `
<p><strong>John Abbah Adagache</strong>, popularly known as <strong>Jblingz Adagache</strong>, is a dynamic Nigerian entrepreneur, creative leader, and visionary founder with diversified interests across multiple high-impact industries. He is the <strong>Chief Executive Officer of Adagache Integrated Global Services</strong>, a multi-sector company operating in real estate, oil and gas, travel and tours, and automobile services.</p>
<p>Based in Abuja, Nigeria, John has positioned his brand at the intersection of value creation, trust, and long-term investment growth. Through his real estate ventures (including <strong>Adagache Homes</strong> and landmark projects like Solar City Apo), he is deeply committed to helping individuals and organizations secure premium spaces to live, work, and invest, with a strong emphasis on due diligence, proper documentation, and sustainable asset acquisition.</p>
`;

const pillarsArray = [
  { icon: "fas fa-building", label: "Real Estate Mogul" },
  { icon: "fas fa-chart-line", label: "Investment Strategist" },
  { icon: "fas fa-music", label: "Recording Artist" },
  { icon: "fas fa-tshirt", label: "Fashion CEO (JAE)" },
  { icon: "fas fa-hand-holding-heart", label: "Philanthropist" }
];

const featuresList = [
  "☀️ Solar Power", "🔋 EV Charging", "🏊 Swimming Pool",
  "🛡️ 24/7 Security", "📹 CCTV Systems", "🛣️ Road Network",
  "🛍️ Shopping Mall", "🌳 Green Areas"
];

// ========== HELPERS ==========
function formatNaira(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

// ========== ACTIVE NAV LINK ==========
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.includes(currentPage.replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (icon) icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });

  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  });
}

// ========== RENDER PLOTS (index.html) ==========
function renderPlots() {
  const container = document.getElementById('plotsGrid');
  if (!container) return;
  container.innerHTML = plotsData.map(plot => `
    <div class="plot-card">
      <div class="plot-badge">${plot.badge}</div>
      <img class="plot-card-image" src="${plot.img}" alt="${plot.name}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="plot-icon" style="display:none; margin:20px auto 0; justify-content:center;">🏡</div>
      <div class="plot-card-body">
        <h3 class="gold-text">${plot.size}</h3>
        <h4 style="font-size:1.05rem;font-weight:700;margin:8px 0 14px;color:#ddd;">${plot.name}</h4>
        <a href="#" class="prototype-link" data-proto="${plot.prototype}"><i class="far fa-file-pdf"></i> View Prototype Layout</a>
        <div class="price gold-text">${formatNaira(plot.price)}</div>
        <button class="plot-btn secure-btn" data-size="${plot.size}" data-price="${formatNaira(plot.price)}">Secure Plot</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.secure-btn').forEach(btn => {
    btn.addEventListener('click', () => openLeadModal(btn.dataset.size, btn.dataset.price));
  });
  document.querySelectorAll('.prototype-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`📐 Prototype layout for ${link.dataset.proto} will be available soon. Contact us via WhatsApp for detailed architectural drawings.`);
    });
  });
}

// ========== RENDER FEATURES ==========
function renderFeatures() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;
  container.innerHTML = featuresList.map(feature => {
    const icon = feature.split(' ')[0];
    const text = feature.substring(feature.indexOf(' ') + 1);
    return `
      <div class="feature-card glass">
        <div class="feature-icon">${icon}</div>
        <h3>${text}</h3>
      </div>`;
  }).join('');
}

// ========== CEO CONTENT ==========
let isBioExpanded = false;

function renderCEOContent() {
  const bioDiv = document.getElementById('ceoBioText');
  const pillarsDiv = document.getElementById('pillarsList');

  if (bioDiv) {
    bioDiv.innerHTML = ceoBioShortHTML;
    const readMoreContainer = document.createElement('div');
    readMoreContainer.className = 'read-more-container';
    const readMoreBtn = document.createElement('button');
    readMoreBtn.className = 'read-more-btn';
    readMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Read More <i class="fas fa-chevron-down"></i>';

    readMoreBtn.addEventListener('click', () => {
      if (!isBioExpanded) {
        bioDiv.innerHTML = ceoBioFullHTML;
        readMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Read Less <i class="fas fa-chevron-up"></i>';
        isBioExpanded = true;
        if (pillarsDiv) renderPillars(pillarsDiv);
      } else {
        bioDiv.innerHTML = ceoBioShortHTML;
        readMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Read More <i class="fas fa-chevron-down"></i>';
        isBioExpanded = false;
        if (pillarsDiv) renderPillars(pillarsDiv);
      }
      bioDiv.appendChild(readMoreContainer);
    });

    readMoreContainer.appendChild(readMoreBtn);
    bioDiv.appendChild(readMoreContainer);
  }

  if (pillarsDiv) renderPillars(pillarsDiv);
}

function renderPillars(container) {
  container.innerHTML = pillarsArray.map(p => `
    <span class="pillar-item"><i class="${p.icon}"></i> ${p.label}</span>
  `).join('');
}

// ========== MODAL ==========
let currentModalPlot = { name: '', price: '' };

function openLeadModal(plotName, plotPrice) {
  currentModalPlot = { name: plotName, price: plotPrice };
  const title = document.getElementById('modalPlotTitle');
  if (title) title.innerText = plotName;
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.add('active');
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  if (modal) modal.classList.remove('active');
}

function triggerWhatsAppLead(paymentMethod) {
  const phone = "2348030702010";
  const message = `Hi Adagache Homes, I am highly interested in securing the *${currentModalPlot.name}* priced at *${currentModalPlot.price}*.\n\nI would prefer to proceed via an *${paymentMethod}* structure. Please provide me with the available plot documentation parameters.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  closeLeadModal();
}

// ========== CALCULATOR ==========
function populatePlotSelect() {
  const select = document.getElementById('plotSelect');
  if (!select) return;
  select.innerHTML = plotsData.map(plot => `
    <option value="${plot.price}" data-name="${plot.size} - ${plot.name}">
      ${plot.size} - ${formatNaira(plot.price)}
    </option>
  `).join('');
}

function calculateInstallments() {
  const select = document.getElementById('plotSelect');
  const depositRange = document.getElementById('depositRange');
  const durationSelect = document.getElementById('durationSelect');
  if (!select || !depositRange || !durationSelect) return;

  const totalPrice = parseFloat(select.value);
  const plotDisplayName = select.options[select.selectedIndex].getAttribute('data-name') || "Selected Plot";
  const depositPercent = parseInt(depositRange.value);
  const duration = parseInt(durationSelect.value);

  const depositAmount = totalPrice * (depositPercent / 100);
  const remainingBalance = totalPrice - depositAmount;
  const monthlyPayment = remainingBalance / duration;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set('depositPercentText', depositPercent + '%');
  set('resTotal', formatNaira(totalPrice));
  set('resDeposit', formatNaira(depositAmount));
  set('resBalance', formatNaira(remainingBalance));
  set('resMonthly', formatNaira(monthlyPayment));

  const phone = "2348030702010";
  const message = `Hi Adagache Homes, I used your web calculator and would like to propose an installment plan for the *${plotDisplayName}*:\n\n` +
    `- *Total Plot Price:* ${formatNaira(totalPrice)}\n` +
    `- *My Down Payment (${depositPercent}%):* ${formatNaira(depositAmount)}\n` +
    `- *Chosen Term:* ${duration} Months\n` +
    `- *Calculated Monthly Outlay:* ${formatNaira(monthlyPayment)}\n\n` +
    `Please let me know how we can proceed with documentation!`;

  const waBtn = document.getElementById('calcWhatsAppBtn');
  if (waBtn) waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// ========== BIND EVENTS ==========
function bindGlobalEvents() {
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeLeadModal);

  const modalOverlay = document.getElementById('leadModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeLeadModal();
    });
  }

  document.querySelectorAll('.modal-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => triggerWhatsAppLead(btn.getAttribute('data-payment')));
  });

  const plotSelect = document.getElementById('plotSelect');
  const depositRange = document.getElementById('depositRange');
  const durationSelect = document.getElementById('durationSelect');
  if (plotSelect) plotSelect.addEventListener('change', calculateInstallments);
  if (depositRange) depositRange.addEventListener('input', calculateInstallments);
  if (durationSelect) durationSelect.addEventListener('change', calculateInstallments);
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .why-item, .feature-card, .hero-stat, .plot-card, .prop-card, .video-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ========== PROPERTIES PAGE ==========
const companiesData = [
  {
    id: "crown-allied-skyline-bcc",
    icon: "👑",
    label: "Crown Allied Global Realty Ltd — crownluxuryproperties.com",
    name: "Crown Allied Global Realty Ltd",
    properties: [
      { title: "Skyline Exclusive City IDU — 1000 SQM", location: "Gousa District, Idu, Abuja", type: "Land Plot", price: "₦50,000,000", beds: 0, baths: 0, sqm: "1000 SQM", desc: "A premium 1000 SQM plot in the prestigious Skyline Exclusive City Idu, Gousa District. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80" },
      { title: "Skyline Exclusive City IDU — 500 SQM", location: "Gousa District, Idu, Abuja", type: "Land Plot", price: "₦25,000,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM plot in Skyline Exclusive City Idu, Gousa District, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
      { title: "Skyline Exclusive City IDU — 350 SQM", location: "Gousa District, Idu, Abuja", type: "Land Plot", price: "₦17,500,000", beds: 0, baths: 0, sqm: "350 SQM", desc: "A 350 SQM plot in Skyline Exclusive City Idu, Gousa District, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
      { title: "Billionaire Classic City (BCC) — 1000 SQM", location: "Guzape Main, Abuja", type: "Land — Land Size", price: "₦410,000,000", beds: 0, baths: 0, sqm: "1000 SQM", desc: "A prime 1000 SQM land plot in the exclusive Billionaire Classic City (BCC), Guzape Main, Abuja. FCDA Building Approval. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
      { title: "Billionaire Classic City (BCC) — 500 SQM", location: "Guzape Main, Abuja", type: "Land — Land Size", price: "₦220,000,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM land plot in the exclusive Billionaire Classic City (BCC), Guzape Main, Abuja. FCDA Building Approval. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "crown-allied-resort",
    icon: "👑",
    label: "Crown Allied Global Realty Ltd — crownluxuryproperties.com",
    name: "Crown Resort and Park",
    properties: [
      { title: "Crown Resort & Park — 250 SQM", location: "Karsana, Kubwa Express Road, Abuja", type: "Terrace Duplex Plot", price: "₦30,000,000", beds: 0, baths: 0, sqm: "250 SQM", desc: "A 250 SQM Terrace Duplex Plot at Crown Resort and Park, Karsana, Kubwa Express Road, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Resort & Park — 350 SQM", location: "Karsana, Kubwa Express Road, Abuja", type: "Semi Detached Duplex Plot", price: "₦42,000,000", beds: 0, baths: 0, sqm: "350 SQM", desc: "A 350 SQM Semi Detached Duplex Plot at Crown Resort and Park, Karsana, Kubwa Express Road, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Resort & Park — 500 SQM", location: "Karsana, Kubwa Express Road, Abuja", type: "Fully Detached Duplex Plot", price: "₦60,000,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM Fully Detached Duplex Plot at Crown Resort and Park, Karsana, Kubwa Express Road, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Resort & Park — 1000 SQM", location: "Karsana, Kubwa Express Road, Abuja", type: "Penthouse Duplex Plot", price: "₦120,000,000", beds: 0, baths: 0, sqm: "1000 SQM", desc: "A 1000 SQM Penthouse Duplex Plot at Crown Resort and Park, Karsana, Kubwa Express Road, Abuja. FCDA C of O title. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, shopping mall, and worship center.", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Elevation City — 150 SQM", location: "Abuja", type: "3 Bedroom Terrace", price: "₦6,000,000", beds: 3, baths: 0, sqm: "150 SQM", desc: "A 150 SQM 3 Bedroom Terrace plot in Crown Elevation City, Abuja. Developed by Crown Allied Global Realty Ltd. Contact us via WhatsApp for full estate details and documentation.", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "crown-allied-elevation-hills",
    icon: "👑",
    label: "Crown Allied Global Realty Ltd — crownluxuryproperties.com",
    name: "Crown Elevation City & Crown Hills City",
    properties: [
      { title: "Crown Elevation City — 450 SQM", location: "Abuja", type: "5 Bedroom Duplex", price: "₦18,000,000", beds: 5, baths: 0, sqm: "450 SQM", desc: "A 450 SQM 5 Bedroom Duplex plot in Crown Elevation City, Abuja. Developed by Crown Allied Global Realty Ltd. Contact us via WhatsApp for full estate details and documentation.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Elevation City — 350 SQM", location: "Abuja", type: "Semi Detached Duplex Plot", price: "₦14,000,000", beds: 0, baths: 0, sqm: "350 SQM", desc: "A 350 SQM Semi Detached Duplex plot in Crown Elevation City, Abuja. Developed by Crown Allied Global Realty Ltd. Contact us via WhatsApp for full estate details and documentation.", img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Elevation City — 250 SQM", location: "Abuja", type: "4 Bedroom Terrace Duplex", price: "₦10,000,000", beds: 4, baths: 0, sqm: "250 SQM", desc: "A 250 SQM 4 Bedroom Terrace Duplex plot in Crown Elevation City, Abuja. Developed by Crown Allied Global Realty Ltd. Contact us via WhatsApp for full estate details and documentation.", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Hills City Asokoro — 250 SQM", location: "Asokoro, Abuja", type: "Land Plot", price: "₦35,000,000", beds: 0, baths: 0, sqm: "250 SQM", desc: "A 250 SQM plot in Crown Hills City, Asokoro, Abuja. 5 minutes drive from ECOWAS HQ Asokoro, 2 minutes from Guzape, and 6 minutes from Federal Secretariat. Department of Development Control Building Plan Approval. Features include electricity, road network, playground, good water supply, drainage, and gated estate.", img: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80" },
      { title: "Crown Hills City Asokoro — 800 SQM", location: "Asokoro, Abuja", type: "Land Plot", price: "₦112,000,000", beds: 0, baths: 0, sqm: "800 SQM", desc: "A premium 800 SQM plot in Crown Hills City, Asokoro, Abuja. 5 minutes drive from ECOWAS HQ Asokoro, 2 minutes from Guzape, and 6 minutes from Federal Secretariat. Department of Development Control Building Plan Approval. Features include electricity, road network, playground, good water supply, drainage, and gated estate.", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "lcr-cityview",
    icon: "🏙️",
    label: "Developed by LCR",
    name: "CityView Park & Resort",
    properties: [
      { title: "CityView Park & Resort — 300 SQM Residential", location: "Plot 93, Gousa District, by Idu Train Station, Abuja", type: "Residential Plot", price: "₦13,500,000", beds: 0, baths: 0, sqm: "300 SQM", desc: "A 300 SQM Residential plot at CityView Park & Resort, Plot 93, Gousa District, by Idu Train Station, Abuja. FCDA Approved. Initial deposit: ₦1,000,000. Payment plans available from 6 to 24 months.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
      { title: "CityView Park & Resort — 500 SQM Residential", location: "Plot 93, Gousa District, by Idu Train Station, Abuja", type: "Residential Plot", price: "₦22,500,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM Residential plot at CityView Park & Resort, Plot 93, Gousa District, by Idu Train Station, Abuja. FCDA Approved. Initial deposit: ₦1,500,000. Payment plans available from 6 to 24 months.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
      { title: "CityView Park & Resort — 1000 SQM Commercial", location: "Plot 93, Gousa District, by Idu Train Station, Abuja", type: "Commercial Plot", price: "₦70,000,000", beds: 0, baths: 0, sqm: "1000 SQM", desc: "A 1000 SQM Commercial plot at CityView Park & Resort, Plot 93, Gousa District, by Idu Train Station, Abuja. FCDA Approved. Initial deposit: ₦5,000,000. Payment plans available from 6 to 24 months.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
      { title: "CityView Park & Resort — 3600 SQM (1 Acre)", location: "Plot 93, Gousa District, by Idu Train Station, Abuja", type: "Acre Plot", price: "₦162,000,000", beds: 0, baths: 0, sqm: "3600 SQM / 1 Acre", desc: "A full 1 Acre (3600 SQM) plot at CityView Park & Resort, Plot 93, Gousa District, by Idu Train Station, Abuja. FCDA Approved. Initial deposit: ₦10,000,000. Payment plans available from 6 to 24 months.", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80" },
      { title: "CityView Park & Resort — Children's Amusement Park", location: "Plot 93, Gousa District, by Idu Train Station, Abuja", type: "Estate Feature", price: "Enquire for Details", beds: 0, baths: 0, sqm: "N/A", desc: "CityView Park & Resort includes a vibrant Children's Amusement Park — a space where children can play, explore, and create joyful memories. Developed by LCR. FCDA Approved. Contact us via WhatsApp to learn more about this unique lifestyle estate.", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "lcr-suncity-oakville",
    icon: "🌿",
    label: "Developed by LCR",
    name: "SunCity Green & Smart Estate / Oakville Green Estate",
    properties: [
      { title: "SunCity Green & Smart Estate — 300 SQM", location: "Karshi, Abuja", type: "Land Plot", price: "₦4,000,000", beds: 0, baths: 0, sqm: "300 SQM", desc: "A 300 SQM plot in SunCity Green and Smart Estate, Karshi, Abuja. Developed by LCR. Outright price ₦4M (0–3 months). Flexible payment plans up to 24 months available. Contact us for full payment plan details.", img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80" },
      { title: "SunCity Green & Smart Estate — 500 SQM", location: "Karshi, Abuja", type: "Land Plot", price: "₦6,500,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM plot in SunCity Green and Smart Estate, Karshi, Abuja. Developed by LCR. Outright price ₦6.5M (0–3 months). Flexible payment plans up to 24 months available. Contact us for full payment plan details.", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80" },
      { title: "SunCity Green & Smart Estate — 1 Acre", location: "Karshi, Abuja", type: "Acre Plot", price: "₦39,000,000", beds: 0, baths: 0, sqm: "1 Acre", desc: "A full 1 Acre plot in SunCity Green and Smart Estate, Karshi, Abuja. Developed by LCR. Outright price ₦39M (0–3 months). Flexible payment plans up to 24 months available. Contact us for full payment plan details.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80" },
      { title: "Oakville Green Estate — 300 SQM", location: "Mowe-Ofada", type: "Land Plot", price: "₦4,500,000", beds: 0, baths: 0, sqm: "300 SQM", desc: "A 300 SQM plot in Oakville Green Estate, Mowe-Ofada. Developed by LCR. Title: C of O. Initial deposit: ₦500,000. Outright price ₦4.5M. Flexible payment plans from 6 to 24 months available — contact us for the full payment schedule.", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80" },
      { title: "Oakville Green Estate — 500 SQM", location: "Mowe-Ofada", type: "Land Plot", price: "₦7,000,000", beds: 0, baths: 0, sqm: "500 SQM", desc: "A 500 SQM plot in Oakville Green Estate, Mowe-Ofada. Developed by LCR. Title: C of O. Initial deposit: ₦500,000. Outright price ₦7M. Flexible payment plans from 6 to 24 months available — contact us for the full payment schedule.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: "adagache-solar-city",
    icon: "☀️",
    label: "Adagache Homes — adagachehomes.com.ng | 08030702010",
    name: "Adagache Homes — Solar City Apo",
    properties: [
      { title: "Solar City Apo — 170 SQM", location: "Apo, Burum West District, Abuja", type: "Land Plot", price: "₦9,000,000", beds: 0, baths: 0, sqm: "170 SQM", desc: "A 170 SQM plot in Solar City Apo, Apo, Burum West District, Abuja. FCDA C of O. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, and shopping mall.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
      { title: "Solar City Apo — 250 SQM", location: "Apo, Burum West District, Abuja", type: "Land Plot", price: "₦13,400,000", beds: 0, baths: 0, sqm: "250 SQM", desc: "A 250 SQM plot in Solar City Apo, Apo, Burum West District, Abuja. FCDA C of O. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, and shopping mall.", img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=800&q=80" },
      { title: "Solar City Apo — 350 SQM", location: "Apo, Burum West District, Abuja", type: "Land Plot", price: "₦19,000,000", beds: 0, baths: 0, sqm: "350 SQM", desc: "A 350 SQM plot in Solar City Apo, Apo, Burum West District, Abuja. FCDA C of O. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, and shopping mall.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
      { title: "Solar City Apo — 450 SQM", location: "Apo, Burum West District, Abuja", type: "Land Plot", price: "₦24,000,000", beds: 0, baths: 0, sqm: "450 SQM", desc: "A 450 SQM plot in Solar City Apo, Apo, Burum West District, Abuja. FCDA C of O. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, and shopping mall.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
      { title: "Solar City Apo — 600 SQM", location: "Apo, Burum West District, Abuja", type: "Land Plot", price: "₦30,000,000", beds: 0, baths: 0, sqm: "600 SQM", desc: "A 600 SQM plot in Solar City Apo, Apo, Burum West District, Abuja. FCDA C of O. Estate features include green space, instant allocation, well-planned vicinity, business district, security personnel, central borehole, and shopping mall.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

function renderPropertiesPage() {
  const container = document.getElementById('propertiesContainer');
  if (!container) return;

  container.innerHTML = companiesData.map(company => `
    <div class="prop-company-section">
      <div class="prop-company-header">
        <div class="prop-company-icon">${company.icon}</div>
        <div class="prop-company-meta">
          <small>${company.label}</small>
          <h3 class="gold-text">${company.name}</h3>
        </div>
      </div>
      <div class="prop-cards-grid">
        ${company.properties.map((prop, idx) => `
          <div class="prop-card" onclick="openPropModal('${company.id}', ${idx})">
            <img class="prop-card-img" src="${prop.img}" alt="${prop.title}"
              onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'">
            <div class="prop-card-body">
              <span class="prop-card-tag">${prop.type}</span>
              <h4>${prop.title}</h4>
              <p><i class="fas fa-location-dot" style="color:var(--gold);font-size:0.75rem;"></i> ${prop.location}</p>
              <div class="prop-card-price gold-text">${prop.price}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function openPropModal(companyId, propIdx) {
  const company = companiesData.find(c => c.id === companyId);
  if (!company) return;
  const prop = company.properties[propIdx];
  if (!prop) return;

  document.getElementById('propModalImg').src = prop.img;
  document.getElementById('propModalImg').alt = prop.title;
  document.getElementById('propModalCompany').textContent = company.name;
  document.getElementById('propModalTitle').textContent = prop.title;
  document.getElementById('propModalLocation').innerHTML = `<i class="fas fa-location-dot"></i> ${prop.location}`;
  document.getElementById('propModalDesc').textContent = prop.desc;
  document.getElementById('propModalPrice').textContent = prop.price;

  const feats = [];
  if (prop.beds > 0) feats.push(`🛏️ ${prop.beds} Bedrooms`);
  if (prop.baths > 0) feats.push(`🚿 ${prop.baths} Bathrooms`);
  if (prop.sqm && prop.sqm !== 'N/A') feats.push(`📐 ${prop.sqm}`);
  feats.push(`🏷️ ${prop.type}`);
  feats.push(`📍 ${prop.location.split(',').pop().trim()}`);
  document.getElementById('propModalFeatures').innerHTML = feats.map(f => `<span class="prop-feat-tag">${f}</span>`).join('');

  const waMsg = `Hi Adagache Group, I'm interested in the *${prop.title}* listed under *${company.name}* (${prop.location}).\n\nAsking Price: *${prop.price}*\n\nPlease provide more details and arrange a viewing.`;
  document.getElementById('propModalWaBtn').href = `https://wa.me/2348030702010?text=${encodeURIComponent(waMsg)}`;

  document.getElementById('propModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePropModal() {
  document.getElementById('propModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  initMobileMenu();
  renderPlots();
  renderFeatures();
  renderCEOContent();
  populatePlotSelect();
  calculateInstallments();
  bindGlobalEvents();
  initScrollAnimations();
  renderPropertiesPage();

  // Properties modal close handlers
  const propCloseBtn = document.getElementById('propModalCloseBtn');
  if (propCloseBtn) propCloseBtn.addEventListener('click', closePropModal);
  const propModal = document.getElementById('propModal');
  if (propModal) {
    propModal.addEventListener('click', (e) => {
      if (e.target === propModal) closePropModal();
    });
  }

  const logoImg = document.getElementById('siteLogo');
  if (logoImg && logoImg.complete && logoImg.naturalWidth === 0) {
    logoImg.src = 'https://placehold.co/180x60/111111/d4af37?text=ADAGACHE';
  }
  const ceoImg = document.getElementById('ceoImage');
  if (ceoImg && ceoImg.complete && ceoImg.naturalWidth === 0) {
    ceoImg.src = 'https://placehold.co/800x1000/1a1a1a/d4af37?text=CEO+Jblingz';
  }
});

/* ==============================================
   INTERNATIONAL UPGRADE — JS ENHANCEMENTS
   Appended below existing logic, zero breaking changes
   ============================================== */

// ── Scroll Progress Bar ──
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });
}

// ── Header Scroll Shrink ──
function initHeaderShrink() {
  const header = document.querySelector('header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Back-to-Top Button ──
function initBackToTop() {
  const btn = document.createElement('a');
  btn.className = 'back-to-top';
  btn.href = '#';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Toast Notification ──
let toastTimer = null;
function showToast(message, icon = 'fa-circle-check') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Enhanced Scroll Reveal (replaces basic initScrollAnimations, keeps selectors) ──
function initEnhancedScrollReveal() {
  const targets = document.querySelectorAll(
    '.service-card, .why-item, .feature-card, .stat-box, .plot-card, ' +
    '.prop-card, .video-card, .why-stat-card, .hero-stat, .location-box, ' +
    '.section-head, .ceo-image-card, .ceo-content, .cta-section, ' +
    '.calc-container, .map-box'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger siblings in same grid
    const delay = (i % 4) * 0.1;
    el.style.transitionDelay = delay + 's';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ── Hero Entrance Animation ──
function initHeroEntrance() {
  const heroChildren = document.querySelectorAll('.hero-content > *');
  heroChildren.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 200);
  });
}

// ── Animated Number Counters ──
function animateCounter(el, target, suffix = '', duration = 1800) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = eased * target;
    el.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const statEls = document.querySelectorAll('.stat-box h3, .why-stat-card h3, .hero-stat h3');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      // Parse number and suffix (e.g. "87%", "300%", "12min", "$4.5M")
      const match = raw.match(/^([£₦$]?)(\d+\.?\d*)([%+MKkmkmin\s]*.*)$/);
      if (match) {
        const prefix = match[1];
        const num    = parseFloat(match[2]);
        const suffix = match[3];
        el.textContent = prefix + '0' + suffix;
        animateCounter({ set textContent(v) { el.textContent = prefix + v; } }, num, suffix);
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => observer.observe(el));
}

// ── Range input — live gold fill track ──
function initRangeFill() {
  function updateFill(range) {
    const min = +range.min || 0;
    const max = +range.max || 100;
    const val = +range.value;
    const pct = ((val - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(to right, var(--gold) ${pct}%, #252525 ${pct}%)`;
  }

  document.querySelectorAll('input[type="range"]').forEach(range => {
    updateFill(range);
    range.addEventListener('input', () => updateFill(range));
  });
}

// ── Keyboard trap in modals + ESC to close ──
function initModalKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('leadModal')?.classList.contains('active')) {
        closeLeadModal();
      }
      const propModal = document.getElementById('propModal');
      if (propModal?.classList.contains('active')) {
        closePropModal();
      }
    }
  });
}

// ── Lazy image loading ──
function initLazyImages() {
  const imgs = document.querySelectorAll('img[src]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('lazy');
          const temp = new Image();
          temp.onload = () => img.classList.add('loaded');
          temp.src = img.src;
          if (temp.complete) img.classList.add('loaded');
          io.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => io.observe(img));
  }
}

// ── Plot card subtle 3D tilt on hover ──
function initCardTilt() {
  document.querySelectorAll('.plot-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `
        translateY(-12px)
        rotateX(${-y * 6}deg)
        rotateY(${x * 6}deg)
      `;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── WhatsApp button toast intercept ──
function initWAToast() {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      showToast('Opening WhatsApp…', 'fa-whatsapp');
    });
  });
}

// ── Smooth anchor scrolling with header offset ──
function initSmoothAnchors() {
  const header = document.querySelector('header');
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── Mount all upgrades after DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initHeaderShrink();
  initBackToTop();
  initEnhancedScrollReveal();
  initHeroEntrance();
  initCounters();
  initRangeFill();
  initModalKeyboard();
  initLazyImages();
  initCardTilt();
  initWAToast();
  initSmoothAnchors();
});

