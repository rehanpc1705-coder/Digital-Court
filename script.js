/* ==========================================================================
   DIGITAL COURT MANAGEMENT SYSTEM (e-COURTS PROTOTYPE)
   Core Application Engine & Judicial Workflow Simulator
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. SEED DATA & LOCAL STORAGE PERSISTENCE
   -------------------------------------------------------------------------- */

const DEFAULT_CASES = [
  {
    id: "case-101",
    number: "DC/2026/0101",
    cnr: "DLHC01-002101-2026",
    title: "A.K. Infrastructure Ltd. vs. State Urban Development Authority",
    category: "Commercial",
    priority: "Urgent",
    judge: "Hon'ble Justice Rajesh Sharma",
    courtroom: "Courtroom 04 (Commercial Bench)",
    petitioner: "A.K. Infrastructure Ltd.",
    petitionerAdvocate: "Adv. Raghavan Nair (D/142/2012)",
    respondent: "State Urban Development Authority",
    respondentAdvocate: "Adv. Sunita Deshmukh (Standing Counsel)",
    filingDate: "2026-08-14",
    date: "2026-10-06",
    timeSlot: "10:30 AM",
    status: "Under Trial",
    stage: "Final Arguments",
    description: "Commercial recovery suit and breach of EPC contract for Phase II Metro Corridor exceeding 48 Crores.",
    prayer: "Direction to release liquidated damages escrow fund and grant interim protection against invocation of bank guarantee.",
    timeline: [
      { date: "2026-08-14", event: "e-Filing verified & CNR generated", officer: "Court Registry" },
      { date: "2026-08-20", event: "Summons served on respondent via digital notice", officer: "Process Server" },
      { date: "2026-09-12", event: "Written Statement and counter-claim placed on record", officer: "Registrar Bench" },
      { date: "2026-10-06", event: "Parties heard on application for interim injunction; listed for dictation", officer: "Hon'ble Justice Sharma" }
    ],
    documents: [
      { name: "Original Plaint & Agreement Ex-A.pdf", size: "4.8 MB", date: "2026-08-14" },
      { name: "Bank Guarantee Verification Slip.pdf", size: "1.2 MB", date: "2026-08-14" },
      { name: "Written Statement by State.pdf", size: "3.1 MB", date: "2026-09-12" }
    ],
    orders: [
      {
        orderId: "ORD-2026-881",
        date: "2026-09-18",
        type: "Interim Relief",
        summary: "Respondent restrained from invoking unconditional Bank Guarantee No. 9012 till next date of hearing.",
        bench: "Hon'ble Justice Rajesh Sharma"
      }
    ]
  },
  {
    id: "case-102",
    number: "DC/2026/0102",
    cnr: "DLHC01-002102-2026",
    title: "State Cyber Cell vs. Vikramaditya Sen & Ors.",
    category: "Cyber",
    priority: "Urgent",
    judge: "Hon'ble Justice Anand Mehta",
    courtroom: "Courtroom 03 (Criminal & Bail)",
    petitioner: "State Cyber Investigation Cell",
    petitionerAdvocate: "Adv. K.P. Verma (Special Public Prosecutor)",
    respondent: "Vikramaditya Sen & Ors.",
    respondentAdvocate: "Adv. Feroze Khan (Senior Counsel)",
    filingDate: "2026-09-01",
    date: "2026-10-06",
    timeSlot: "11:45 AM",
    status: "Pending",
    stage: "Bail Hearing & Remand",
    description: "Prosecution under Information Technology Act sections 66C/66D regarding unauthorized cryptocurrency API intrusion.",
    prayer: "Anticipatory bail petition filed by accused petitioner alleging bona fide white-hat security audit.",
    timeline: [
      { date: "2026-09-01", event: "FIR placed on docket; charge sheet submitted", officer: "Cyber Crime Unit" },
      { date: "2026-09-22", event: "Digital forensic drive submitted to forensic laboratory", officer: "Investigation Officer" },
      { date: "2026-10-06", event: "Regular bail arguments heard in part", officer: "Hon'ble Justice Mehta" }
    ],
    documents: [
      { name: "Forensic Hash Examination Report.pdf", size: "6.2 MB", date: "2026-09-22" },
      { name: "Anticipatory Bail Application.pdf", size: "2.1 MB", date: "2026-09-28" }
    ],
    orders: [
      {
        orderId: "ORD-2026-894",
        date: "2026-10-02",
        type: "Bail Granted",
        summary: "Interim transit bail granted upon furnishing surety of INR 1,00,000 and surrender of passport.",
        bench: "Hon'ble Justice Anand Mehta"
      }
    ]
  },
  {
    id: "case-103",
    number: "DC/2026/0103",
    cnr: "DLHC01-002103-2026",
    title: "Clean River Coalition vs. Ministry of Environment & Forest",
    category: "Constitutional",
    priority: "Fast-Track",
    judge: "Hon'ble Chief Justice K.G. Chandran",
    courtroom: "Courtroom 01 (Chief Justice Bench)",
    petitioner: "Clean River Coalition (PIL)",
    petitionerAdvocate: "Adv. Meenakshi Sundaram",
    respondent: "Ministry of Environment & Forest",
    respondentAdvocate: "Solicitor General of India",
    filingDate: "2026-06-11",
    date: "2026-10-06",
    timeSlot: "02:15 PM",
    status: "Reserved for Judgment",
    stage: "Pronouncement of Judgment",
    description: "Public Interest Litigation seeking mandamus against industrial effluent discharge in Yamuna basin.",
    prayer: "Strict implementation of Zero Liquid Discharge standards and appointment of an independent monitoring committee.",
    timeline: [
      { date: "2026-06-11", event: "PIL admitted by Division Bench", officer: "Chief Justice Court" },
      { date: "2026-07-15", event: "Central Pollution Control Board inspection affidavit filed", officer: "CPCB Counsel" },
      { date: "2026-09-25", event: "Arguments concluded by all parties; Judgment reserved", officer: "Division Bench" }
    ],
    documents: [
      { name: "Water Quality Spectrometry Report.pdf", size: "14.1 MB", date: "2026-07-15" },
      { name: "Written Submissions of Amicus Curiae.pdf", size: "3.5 MB", date: "2026-09-20" }
    ],
    orders: [
      {
        orderId: "ORD-2026-905",
        date: "2026-09-25",
        type: "Reserved for Judgment",
        summary: "Heard arguments at length. Liberty granted to file brief notes within 3 days. Judgment reserved.",
        bench: "Hon'ble Chief Justice K.G. Chandran"
      }
    ]
  },
  {
    id: "case-104",
    number: "DC/2026/0104",
    cnr: "DLHC01-002104-2026",
    title: "Dr. Arvind Roy vs. Metro Super-Speciality Hospital",
    category: "Civil",
    priority: "Regular",
    judge: "Hon'ble Justice S.K. Patil",
    courtroom: "Courtroom 02 (Writ & Constitutional)",
    petitioner: "Dr. Arvind Roy",
    petitionerAdvocate: "Adv. Rohini Murthy",
    respondent: "Metro Super-Speciality Hospital",
    respondentAdvocate: "Adv. Devraj Singh",
    filingDate: "2026-05-19",
    date: "2026-10-07",
    timeSlot: "10:30 AM",
    status: "Under Trial",
    stage: "Cross-Examination of Witnesses",
    description: "Suit for damages arising from alleged breach of service tenure and wrongful termination of Chief Cardiac Surgeon.",
    prayer: "Reinstatement with back wages and exemplary damages of 5 Crores.",
    timeline: [
      { date: "2026-05-19", event: "Suit instituted with court fee clearance", officer: "Registry" },
      { date: "2026-07-10", event: "Issues framed under Order XIV CPC", officer: "Bench" },
      { date: "2026-09-14", event: "Petitioner witness 1 examined in chief", officer: "Court Commissioner" }
    ],
    documents: [
      { name: "Hospital Bylaws & Contract.pdf", size: "2.8 MB", date: "2026-05-19" },
      { name: "Affidavit of Evidence PW-1.pdf", size: "1.4 MB", date: "2026-09-10" }
    ],
    orders: []
  },
  {
    id: "case-105",
    number: "DC/2026/0105",
    cnr: "DLHC01-002105-2026",
    title: "Heritage Estates Pvt Ltd vs. Municipal Corporation",
    category: "Commercial",
    priority: "Regular",
    judge: "Hon'ble Justice Rajesh Sharma",
    courtroom: "Courtroom 04 (Commercial Bench)",
    petitioner: "Heritage Estates Pvt Ltd",
    petitionerAdvocate: "Adv. Anil Bhasin",
    respondent: "Municipal Corporation of Delhi",
    respondentAdvocate: "Adv. Shweta Ghosh",
    filingDate: "2026-03-10",
    date: "2026-09-28",
    timeSlot: "02:15 PM",
    status: "Completed",
    stage: "Disposed / Decided",
    description: "Challenge against municipal property reassessment with retrospective cess imposition.",
    prayer: "Quashing of assessment notice dated 14-01-2026.",
    timeline: [
      { date: "2026-03-10", event: "Writ petition filed", officer: "Registry" },
      { date: "2026-05-14", event: "Counter-affidavit placed on record", officer: "State" },
      { date: "2026-09-28", event: "Petition allowed with directions", officer: "Hon'ble Justice Sharma" }
    ],
    documents: [
      { name: "Original Tax Demand Notice.pdf", size: "1.1 MB", date: "2026-03-10" }
    ],
    orders: [
      {
        orderId: "ORD-2026-772",
        date: "2026-09-28",
        type: "Disposed",
        summary: "Petition allowed. Retrospective demand set aside as ultra vires. Fresh assessment ordered within 60 days.",
        bench: "Hon'ble Justice Rajesh Sharma"
      }
    ]
  },
  {
    id: "case-106",
    number: "DC/2026/0106",
    cnr: "DLHC01-002106-2026",
    title: "Pooja Malhotra vs. Rohit Malhotra",
    category: "Family",
    priority: "Regular",
    judge: "Hon'ble Justice S.K. Patil",
    courtroom: "Courtroom 02 (Writ & Constitutional)",
    petitioner: "Pooja Malhotra",
    petitionerAdvocate: "Adv. Nidhi Saxena",
    respondent: "Rohit Malhotra",
    respondentAdvocate: "Adv. Pradeep Rawat",
    filingDate: "2026-07-22",
    date: "2026-10-08",
    timeSlot: "11:45 AM",
    status: "Pending",
    stage: "Mediation Report Consideration",
    description: "Petition under Hindu Marriage Act for custody of minor children and permanent alimony settlement.",
    prayer: "Sole guardianship custody of minor children and maintenance pendente lite.",
    timeline: [
      { date: "2026-07-22", event: "Petition filed", officer: "Family Court Registry" },
      { date: "2026-08-18", event: "Matter referred to Supreme Court Mediation Centre", officer: "Bench" }
    ],
    documents: [
      { name: "Income Affidavit & Marriage Certificate.pdf", size: "3.4 MB", date: "2026-07-22" }
    ],
    orders: []
  }
];

const PRECEDENTS_DATA = [
  {
    citation: "2024 SCC OnLine SC 1420",
    title: "State of Maharashtra vs. Union of India & Anr.",
    principle: "Interim protection against invocation of unconditional bank guarantees is permissible only in established cases of egregious fraud or irretrievable injustice.",
    category: "Commercial"
  },
  {
    citation: "AIR 2023 SC 4519",
    title: "A.C. Muthiah vs. Board of Control for Cricket",
    principle: "Electronic service of summons through certified e-Courts portal constitutes valid service under Order V Rule 9 of the Code of Civil Procedure.",
    category: "Civil"
  },
  {
    citation: "(2025) 3 SCC 89",
    title: "In Re: Guidelines for Virtual Court Hearings & Hybrid Access",
    principle: "Hybrid hearing access is an integral facet of open justice and the fundamental right to access courts under Article 21.",
    category: "Constitutional"
  },
  {
    citation: "2026 Cr.L.J. 1102",
    title: "Central Bureau of Investigation vs. Digital Vault Corp",
    principle: "Admissibility of electronic records and hash value validation under Section 65B without secondary certificate where source ledger is decentralized.",
    category: "Criminal"
  }
];

// Load cases from localStorage or seed
var cases = [];
function initDataStore() {
  const saved = localStorage.getItem("digitalCourt_cases");
  if (saved) {
    try {
      cases = JSON.parse(saved);
    } catch (e) {
      cases = [...DEFAULT_CASES];
    }
  } else {
    cases = [...DEFAULT_CASES];
    saveToStorage();
  }
}

function saveToStorage() {
  localStorage.setItem("digitalCourt_cases", JSON.stringify(cases));
}

function resetPrototypeData() {
  if (confirm("Reset case docket and records back to initial default prototype state?")) {
    cases = JSON.parse(JSON.stringify(DEFAULT_CASES));
    saveToStorage();
    updateDashboard();
    renderCasesDocket();
    renderCauseList();
    renderJudgments();
    showToast("Prototype data reset to fresh defaults", "info");
  }
}

/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------
   2. AUTHENTICATION & ROLE MANAGEMENT (Judge, Lawyer, Litigant, Admin, Clerk)
   -------------------------------------------------------------------------- */

let currentUser = {
  name: "Hon'ble Justice Rajesh Sharma",
  role: "Judge",
  code: "JS",
  title: "Presiding Judicial Officer",
  courtroom: "Courtroom 04 (Commercial Bench)"
};

function setRoleSession(role) {
  if (role === "Judge") {
    currentUser = {
      name: "Hon'ble Justice Rajesh Sharma",
      role: "Judge",
      code: "JS",
      title: "Presiding Judicial Officer",
      courtroom: "Courtroom 04 (Commercial Bench)"
    };
  } else if (role === "Lawyer") {
    currentUser = {
      name: "Adv. Raghavan Nair",
      role: "Lawyer",
      code: "RN",
      title: "Senior Counsel (Bar # D/142/2012)",
      barId: "D/142/2012"
    };
  } else if (role === "Litigant") {
    currentUser = {
      name: "A.K. Infrastructure Ltd.",
      role: "Litigant",
      code: "AK",
      title: "Petitioner Litigant",
      caseNumber: "DC/2026/0101"
    };
  } else if (role === "Clerk") {
    currentUser = {
      name: "Sunil Verma (Court Clerk)",
      role: "Clerk",
      code: "SV",
      title: "Bench Clerk & Stenographer",
      courtroom: "Courtroom 04"
    };
  } else {
    currentUser = {
      name: "Registrar General",
      role: "Admin",
      code: "RG",
      title: "Court Administrator",
      dept: "High Court Registry"
    };
  }
}

function fillLogin(user, pass, role) {
  document.getElementById("username").value = user;
  document.getElementById("password").value = pass;
  setRoleSession(role);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const u = document.getElementById("username").value.trim().toLowerCase();
  const p = document.getElementById("password").value.trim();

  if (u === "judge" && p === "judge123") {
    setRoleSession("Judge");
  } else if (u === "lawyer" && p === "lawyer123") {
    setRoleSession("Lawyer");
  } else if (u === "litigant" && p === "litigant123") {
    setRoleSession("Litigant");
  } else if (u === "clerk" && p === "clerk123") {
    setRoleSession("Clerk");
  } else if (u === "admin" && p === "admin123") {
    setRoleSession("Admin");
  } else {
    // Default fallback to Judge or role session
    if (!currentUser.role) setRoleSession("Judge");
  }

  applyUserSession();
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboardPage").classList.remove("hidden");

  // Initialize all views
  updateDashboard();
  renderCasesDocket();
  renderCauseList();
  renderJudgments();
  renderPrecedents();
  populateNoticeCaseSelect();
  populateJudgeFilter();
  startClock();
  startVirtualCourtSimulation();

  showToast(`Welcome, ${currentUser.name} (${currentUser.role})`, "success");
});

function applyUserSession() {
  document.getElementById("userNameDisplay").textContent = currentUser.name;
  document.getElementById("userAvatarText").textContent = currentUser.code;
  document.getElementById("roleSelector").value = currentUser.role;

  const alertBadge = document.getElementById("roleAlertBadge");
  const alertText = document.getElementById("roleAlertText");
  if (alertBadge && alertText) {
    if (currentUser.role === "Judge") {
      alertBadge.textContent = "Bench Session";
      alertText.innerHTML = `<strong>Courtroom 04 Active:</strong> ${currentUser.name} presiding. 4 matters listed for hearing today.`;
    } else if (currentUser.role === "Lawyer") {
      alertBadge.textContent = "Counsel Notice";
      alertText.innerHTML = `<strong>Cause List Alert:</strong> You have 1 matter listed today (DC/2026/0101) at 10:30 AM in Courtroom 04.`;
    } else if (currentUser.role === "Litigant") {
      alertBadge.textContent = "Case Alert";
      alertText.innerHTML = `<strong>Hearing Today:</strong> Your matter DC/2026/0101 is scheduled for oral arguments at 10:30 AM in Courtroom 04.`;
    } else if (currentUser.role === "Clerk") {
      alertBadge.textContent = "Steno Roster";
      alertText.innerHTML = `<strong>Courtroom 04 Board:</strong> Cause list sequence active. Live minutes recording enabled.`;
    } else {
      alertBadge.textContent = "Admin Notice";
      alertText.innerHTML = `<strong>Registry Operational:</strong> 12 benches active today. Digital case filing & e-Challan payment gateway live.`;
    }
  }
}

function switchUserRole(newRole) {
  setRoleSession(newRole);
  applyUserSession();
  updateDashboard();
  showToast(`Switched perspective to ${newRole}`, "info");
}

function logout() {
  document.getElementById("dashboardPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("loginMessage").textContent = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

/* --------------------------------------------------------------------------
   3. NAVIGATION & UI UTILITIES
   -------------------------------------------------------------------------- */

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
  }

  // Update active sidebar nav link
  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("onclick") && link.getAttribute("onclick").includes(sectionId)) {
      link.classList.add("active");
    }
  });

  // Close mobile sidebar if open
  document.getElementById("sidebar").classList.remove("mobile-open");

  // Specific section refresh triggers
  if (sectionId === "dashboard") updateDashboard();
  if (sectionId === "cases") renderCasesDocket();
  if (sectionId === "causeList") renderCauseList();
  if (sectionId === "judgments") renderJudgments();
  if (sectionId === "notices") populateNoticeCaseSelect();
  if (sectionId === "precedents") renderPrecedents();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("mobile-open");
}

function startClock() {
  function tick() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const el = document.getElementById("liveClockDisplay");
    if (el) el.textContent = now.toLocaleDateString("en-US", options);
  }
  tick();
  setInterval(tick, 1000);
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <div>${message}</div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.remove) toast.remove();
    }, 300);
  }, 3500);
}

function openHelpModal() {
  document.getElementById("helpModal").classList.remove("hidden");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

/* --------------------------------------------------------------------------
   4. DYNAMIC ROLE DASHBOARD ENGINE (Judge, Lawyer, Litigant, Admin, Clerk)
   -------------------------------------------------------------------------- */

function updateDashboard() {
  document.getElementById("navCaseCount").textContent = cases.length;
  const todayCount = cases.filter(c => c.date === "2026-10-06").length;
  document.getElementById("navCauseCount").textContent = todayCount;

  renderRoleDashboard();
}

function renderRoleDashboard() {
  const container = document.getElementById("roleDashboardContainer");
  if (!container) return;

  if (currentUser.role === "Judge") {
    renderJudgeDashboard(container);
  } else if (currentUser.role === "Lawyer") {
    renderLawyerDashboard(container);
  } else if (currentUser.role === "Litigant") {
    renderLitigantDashboard(container);
  } else if (currentUser.role === "Clerk") {
    renderClerkDashboard(container);
  } else {
    renderAdminDashboard(container);
  }
}

/* ==========================================================================
   ROLE 1: JUDGE DASHBOARD
   ========================================================================== */
function renderJudgeDashboard(container) {
  const myBenchCases = cases.filter(c => c.judge.includes("Sharma") || c.courtroom.includes("04"));
  const todayBenchHearings = myBenchCases.filter(c => c.date === "2026-10-06");
  const reservedCount = myBenchCases.filter(c => c.status === "Reserved for Judgment").length;
  const disposedCount = myBenchCases.filter(c => c.status === "Completed" || c.status === "Disposed").length;

  container.innerHTML = `
    <!-- Judge Hero Banner -->
    <div class="role-hero-banner judge">
      <div class="role-hero-content">
        <div class="role-avatar-badge">⚖️</div>
        <div class="role-hero-text">
          <h3>${currentUser.name} — Commercial & Appellate Division</h3>
          <p>Presiding Judicial Officer • Courtroom 04 • Daily Cause List Active</p>
        </div>
      </div>
      <div class="role-hero-actions">
        <button class="btn-table-action" style="background:rgba(255,255,255,0.2); color:#fff; border:none;" onclick="openOrderModal(null)">
          + Pass Order
        </button>
        <button class="btn-header-action" onclick="showSection('virtualCourt')">
          <svg width="14" height="14"><use href="#icon-video"></use></svg>
          Preside Virtual Bench
        </button>
      </div>
    </div>

    <!-- Judge KPI Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Today's Bench Hearings</span>
          <span class="stat-value">${todayBenchHearings.length}</span>
          <span class="stat-trend positive">● Courtroom 04 Active Roster</span>
        </div>
        <div class="stat-icon navy"><svg width="22" height="22"><use href="#icon-calendar"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Reserved for Judgment</span>
          <span class="stat-value">${reservedCount}</span>
          <span class="stat-trend warning">⚡ Dictation Pending</span>
        </div>
        <div class="stat-icon amber"><svg width="22" height="22"><use href="#icon-orders"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Bench Disposals (Month)</span>
          <span class="stat-value">${disposedCount + 6}</span>
          <span class="stat-trend positive">↑ 82% disposal efficiency</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-check"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Urgent Mentions</span>
          <span class="stat-value">2</span>
          <span class="stat-trend" style="color:var(--accent-rose);">● Motion Window Open</span>
        </div>
        <div class="stat-icon rose"><svg width="22" height="22"><use href="#icon-gavel"></use></svg></div>
      </div>
    </div>

    <!-- Judge Quick Actions -->
    <div class="quick-tools-grid">
      <div class="quick-tool-btn" onclick="openOrderModal(null)">
        <svg width="22" height="22"><use href="#icon-orders"></use></svg>
        <span>Dictate & Sign Order Sheet</span>
      </div>
      <div class="quick-tool-btn" onclick="strikeVirtualGavel()">
        <svg width="22" height="22"><use href="#icon-gavel"></use></svg>
        <span>Strike Gavel / Call To Order</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('virtualCourt')">
        <svg width="22" height="22"><use href="#icon-video"></use></svg>
        <span>Enter Virtual Courtroom</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('causeList')">
        <svg width="22" height="22"><use href="#icon-calendar"></use></svg>
        <span>View Full Court Roster</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('precedents')">
        <svg width="22" height="22"><use href="#icon-book"></use></svg>
        <span>Search Judicial Precedents</span>
      </div>
    </div>

    <!-- Today's Bench Hearing Roster (Courtroom 04) -->
    <div class="cause-list-preview-card">
      <div class="dashboard-card-header">
        <div>
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-calendar"></use></svg>
            Today's Listed Matters Before Justice Sharma (Courtroom 04)
          </h3>
          <div class="dashboard-card-subtitle">Daily judicial cause list sequence and hearing controls</div>
        </div>
        <button class="btn-table-action" onclick="showSection('causeList')">Open Daily Cause List →</button>
      </div>

      <div class="table-responsive">
        <table class="court-table">
          <thead>
            <tr>
              <th>Item #</th>
              <th>Case No & CNR</th>
              <th>Parties & Senior Counsels</th>
              <th>Time Slot</th>
              <th>Stage of Matter</th>
              <th>Live Status</th>
              <th>Bench Judicial Actions</th>
            </tr>
          </thead>
          <tbody>
            ${myBenchCases.map((c, idx) => `
              <tr>
                <td><strong>Item #${idx + 1}</strong></td>
                <td>
                  <span class="case-number-link" onclick="openCaseDossier('${c.number}')">${c.number}</span><br>
                  <span class="case-cnr-tag">${c.cnr}</span>
                </td>
                <td>
                  <span class="case-title-main">${c.title}</span>
                  <span class="case-advocates">${c.petitionerAdvocate} vs ${c.respondentAdvocate}</span>
                </td>
                <td><strong style="color:var(--court-navy-800);">${c.timeSlot || '10:30 AM'}</strong></td>
                <td><span class="badge badge-trial">${c.stage}</span></td>
                <td>
                  ${idx === 0 
                    ? '<span class="badge" style="background:#dcfce7; color:#166534;"><span class="status-dot"></span> Hearing in Progress</span>'
                    : '<span class="badge badge-regular">Listed for Bench</span>'}
                </td>
                <td>
                  <div class="action-buttons-cell">
                    <button class="btn-table-action" onclick="openOrderModal('${c.number}')" title="Pass Order">
                      <svg width="12" height="12"><use href="#icon-orders"></use></svg>
                      Pass Order
                    </button>
                    <button class="btn-table-action" onclick="judgeAdjournCase('${c.number}')" title="Adjourn with Date">
                      Adjourn
                    </button>
                    <button class="btn-table-action" onclick="openCaseDossier('${c.number}')" title="View Dossier">
                      Dossier
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Judgments Reserved Chamber -->
    <div class="dashboard-card" style="margin-bottom:24px;">
      <div class="dashboard-card-header">
        <div>
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-orders"></use></svg>
            Chamber Pronouncements — Judgments Reserved
          </h3>
          <div class="dashboard-card-subtitle">Matters where oral arguments are concluded and judgment is reserved for order dictation</div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="court-table">
          <thead>
            <tr>
              <th>Case Record</th>
              <th>Parties</th>
              <th>Arguments Concluded On</th>
              <th>Subject Matter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="case-number-link" onclick="openCaseDossier('DC/2026/0103')">DC/2026/0103</span><br>
                <span class="case-cnr-tag">DLHC01-002103-2026</span>
              </td>
              <td><strong>Clean River Coalition vs. Ministry of Environment</strong></td>
              <td>25-Sep-2026</td>
              <td>PIL on industrial effluent discharge and Zero Liquid Discharge norms</td>
              <td>
                <button class="btn-table-action" style="background:var(--court-gold-500); color:#fff; border:none;" onclick="openOrderModal('DC/2026/0103')">
                  Pronounce Final Judgment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ==========================================================================
   ROLE 2: LAWYER (ADVOCATE) DASHBOARD
   ========================================================================== */
function renderLawyerDashboard(container) {
  const lawyerCases = cases.filter(c => 
    c.petitionerAdvocate.includes("Nair") || 
    c.respondentAdvocate.includes("Nair") ||
    c.id === "case-101" || c.id === "case-105"
  );

  container.innerHTML = `
    <!-- Lawyer Hero Banner -->
    <div class="role-hero-banner lawyer">
      <div class="role-hero-content">
        <div class="role-avatar-badge">💼</div>
        <div class="role-hero-text">
          <h3>${currentUser.name} (Bar Enrollment: D/142/2012)</h3>
          <p>Senior Counsel • High Court of Judicature Bar Association • Active Counsel in ${lawyerCases.length} Matters</p>
        </div>
      </div>
      <div class="role-hero-actions">
        <button class="btn-table-action" style="background:rgba(255,255,255,0.2); color:#fff; border:none;" onclick="showSection('addCase')">
          + e-File New Petition
        </button>
        <button class="btn-header-action" onclick="openFilePleadingModal(null)">
          File Additional Pleading
        </button>
      </div>
    </div>

    <!-- Lawyer KPI Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">My Client Cases</span>
          <span class="stat-value">${lawyerCases.length}</span>
          <span class="stat-trend positive">● All active matters</span>
        </div>
        <div class="stat-icon navy"><svg width="22" height="22"><use href="#icon-docket"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Hearings Listed Today</span>
          <span class="stat-value">1</span>
          <span class="stat-trend positive">● 10:30 AM in Courtroom 04</span>
        </div>
        <div class="stat-icon blue"><svg width="22" height="22"><use href="#icon-calendar"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Pleadings & Rejoinders</span>
          <span class="stat-value">4 Filed</span>
          <span class="stat-trend positive">✓ Digitally Signed & Hash Verified</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-check"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Certified Orders Ready</span>
          <span class="stat-value">2</span>
          <span class="stat-trend warning">● Available for download</span>
        </div>
        <div class="stat-icon amber"><svg width="22" height="22"><use href="#icon-orders"></use></svg></div>
      </div>
    </div>

    <!-- Lawyer Quick Actions -->
    <div class="quick-tools-grid">
      <div class="quick-tool-btn" onclick="showSection('addCase')">
        <svg width="22" height="22"><use href="#icon-file-plus"></use></svg>
        <span>+ e-File New Client Petition</span>
      </div>
      <div class="quick-tool-btn" onclick="openFilePleadingModal(null)">
        <svg width="22" height="22"><use href="#icon-orders"></use></svg>
        <span>Upload Rejoinder / Affidavit</span>
      </div>
      <div class="quick-tool-btn" onclick="lawyerRequestUrgent('DC/2026/0101')">
        <svg width="22" height="22"><use href="#icon-gavel"></use></svg>
        <span>Request Urgent Mentioning</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('virtualCourt')">
        <svg width="22" height="22"><use href="#icon-video"></use></svg>
        <span>Join Virtual Hearing Room</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('precedents')">
        <svg width="22" height="22"><use href="#icon-book"></use></svg>
        <span>Search Citations Library</span>
      </div>
    </div>

    <!-- My Client Cases Table -->
    <div class="table-card" style="margin-bottom:24px;">
      <div class="dashboard-card-header" style="padding:18px 20px 0;">
        <div>
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-docket"></use></svg>
            My Active Client Cases & Dockets
          </h3>
          <div class="dashboard-card-subtitle">Active legal representations where you are listed as counsel on record</div>
        </div>
        <button class="btn-header-action" onclick="openFilePleadingModal(null)">+ Upload Pleading</button>
      </div>

      <div class="table-responsive">
        <table class="court-table">
          <thead>
            <tr>
              <th>Case Record</th>
              <th>Client (Representation)</th>
              <th>Opposite Party & Counsel</th>
              <th>Bench & Courtroom</th>
              <th>Next Hearing</th>
              <th>Status</th>
              <th>Counsel Actions</th>
            </tr>
          </thead>
          <tbody>
            ${lawyerCases.map(c => `
              <tr>
                <td>
                  <span class="case-number-link" onclick="openCaseDossier('${c.number}')">${c.number}</span><br>
                  <span class="case-cnr-tag">${c.cnr}</span>
                </td>
                <td>
                  <strong>${c.petitioner}</strong><br>
                  <span style="font-size:11px; color:var(--court-gold-600);">Representing Petitioner</span>
                </td>
                <td>
                  ${c.respondent}<br>
                  <span style="font-size:11px; color:var(--slate-500);">${c.respondentAdvocate}</span>
                </td>
                <td>
                  <span style="font-weight:600; font-size:12px;">${c.courtroom.split('(')[0]}</span><br>
                  <span style="font-size:11px; color:var(--slate-500);">${c.judge}</span>
                </td>
                <td>
                  <strong>${c.date}</strong><br>
                  <span style="font-size:11px; color:var(--slate-500);">${c.timeSlot || '10:30 AM'}</span>
                </td>
                <td><span class="badge badge-trial">${c.status}</span></td>
                <td>
                  <div class="action-buttons-cell">
                    <button class="btn-table-action" onclick="openFilePleadingModal('${c.number}')" title="File Pleading">
                      + Pleading
                    </button>
                    <button class="btn-table-action" onclick="openCaseDossier('${c.number}')" title="View Dossier">
                      Dossier
                    </button>
                    <button class="btn-table-action" onclick="showSection('virtualCourt')" title="Join Hearing">
                      Virtual Court
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ==========================================================================
   ROLE 3: LITIGANT (CITIZEN / PETITIONER) DASHBOARD
   ========================================================================== */
function renderLitigantDashboard(container) {
  const myCase = cases.find(c => c.number === "DC/2026/0101") || cases[0];

  container.innerHTML = `
    <!-- Litigant Hero Banner -->
    <div class="role-hero-banner litigant">
      <div class="role-hero-content">
        <div class="role-avatar-badge">👤</div>
        <div class="role-hero-text">
          <h3>${currentUser.name} (Petitioner Litigant)</h3>
          <p>Active Case: ${myCase.number} • CNR: ${myCase.cnr} • Courtroom 04 (Commercial Bench)</p>
        </div>
      </div>
      <div class="role-hero-actions">
        <button class="btn-table-action" style="background:rgba(255,255,255,0.25); color:#fff; border:none;" onclick="openFeePaymentModal('${myCase.number}')">
          💳 Pay Court Fees
        </button>
        <button class="btn-header-action" style="background:#065f46;" onclick="showSection('virtualCourt')">
          Join Virtual Hearing
        </button>
      </div>
    </div>

    <!-- Visual 5-Step Judicial Milestone Stepper -->
    <div class="stepper-card">
      <div class="stepper-header">
        <div>
          <h4 style="font-size:15px; font-weight:700;">Your Lawsuit Milestone Progress Tracker</h4>
          <p style="font-size:11.5px; color:var(--slate-500);">Real-time statutory stage tracking for Case: <strong>${myCase.number}</strong></p>
        </div>
        <span class="badge" style="background:#dcfce7; color:#166534;"><span class="status-dot"></span> Oral Arguments Underway Today</span>
      </div>

      <div class="stepper-track">
        <div class="stepper-track-progress" style="width: 75%;"></div>
        <div class="step-node completed">
          <div class="step-circle">✓</div>
          <div class="step-title">1. e-Filing</div>
          <div class="step-desc">CNR Minted (14 Aug)</div>
        </div>
        <div class="step-node completed">
          <div class="step-circle">✓</div>
          <div class="step-title">2. Scrutiny</div>
          <div class="step-desc">Cleared by Registry</div>
        </div>
        <div class="step-node completed">
          <div class="step-circle">✓</div>
          <div class="step-title">3. Summons</div>
          <div class="step-desc">Served on State</div>
        </div>
        <div class="step-node active">
          <div class="step-circle">4</div>
          <div class="step-title">4. Arguments</div>
          <div class="step-desc">Today 10:30 AM</div>
        </div>
        <div class="step-node">
          <div class="step-circle">5</div>
          <div class="step-title">5. Judgment</div>
          <div class="step-desc">Decree Pending</div>
        </div>
      </div>
    </div>

    <!-- Litigant KPI Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Current Legal Stage</span>
          <span class="stat-value" style="font-size:22px;">Final Arguments</span>
          <span class="stat-trend positive">● Case Status: Under Trial</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-scales"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Next Hearing Schedule</span>
          <span class="stat-value" style="font-size:22px;">Today 10:30 AM</span>
          <span class="stat-trend warning">● Courtroom 04 (Commercial)</span>
        </div>
        <div class="stat-icon blue"><svg width="22" height="22"><use href="#icon-calendar"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Outstanding Court Fees</span>
          <span class="stat-value" style="color:var(--accent-emerald);">₹0.00</span>
          <span class="stat-trend positive">✓ Fully Paid (Receipt #8812)</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-check"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Orders Passed</span>
          <span class="stat-value">1 Granted</span>
          <span class="stat-trend positive">✓ Interim Protection Granted</span>
        </div>
        <div class="stat-icon navy"><svg width="22" height="22"><use href="#icon-orders"></use></svg></div>
      </div>
    </div>

    <!-- Litigant Case Details & Documents Row -->
    <div class="dashboard-grid-2col">
      <div class="dashboard-card">
        <div class="dashboard-card-header">
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-docket"></use></svg>
            Case Summary & Legal Representation
          </h3>
        </div>
        <div style="font-size:13px; line-height:1.6; color:var(--slate-700);">
          <p><strong>Title:</strong> ${myCase.title}</p>
          <p style="margin-top:6px;"><strong>Presiding Bench:</strong> ${myCase.judge} (${myCase.courtroom})</p>
          <p style="margin-top:6px;"><strong>Your Lead Advocate:</strong> ${myCase.petitionerAdvocate}</p>
          <p style="margin-top:6px;"><strong>Dispute Summary:</strong> ${myCase.description}</p>
          <div style="margin-top:16px; display:flex; gap:10px;">
            <button class="btn-primary" style="flex:1;" onclick="openCaseDossier('${myCase.number}')">
              View Complete Case Dossier
            </button>
            <button class="btn-table-action" onclick="openFeePaymentModal('${myCase.number}')">
              Pay Additional Fees
            </button>
          </div>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="dashboard-card-header">
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-orders"></use></svg>
            Official Court Orders & Certified Copies
          </h3>
        </div>
        <div>
          ${(myCase.orders || []).map(o => `
            <div style="background:var(--slate-50); border:1px solid var(--slate-200); padding:12px; border-radius:var(--radius-md); margin-bottom:10px;">
              <div style="display:flex; justify-content:space-between;">
                <strong>${o.orderId}: ${o.type}</strong>
                <span style="font-size:11px; color:var(--slate-400);">${o.date}</span>
              </div>
              <p style="font-size:11.5px; color:var(--slate-600); margin:4px 0 8px;">${o.summary}</p>
              <button class="btn-table-action" onclick="viewOfficialOrder('${o.orderId}')">
                Download Certified Order Sheet (PDF)
              </button>
            </div>
          `).join("")}
          <div style="margin-top:12px; text-align:center;">
            <span style="font-size:11px; color:var(--slate-400);">Need legal guidance? Call National Legal Services Portal: 15100</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   ROLE 4: ADMIN (REGISTRAR GENERAL) DASHBOARD
   ========================================================================== */
function renderAdminDashboard(container) {
  const total = cases.length;
  const pending = cases.filter(c => c.status === "Pending" || c.status === "Under Trial").length;
  const completed = cases.filter(c => c.status === "Completed" || c.status === "Disposed").length;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  container.innerHTML = `
    <!-- Admin Hero Banner -->
    <div class="role-hero-banner admin">
      <div class="role-hero-content">
        <div class="role-avatar-badge">🏛️</div>
        <div class="role-hero-text">
          <h3>${currentUser.name} — High Court Administration</h3>
          <p>Principal Registrar • Master Judicial Registry • 12 Active Divisions • System Oversight</p>
        </div>
      </div>
      <div class="role-hero-actions">
        <button class="btn-table-action" style="background:rgba(255,255,255,0.2); color:#fff; border:none;" onclick="openReassignBenchModal(null)">
          Reassign Bench
        </button>
        <button class="btn-header-action" onclick="openScrutinyModal(null)">
          Scrutiny Queue (3)
        </button>
      </div>
    </div>

    <!-- Admin KPI Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Total Registered Load</span>
          <span class="stat-value" id="totalCases">${total}</span>
          <span class="stat-trend positive">↑ 14% institutional growth</span>
        </div>
        <div class="stat-icon navy"><svg width="22" height="22"><use href="#icon-docket"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Active Hearings Pipeline</span>
          <span class="stat-value" id="pendingCases">${pending}</span>
          <span class="stat-trend warning">● Regular trial pipeline</span>
        </div>
        <div class="stat-icon amber"><svg width="22" height="22"><use href="#icon-clock"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Court-wide Disposal Rate</span>
          <span class="stat-value">${rate}%</span>
          <span class="stat-trend positive">↑ ${completed} cases finalized</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-check"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Registry Scrutiny Queue</span>
          <span class="stat-value">3 Pending</span>
          <span class="stat-trend neutral">● 2 cleared today</span>
        </div>
        <div class="stat-icon blue"><svg width="22" height="22"><use href="#icon-file-plus"></use></svg></div>
      </div>
    </div>

    <!-- Admin Quick Actions -->
    <div class="quick-tools-grid">
      <div class="quick-tool-btn" onclick="openReassignBenchModal(null)">
        <svg width="22" height="22"><use href="#icon-scales"></use></svg>
        <span>Reassign Bench / Courtroom</span>
      </div>
      <div class="quick-tool-btn" onclick="openScrutinyModal(null)">
        <svg width="22" height="22"><use href="#icon-check"></use></svg>
        <span>Scrutiny & Defect Review</span>
      </div>
      <div class="quick-tool-btn" onclick="exportCasesCSV()">
        <svg width="22" height="22"><use href="#icon-docket"></use></svg>
        <span>Export Master Docket CSV</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('cases')">
        <svg width="22" height="22"><use href="#icon-search"></use></svg>
        <span>Inspect All Registered Cases</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('causeList')">
        <svg width="22" height="22"><use href="#icon-calendar"></use></svg>
        <span>Publish Daily Cause List</span>
      </div>
    </div>

    <!-- Scrutiny Review Queue -->
    <div class="dashboard-card" style="margin-bottom:24px;">
      <div class="dashboard-card-header">
        <div>
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-file-plus"></use></svg>
            Registry Scrutiny & Objection Clearance Queue
          </h3>
          <div class="dashboard-card-subtitle">Fresh electronic filings awaiting administrative inspection of court fees and affidavits</div>
        </div>
        <button class="btn-table-action" onclick="openScrutinyModal(null)">Launch Scrutiny Officer Tool</button>
      </div>

      <div class="table-responsive">
        <table class="court-table">
          <thead>
            <tr>
              <th>Filing CNR</th>
              <th>Case Matter</th>
              <th>Filing Counsel</th>
              <th>Date Filed</th>
              <th>Fee Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="case-cnr-tag">DLHC01-002102-2026</span></td>
              <td><strong>State Cyber Cell vs. Vikramaditya Sen</strong></td>
              <td>Adv. Feroze Khan</td>
              <td>01-Sep-2026</td>
              <td><span class="badge" style="background:#dcfce7; color:#166534;">Verified Paid</span></td>
              <td>
                <button class="btn-table-action" onclick="openScrutinyModal('DC/2026/0102')">Clear Scrutiny</button>
              </td>
            </tr>
            <tr>
              <td><span class="case-cnr-tag">DLHC01-002106-2026</span></td>
              <td><strong>Pooja Malhotra vs. Rohit Malhotra</strong></td>
              <td>Adv. Nidhi Saxena</td>
              <td>22-Jul-2026</td>
              <td><span class="badge" style="background:#dcfce7; color:#166534;">Verified Paid</span></td>
              <td>
                <button class="btn-table-action" onclick="openScrutinyModal('DC/2026/0106')">Clear Scrutiny</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="dashboard-grid-2col">
      <div class="dashboard-card">
        <div class="dashboard-card-header">
          <h3 class="dashboard-card-title">Case Distribution by Category</h3>
        </div>
        <div class="chart-container">
          <canvas id="categoryDonutChart" class="dashboard-canvas"></canvas>
        </div>
        <div class="chart-legend" id="categoryChartLegend"></div>
      </div>

      <div class="dashboard-card">
        <div class="dashboard-card-header">
          <h3 class="dashboard-card-title">Filing vs Disposition Trend</h3>
        </div>
        <div class="chart-container">
          <canvas id="monthlyTrendChart" class="dashboard-canvas"></canvas>
        </div>
        <div class="chart-legend">
          <div class="legend-item"><span class="legend-color" style="background:#1e4a85;"></span> Filings</div>
          <div class="legend-item"><span class="legend-color" style="background:#059669;"></span> Disposals</div>
        </div>
      </div>
    </div>
  `;

  // Draw charts after DOM renders
  setTimeout(() => {
    drawCategoryDonutChart();
    drawMonthlyTrendChart();
  }, 50);
}

/* ==========================================================================
   ROLE 5: CLERK (COURT STENOGRAPHER) DASHBOARD
   ========================================================================== */
function renderClerkDashboard(container) {
  const courtroomCases = cases.filter(c => c.courtroom.includes("04"));

  container.innerHTML = `
    <!-- Clerk Hero Banner -->
    <div class="role-hero-banner clerk">
      <div class="role-hero-content">
        <div class="role-avatar-badge">📋</div>
        <div class="role-hero-text">
          <h3>${currentUser.name} — Courtroom 04 Desk</h3>
          <p>Court Stenographer & Registry Officer • Real-Time Hearing Sequencer • Cause List Manager</p>
        </div>
      </div>
      <div class="role-hero-actions">
        <button class="btn-table-action" style="background:rgba(255,255,255,0.25); color:#fff; border:none;" onclick="openStenoMinutesModal(null)">
          Open Steno Pad
        </button>
        <button class="btn-header-action" style="background:#3730a3;" onclick="openExhibitModal(null)">
          Register Exhibit
        </button>
      </div>
    </div>

    <!-- Clerk KPI Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Courtroom 04 Roster</span>
          <span class="stat-value">${courtroomCases.length}</span>
          <span class="stat-trend positive">● Today's listed items</span>
        </div>
        <div class="stat-icon navy"><svg width="22" height="22"><use href="#icon-calendar"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Hearings Called</span>
          <span class="stat-value">2 Called</span>
          <span class="stat-trend positive">● Item #1 in session</span>
        </div>
        <div class="stat-icon blue"><svg width="22" height="22"><use href="#icon-gavel"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Minutes Logged</span>
          <span class="stat-value">3 Entries</span>
          <span class="stat-trend positive">✓ Steno record active</span>
        </div>
        <div class="stat-icon emerald"><svg width="22" height="22"><use href="#icon-orders"></use></svg></div>
      </div>

      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-label">Summons Dispatched</span>
          <span class="stat-value">18 Notices</span>
          <span class="stat-trend warning">● e-Service gateway</span>
        </div>
        <div class="stat-icon amber"><svg width="22" height="22"><use href="#icon-mail"></use></svg></div>
      </div>
    </div>

    <!-- Clerk Quick Actions -->
    <div class="quick-tools-grid">
      <div class="quick-tool-btn" onclick="openStenoMinutesModal(null)">
        <svg width="22" height="22"><use href="#icon-orders"></use></svg>
        <span>Live Stenography Minutes Pad</span>
      </div>
      <div class="quick-tool-btn" onclick="openExhibitModal(null)">
        <svg width="22" height="22"><use href="#icon-docket"></use></svg>
        <span>Register Evidence Exhibit</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('notices')">
        <svg width="22" height="22"><use href="#icon-mail"></use></svg>
        <span>Issue Digital Summons</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('virtualCourt')">
        <svg width="22" height="22"><use href="#icon-video"></use></svg>
        <span>Courtroom Stenographer View</span>
      </div>
      <div class="quick-tool-btn" onclick="showSection('causeList')">
        <svg width="22" height="22"><use href="#icon-calendar"></use></svg>
        <span>Print Courtroom Board</span>
      </div>
    </div>

    <!-- Interactive Cause List Live Queue Manager -->
    <div class="cause-list-preview-card">
      <div class="dashboard-card-header">
        <div>
          <h3 class="dashboard-card-title">
            <svg width="16" height="16"><use href="#icon-calendar"></use></svg>
            Interactive Hearing Status Switcher (Courtroom 04)
          </h3>
          <div class="dashboard-card-subtitle">Click status pills to update what appears on the court entrance display screens in real time</div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="court-table">
          <thead>
            <tr>
              <th>Item #</th>
              <th>Case Record</th>
              <th>Parties</th>
              <th>Hearing Time</th>
              <th>Current Live State</th>
              <th>Switch Live Status (Instant Action)</th>
            </tr>
          </thead>
          <tbody>
            ${courtroomCases.map((c, idx) => `
              <tr>
                <td><strong>Item #${idx + 1}</strong></td>
                <td>
                  <span class="case-number-link" onclick="openCaseDossier('${c.number}')">${c.number}</span><br>
                  <span class="case-cnr-tag">${c.cnr}</span>
                </td>
                <td>${c.title}</td>
                <td><strong>${c.timeSlot || '10:30 AM'}</strong></td>
                <td>
                  <span class="badge ${c.liveHearingStatus === 'Passed Over' ? 'badge-urgent' : c.liveHearingStatus === 'In Session' ? 'badge-trial' : 'badge-regular'}">
                    ${c.liveHearingStatus || (idx === 0 ? 'In Session' : 'Listed')}
                  </span>
                </td>
                <td>
                  <div class="clerk-status-btn-group">
                    <button class="btn-clerk-status ${c.liveHearingStatus === 'In Session' ? 'active-now' : ''}" onclick="clerkUpdateHearingStatus('${c.number}', 'In Session')">
                      🟢 Hearing
                    </button>
                    <button class="btn-clerk-status" onclick="clerkUpdateHearingStatus('${c.number}', 'Passed Over')">
                      🟡 Pass Over
                    </button>
                    <button class="btn-clerk-status" onclick="clerkUpdateHearingStatus('${c.number}', 'Call 2')">
                      🔵 Call 2
                    </button>
                    <button class="btn-clerk-status" onclick="clerkUpdateHearingStatus('${c.number}', 'Adjourned')">
                      ⚪ Adjourn
                    </button>
                    <button class="btn-clerk-status" onclick="clerkUpdateHearingStatus('${c.number}', 'Disposed')">
                      ✅ Disposed
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ==========================================================================
   ROLE ACTION & MODAL HANDLERS (Allowing users to make changes!)
   ========================================================================== */

/* Litigant Fee Payment */
function openFeePaymentModal(caseNumber = null) {
  const sel = document.getElementById("feeCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
  }
  document.getElementById("feePaymentModal").classList.remove("hidden");
}

function updateFeeAmount(category) {
  let amt = "₹2,500";
  if (category.includes("Process Service")) amt = "₹450";
  if (category.includes("Certified Judgment")) amt = "₹250";
  if (category.includes("Urgent Motion")) amt = "₹1,000";
  document.getElementById("feeAmountDisplay").value = amt;
}

let selectedPaymentMethodName = "UPI / QR Code";
function selectPaymentMethod(elem, method) {
  document.querySelectorAll(".payment-method-tile").forEach(t => t.classList.remove("selected"));
  elem.classList.add("selected");
  selectedPaymentMethodName = method;
  document.getElementById("selectedPayMethodText").textContent = method;
}

function handleFeePaymentSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("feeCaseSelect").value;
  const amt = document.getElementById("feeAmountDisplay").value;
  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  const txnId = "ECH-2026-" + Math.floor(100000 + Math.random() * 900000);
  target.feesPaid = true;
  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Court fee of ${amt} paid online via ${selectedPaymentMethodName} (e-Treasury Challan Ref: ${txnId})`,
    officer: currentUser.name
  });

  saveToStorage();
  closeModal("feePaymentModal");
  updateDashboard();
  showToast(`Payment Successful! e-Challan #${txnId} issued & verified`, "success");
}

/* Admin Bench Reassignment */
function openReassignBenchModal(caseNumber = null) {
  const sel = document.getElementById("reassignCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
  }
  document.getElementById("reassignBenchModal").classList.remove("hidden");
}

function handleReassignBenchSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("reassignCaseSelect").value;
  const newJudge = document.getElementById("reassignJudgeSelect").value;
  const newRoom = document.getElementById("reassignCourtroomSelect").value;
  const reason = document.getElementById("reassignReason").value.trim();

  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  target.judge = newJudge;
  target.courtroom = newRoom;
  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Administrative bench transfer to ${newJudge} (${newRoom}). Reason: ${reason}`,
    officer: currentUser.name
  });

  saveToStorage();
  closeModal("reassignBenchModal");
  updateDashboard();
  renderCasesDocket();
  renderCauseList();
  showToast(`Case ${target.number} reassigned to ${newJudge}`, "success");
}

/* Admin / Clerk Scrutiny Review */
function openScrutinyModal(caseNumber = null) {
  const sel = document.getElementById("scrutinyCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
    loadScrutinyDetails(sel.value);
  }
  document.getElementById("scrutinyModal").classList.remove("hidden");
}

function loadScrutinyDetails(caseNum) {
  const target = cases.find(c => c.number === caseNum);
  if (!target) return;
  document.getElementById("scrutinyCaseTitle").textContent = target.title;
  document.getElementById("scrutinyCaseLitigants").textContent = `Parties: ${target.petitioner} vs ${target.respondent}`;
  document.getElementById("scrutinyDocsCount").textContent = `Verified Documents: ${(target.documents || []).length} pleadings in vault`;
}

function toggleDefectNotes(val) {
  const c = document.getElementById("defectNotesContainer");
  if (val === "Defects") c.classList.remove("hidden");
  else c.classList.add("hidden");
}

function handleScrutinySubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("scrutinyCaseSelect").value;
  const decision = document.getElementById("scrutinyDecision").value;
  const notes = document.getElementById("defectNotesText").value.trim();
  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  if (decision === "Approve") {
    target.timeline.push({
      date: new Date().toISOString().slice(0, 10),
      event: `Registry Scrutiny Cleared by ${currentUser.name}. Suit certified for hearing.`,
      officer: currentUser.name
    });
    showToast(`Scrutiny Cleared: Case ${target.number} listed for judicial allocation`, "success");
  } else {
    target.timeline.push({
      date: new Date().toISOString().slice(0, 10),
      event: `Defects noted by Registry: ${notes}. Returned to Counsel for curing.`,
      officer: currentUser.name
    });
    showToast(`Defects recorded and communicated to filing counsel`, "info");
  }

  saveToStorage();
  closeModal("scrutinyModal");
  updateDashboard();
}

/* Clerk Stenography Live Minutes */
function openStenoMinutesModal(caseNumber = null) {
  const sel = document.getElementById("stenoCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
  }
  document.getElementById("stenoMinutesModal").classList.remove("hidden");
}

function handleStenoMinutesSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("stenoCaseSelect").value;
  const notes = document.getElementById("stenoNotesText").value.trim();
  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Stenographer Minutes Log: ${notes}`,
    officer: currentUser.name
  });

  saveToStorage();
  closeModal("stenoMinutesModal");
  updateDashboard();
  showToast(`Stenographic minutes recorded in official case docket`, "success");
}

/* Lawyer File Additional Pleading */
function openFilePleadingModal(caseNumber = null) {
  const sel = document.getElementById("pleadingCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
  }
  document.getElementById("filePleadingModal").classList.remove("hidden");
}

function handleFilePleadingSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("pleadingCaseSelect").value;
  const cat = document.getElementById("pleadingCategory").value;
  const title = document.getElementById("pleadingTitle").value.trim();
  const summary = document.getElementById("pleadingSummary").value.trim();
  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  if (!target.documents) target.documents = [];
  target.documents.push({
    name: `${title} (${cat})`,
    size: "2.1 MB",
    date: new Date().toISOString().slice(0, 10)
  });

  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Pleading filed by Counsel (${cat}): "${summary}"`,
    officer: currentUser.name
  });

  saveToStorage();
  closeModal("filePleadingModal");
  updateDashboard();
  showToast(`Pleading '${title}' filed into digital vault`, "success");
}

/* Clerk Register Evidence Exhibit */
function openExhibitModal(caseNumber = null) {
  const sel = document.getElementById("exhibitCaseSelect");
  if (sel) {
    sel.innerHTML = cases.map(c => `<option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>${c.number}: ${c.title}</option>`).join("");
  }
  document.getElementById("exhibitModal").classList.remove("hidden");
}

function handleExhibitSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("exhibitCaseSelect").value;
  const mark = document.getElementById("exhibitMark").value.trim();
  const desc = document.getElementById("exhibitDesc").value.trim();
  const party = document.getElementById("exhibitParty").value;
  const custody = document.getElementById("exhibitCustody").value.trim();
  const target = cases.find(c => c.number === cNum);
  if (!target) return;

  if (!target.documents) target.documents = [];
  target.documents.push({
    name: `${mark}: ${desc} [Custody: ${custody}]`,
    size: "Physical Exhibit Vault",
    date: new Date().toISOString().slice(0, 10)
  });

  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Exhibit ${mark} admitted by ${party}. Custody in ${custody}.`,
    officer: currentUser.name
  });

  saveToStorage();
  closeModal("exhibitModal");
  updateDashboard();
  showToast(`Exhibit ${mark} marked and deposited in court custody`, "success");
}

/* Clerk Instant Live Status Switcher */
function clerkUpdateHearingStatus(caseNumber, newStatus) {
  const target = cases.find(c => c.number === caseNumber);
  if (!target) return;

  target.liveHearingStatus = newStatus;
  if (newStatus === "Disposed") {
    target.status = "Completed";
  }

  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Courtroom 04 Clerk updated hearing status to: ${newStatus}`,
    officer: currentUser.name
  });

  saveToStorage();
  updateDashboard();
  renderCauseList();
  showToast(`Courtroom 04: Case ${target.number} live status updated to '${newStatus}'`, "info");
}

/* Judge Quick Adjourn */
function judgeAdjournCase(caseNumber) {
  const target = cases.find(c => c.number === caseNumber);
  if (!target) return;

  const nextDate = prompt(`Adjourn Case ${caseNumber} to next hearing date:`, "2026-10-22");
  if (!nextDate) return;

  target.date = nextDate;
  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Matter adjourned by Hon'ble Bench to ${nextDate} for continued oral arguments`,
    officer: currentUser.name
  });

  saveToStorage();
  updateDashboard();
  renderCasesDocket();
  renderCauseList();
  showToast(`Case ${target.number} adjourned to ${nextDate}`, "warning");
}

/* Lawyer Request Urgent */
function lawyerRequestUrgent(caseNumber) {
  const target = cases.find(c => c.number === caseNumber);
  if (!target) return;

  target.priority = "Urgent";
  target.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Urgent mentioning request filed by Counsel Adv. Raghavan Nair`,
    officer: currentUser.name
  });

  saveToStorage();
  updateDashboard();
  renderCasesDocket();
  showToast(`Urgent mentioning requested before Chief Justice Bench`, "info");
}

/* --------------------------------------------------------------------------
   Canvas Drawing: Category Donut Chart
   -------------------------------------------------------------------------- */
function drawCategoryDonutChart() {
  const canvas = document.getElementById("categoryDonutChart");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = (rect.height || 220) * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height || 220;
  ctx.clearRect(0, 0, width, height);

  // Group case counts
  const counts = {
    Commercial: 0,
    Criminal: 0,
    Constitutional: 0,
    Civil: 0,
    Cyber: 0,
    Family: 0
  };

  cases.forEach(c => {
    if (counts[c.category] !== undefined) counts[c.category]++;
    else counts["Civil"]++;
  });

  const colors = {
    Commercial: "#1e4a85",
    Criminal: "#e11d48",
    Constitutional: "#d97706",
    Civil: "#2563eb",
    Cyber: "#7c3aed",
    Family: "#059669"
  };

  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = Math.min(centerX, centerY) - 20;
  const innerRadius = outerRadius * 0.62;

  let currentAngle = -Math.PI / 2;

  Object.entries(counts).forEach(([cat, val]) => {
    if (val === 0) return;
    const sliceAngle = (val / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
    ctx.closePath();
    ctx.fillStyle = colors[cat];
    ctx.fill();

    // Subtle border
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    currentAngle += sliceAngle;
  });

  // Center text
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 20px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(total.toString(), centerX, centerY - 8);

  ctx.fillStyle = "#64748b";
  ctx.font = "10px Inter, sans-serif";
  ctx.fillText("TOTAL CASES", centerX, centerY + 12);

  // Render HTML Legend
  const legend = document.getElementById("categoryChartLegend");
  if (legend) {
    legend.innerHTML = Object.entries(counts).map(([cat, val]) => `
      <div class="legend-item">
        <span class="legend-color" style="background:${colors[cat]};"></span>
        <span>${cat} (${val})</span>
      </div>
    `).join("");
  }
}

/* --------------------------------------------------------------------------
   Canvas Drawing: Monthly Trend Bar Chart
   -------------------------------------------------------------------------- */
function drawMonthlyTrendChart() {
  const canvas = document.getElementById("monthlyTrendChart");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = (rect.height || 220) * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height || 220;
  ctx.clearRect(0, 0, width, height);

  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const filings = [14, 18, 22, 29, 34, 42];
  const disposals = [10, 15, 18, 24, 30, 36];
  const maxVal = 50;

  const padLeft = 36;
  const padRight = 16;
  const padBottom = 28;
  const padTop = 20;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  // Grid lines
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padTop + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(width - padRight, y);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "10px Inter, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText((maxVal - i * (maxVal / 4)).toString(), padLeft - 6, y + 3);
  }

  // Bars
  const groupW = chartW / months.length;
  const barW = Math.max(10, groupW * 0.28);

  months.forEach((m, idx) => {
    const xBase = padLeft + idx * groupW + (groupW - barW * 2 - 4) / 2;

    // Filing bar
    const h1 = (filings[idx] / maxVal) * chartH;
    const y1 = padTop + chartH - h1;
    ctx.fillStyle = "#1e4a85";
    ctx.fillRect(xBase, y1, barW, h1);

    // Disposal bar
    const h2 = (disposals[idx] / maxVal) * chartH;
    const y2 = padTop + chartH - h2;
    ctx.fillStyle = "#059669";
    ctx.fillRect(xBase + barW + 4, y2, barW, h2);

    // Month label
    ctx.fillStyle = "#64748b";
    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(m, xBase + barW + 2, height - 8);
  });
}

/* --------------------------------------------------------------------------
   5. MASTER CASE DOCKET (SEARCH, FILTERS, CSV EXPORT)
   -------------------------------------------------------------------------- */

let currentStatusFilter = "All";

function populateJudgeFilter() {
  const select = document.getElementById("filterJudge");
  if (!select) return;
  const judges = [...new Set(cases.map(c => c.judge))];
  select.innerHTML = '<option value="All">All Benches / Judges</option>' + 
    judges.map(j => `<option value="${j}">${j}</option>`).join("");
}

function setStatusFilter(status, btn) {
  currentStatusFilter = status;
  document.querySelectorAll(".status-chips-row .filter-chip").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  filterCases();
}

function resetFilters() {
  document.getElementById("searchCase").value = "";
  document.getElementById("filterCategory").value = "All";
  document.getElementById("filterJudge").value = "All";
  document.getElementById("filterPriority").value = "All";
  setStatusFilter("All", document.querySelector('.filter-chip[data-status="All"]'));
}

function filterCases() {
  const search = (document.getElementById("searchCase").value || "").toLowerCase().trim();
  const category = document.getElementById("filterCategory").value;
  const judge = document.getElementById("filterJudge").value;
  const priority = document.getElementById("filterPriority").value;

  const filtered = cases.filter(c => {
    const matchesSearch = !search || (
      c.number.toLowerCase().includes(search) ||
      c.cnr.toLowerCase().includes(search) ||
      c.title.toLowerCase().includes(search) ||
      c.judge.toLowerCase().includes(search) ||
      c.petitionerAdvocate.toLowerCase().includes(search) ||
      c.respondentAdvocate.toLowerCase().includes(search) ||
      c.petitioner.toLowerCase().includes(search) ||
      c.respondent.toLowerCase().includes(search)
    );

    const matchesCat = category === "All" || c.category === category;
    const matchesJudge = judge === "All" || c.judge === judge;
    const matchesPriority = priority === "All" || c.priority === priority;
    const matchesStatus = currentStatusFilter === "All" || c.status === currentStatusFilter;

    return matchesSearch && matchesCat && matchesJudge && matchesPriority && matchesStatus;
  });

  renderCasesDocket(filtered);
}

function renderCasesDocket(list = cases) {
  const tbody = document.getElementById("caseTableBody");
  const countInfo = document.getElementById("caseTableCountInfo");
  if (!tbody) return;

  if (countInfo) countInfo.textContent = `Showing ${list.length} of ${cases.length} registered cases`;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:40px; color:var(--slate-400);">
          No court cases found matching your search and filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(c => {
    let statusClass = "badge-pending";
    if (c.status === "Under Trial") statusClass = "badge-trial";
    else if (c.status === "Reserved for Judgment") statusClass = "badge-reserved";
    else if (c.status === "Completed" || c.status === "Disposed") statusClass = "badge-completed";

    let priorityClass = "badge-regular";
    if (c.priority === "Urgent") priorityClass = "badge-urgent";
    else if (c.priority === "Fast-Track") priorityClass = "badge-fasttrack";

    return `
      <tr>
        <td>
          <div class="case-id-cell">
            <span class="case-number-link" onclick="openCaseDossier('${c.number}')">${c.number}</span>
            <span class="case-cnr-tag">${c.cnr}</span>
          </div>
        </td>
        <td>
          <div class="case-title-cell">
            <span class="case-title-main">${c.title}</span>
            <span class="case-advocates">${c.petitioner} vs ${c.respondent}</span>
          </div>
        </td>
        <td><span class="badge" style="background:var(--slate-100); color:var(--court-navy-800);">${c.category}</span></td>
        <td>
          <span style="font-weight:600; font-size:12px;">${c.judge}</span><br>
          <span style="font-size:11px; color:var(--slate-500);">${c.courtroom.split('(')[0]}</span>
        </td>
        <td>
          <span style="font-weight:600; color:var(--court-navy-950);">${c.date}</span><br>
          <span style="font-size:11px; color:var(--slate-500);">${c.timeSlot || '10:30 AM'}</span>
        </td>
        <td><span class="badge ${priorityClass}">${c.priority}</span></td>
        <td><span class="badge ${statusClass}">${c.status}</span></td>
        <td>
          <div class="action-buttons-cell">
            <button class="btn-table-action" onclick="openCaseDossier('${c.number}')" title="Open Full Dossier">
              <svg width="12" height="12"><use href="#icon-docket"></use></svg>
              Dossier
            </button>
            <button class="btn-table-action" onclick="openOrderModal('${c.number}')" title="Dictate Order">
              <svg width="12" height="12"><use href="#icon-orders"></use></svg>
              Order
            </button>
            <button class="btn-table-action danger" onclick="deleteCase('${c.id}')" title="Delete Case">
              ✕
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function exportCasesCSV() {
  if (cases.length === 0) {
    showToast("No cases to export", "error");
    return;
  }

  const headers = ["Case Number", "CNR", "Title", "Category", "Priority", "Judge", "Courtroom", "Hearing Date", "Status", "Stage"];
  const rows = cases.map(c => [
    `"${c.number}"`,
    `"${c.cnr}"`,
    `"${c.title.replace(/"/g, '""')}"`,
    `"${c.category}"`,
    `"${c.priority}"`,
    `"${c.judge}"`,
    `"${c.courtroom}"`,
    `"${c.date}"`,
    `"${c.status}"`,
    `"${c.stage}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Court_Docket_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Master docket exported as CSV successfully", "success");
}

function deleteCase(caseId) {
  if (confirm("Are you sure you want to archive / delete this case record?")) {
    cases = cases.filter(c => c.id !== caseId);
    saveToStorage();
    updateDashboard();
    renderCasesDocket();
    showToast("Case removed from active docket", "info");
  }
}

/* --------------------------------------------------------------------------
   6. CASE DOSSIER MODAL (TABBED DEEP RECORD)
   -------------------------------------------------------------------------- */

let activeDossierCase = null;

function openCaseDossier(caseNumber) {
  const c = cases.find(item => item.number === caseNumber || item.id === caseNumber);
  if (!c) {
    showToast("Case details not found", "error");
    return;
  }
  activeDossierCase = c;

  document.getElementById("dossierCaseNumber").textContent = `Case Dossier — ${c.number}`;
  document.getElementById("dossierCaseTitle").textContent = c.title;
  document.getElementById("dossierCNR").textContent = c.cnr;
  document.getElementById("dossierCategory").textContent = c.category;
  
  const priorityBadge = document.getElementById("dossierPriorityBadge");
  priorityBadge.textContent = c.priority;
  priorityBadge.className = `badge ${c.priority === 'Urgent' ? 'badge-urgent' : c.priority === 'Fast-Track' ? 'badge-fasttrack' : 'badge-regular'}`;

  document.getElementById("dossierPetitioner").textContent = c.petitioner;
  document.getElementById("dossierPetAdvocate").textContent = `Lead Counsel: ${c.petitionerAdvocate}`;
  document.getElementById("dossierRespondent").textContent = c.respondent;
  document.getElementById("dossierRespAdvocate").textContent = `Lead Counsel: ${c.respondentAdvocate}`;

  document.getElementById("dossierDescription").textContent = c.description || "No specific claim statement recorded.";
  document.getElementById("dossierPrayer").textContent = c.prayer || "No operative prayer recorded.";

  // Bench actions fields
  document.getElementById("dossierNextDate").value = c.date;
  document.getElementById("dossierStatusSelect").value = c.status;

  // Render Timeline
  const tlContainer = document.getElementById("dossierTimelineContainer");
  tlContainer.innerHTML = (c.timeline || []).map(t => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${t.date} • ${t.officer || 'Court Officer'}</div>
      <div class="timeline-title">${t.event}</div>
    </div>
  `).join("");

  // Render Documents
  const docContainer = document.getElementById("dossierDocumentsList");
  docContainer.innerHTML = (c.documents || []).map(d => `
    <div class="uploaded-doc-chip">
      <div class="doc-chip-left">
        <svg width="15" height="15" style="color:var(--court-navy-600);"><use href="#icon-orders"></use></svg>
        <span>${d.name}</span>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:11px; color:var(--slate-400);">${d.size} • ${d.date}</span>
        <button class="btn-table-action" onclick="showToast('Verified cryptographic checksum: SHA256 valid', 'success')">Verify</button>
      </div>
    </div>
  `).join("");

  // Render Orders
  const ordContainer = document.getElementById("dossierOrdersList");
  if (!c.orders || c.orders.length === 0) {
    ordContainer.innerHTML = `<p style="font-size:12.5px; color:var(--slate-500);">No formal orders passed in this matter yet.</p>`;
  } else {
    ordContainer.innerHTML = c.orders.map(o => `
      <div style="background:var(--slate-50); border:1px solid var(--slate-200); padding:14px; border-radius:var(--radius-md); margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <strong style="color:var(--court-navy-950);">${o.orderId}: ${o.type}</strong>
          <span style="font-size:11px; color:var(--slate-500);">${o.date}</span>
        </div>
        <p style="font-size:12px; color:var(--slate-700); margin-bottom:8px;">${o.summary}</p>
        <button class="btn-table-action" onclick="viewOfficialOrder('${o.orderId}')">View Official Paper Order Sheet</button>
      </div>
    `).join("");
  }

  // Switch to first tab
  switchDossierTab("tabOverview", document.querySelector(".modal-tab-btn"));
  document.getElementById("caseDossierModal").classList.remove("hidden");
}

function switchDossierTab(tabId, btn) {
  document.querySelectorAll(".dossier-tab-content").forEach(c => c.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
  document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function saveDossierCaseChanges() {
  if (!activeDossierCase) return;
  const newDate = document.getElementById("dossierNextDate").value;
  const newStatus = document.getElementById("dossierStatusSelect").value;

  activeDossierCase.date = newDate;
  activeDossierCase.status = newStatus;

  activeDossierCase.timeline.push({
    date: new Date().toISOString().slice(0, 10),
    event: `Bench adjourned matter to ${newDate}; Status updated to ${newStatus}`,
    officer: currentUser.name
  });

  saveToStorage();
  updateDashboard();
  renderCasesDocket();
  closeModal("caseDossierModal");
  showToast(`Case ${activeDossierCase.number} updated successfully`, "success");
}

function printDossier() {
  window.print();
}

/* --------------------------------------------------------------------------
   7. E-FILING PORTAL / REGISTER NEW CASE
   -------------------------------------------------------------------------- */

let uploadedDemoDocs = [
  { name: "Main Plaint with Affidavit.pdf", size: "2.4 MB", date: "2026-10-06" },
  { name: "Vakalatnama & Memo of Appearance.pdf", size: "840 KB", date: "2026-10-06" }
];

function simulateFileUpload() {
  const docNames = [
    "Board Resolution Authority.pdf",
    "Statement of Commercial Invoices Ex-B.pdf",
    "Medical Disability Certificate Ex-C.pdf",
    "Arbitration Clause Agreement Ex-D.pdf"
  ];
  const randDoc = docNames[Math.floor(Math.random() * docNames.length)];
  uploadedDemoDocs.push({
    name: randDoc,
    size: (Math.random() * 4 + 1).toFixed(1) + " MB",
    date: new Date().toISOString().slice(0, 10)
  });

  const list = document.getElementById("uploadedDocsList");
  list.innerHTML = uploadedDemoDocs.map(d => `
    <div class="uploaded-doc-chip">
      <div class="doc-chip-left">
        <svg width="14" height="14" style="color:var(--accent-emerald);"><use href="#icon-check"></use></svg>
        <span>${d.name}</span>
      </div>
      <span style="color:var(--slate-400); font-size:11px;">${d.size} (Verified)</span>
    </div>
  `).join("");

  showToast(`Attached document ${randDoc} to electronic vault`, "info");
}

function updateFilingPreview() {
  const cNo = document.getElementById("caseNumber").value || "DC/2026/0109";
  const cTitle = document.getElementById("caseTitle").value || "Matter Pending Entry";
  const cPet = document.getElementById("petitionerName").value || "-";
  const cResp = document.getElementById("respondentName").value || "-";
  const cJudge = document.getElementById("judgeName").value || "Hon'ble Justice";
  const cDate = document.getElementById("hearingDate").value || "Not Scheduled";

  document.getElementById("prevCaseNo").textContent = cNo;
  document.getElementById("prevCNR").textContent = `DLHC01-00${cNo.replace(/[^0-9]/g, '') || '2109'}-2026`;
  document.getElementById("prevTitle").textContent = cTitle;
  document.getElementById("prevPetitioner").textContent = cPet;
  document.getElementById("prevRespondent").textContent = cResp;
  document.getElementById("prevJudge").textContent = cJudge;
  document.getElementById("prevDate").textContent = cDate;
}

function handleCaseSubmit(e) {
  e.preventDefault();

  const caseNum = document.getElementById("caseNumber").value.trim();
  const cnrNum = `DLHC01-00${caseNum.replace(/[^0-9]/g, '') || Math.floor(1000 + Math.random() * 9000)}-2026`;

  const newCase = {
    id: "case-" + Date.now(),
    number: caseNum,
    cnr: cnrNum,
    title: document.getElementById("caseTitle").value.trim(),
    category: document.getElementById("caseCategory").value,
    priority: document.getElementById("casePriority").value,
    judge: document.getElementById("judgeName").value.trim(),
    courtroom: document.getElementById("caseCourtroom").value,
    petitioner: document.getElementById("petitionerName").value.trim(),
    petitionerAdvocate: document.getElementById("petitionerAdvocate").value.trim(),
    respondent: document.getElementById("respondentName").value.trim(),
    respondentAdvocate: document.getElementById("respondentAdvocate").value.trim(),
    filingDate: new Date().toISOString().slice(0, 10),
    date: document.getElementById("hearingDate").value,
    timeSlot: document.getElementById("hearingTimeSlot").value,
    status: document.getElementById("caseStatus").value,
    stage: "Admission & Verification",
    description: document.getElementById("caseDescription").value.trim() || "Electronic petition instituted under Section 9.",
    prayer: document.getElementById("casePrayer").value.trim() || "Relief prayed as per prayer clause in the main plaint.",
    timeline: [
      {
        date: new Date().toISOString().slice(0, 10),
        event: "Electronic petition filed; CNR generated & verified",
        officer: currentUser.name
      }
    ],
    documents: [...uploadedDemoDocs],
    orders: []
  };

  cases.unshift(newCase);
  saveToStorage();
  updateDashboard();
  renderCasesDocket();
  populateJudgeFilter();

  // Populate Confirmation Modal
  document.getElementById("receiptModalCaseNo").textContent = newCase.number;
  document.getElementById("receiptModalCNR").textContent = newCase.cnr;
  document.getElementById("receiptModalBench").textContent = `${newCase.judge} (${newCase.courtroom})`;
  document.getElementById("receiptModalDate").textContent = `${newCase.date} at ${newCase.timeSlot}`;
  document.getElementById("receiptModal").classList.remove("hidden");

  // Reset form
  resetFilingForm();
  showToast(`Case ${newCase.number} successfully registered in registry`, "success");
}

function resetFilingForm() {
  document.getElementById("caseForm").reset();
  const nextNum = "DC/2026/0" + (100 + cases.length + 1);
  document.getElementById("caseNumber").value = nextNum;
  document.getElementById("hearingDate").value = "2026-10-15";
  updateFilingPreview();
}

/* --------------------------------------------------------------------------
   8. DAILY CAUSE LIST & KIOSK MODE
   -------------------------------------------------------------------------- */

function setCauseDateToday() {
  document.getElementById("causeListDateInput").value = "2026-10-06";
  renderCauseList();
}

function setCauseDateTomorrow() {
  document.getElementById("causeListDateInput").value = "2026-10-07";
  renderCauseList();
}

function renderCauseList() {
  const dateInput = document.getElementById("causeListDateInput");
  if (!dateInput.value) dateInput.value = "2026-10-06";
  const chosenDate = dateInput.value;
  const chosenRoom = document.getElementById("causeCourtroomFilter").value;

  const filtered = cases.filter(c => {
    const matchDate = c.date === chosenDate;
    const matchRoom = chosenRoom === "All" || c.courtroom.includes(chosenRoom);
    return matchDate && matchRoom;
  });

  const tbody = document.getElementById("causeListTableBody");
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:36px; color:var(--slate-400);">
          No matters listed for ${chosenDate} in ${chosenRoom}.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map((c, idx) => `
    <tr>
      <td><strong>Item #${idx + 1}</strong></td>
      <td>
        <span class="case-number-link" onclick="openCaseDossier('${c.number}')">${c.number}</span><br>
        <span class="case-cnr-tag">${c.cnr}</span>
      </td>
      <td>
        <strong>${c.petitioner}</strong><br>
        <span style="font-size:11px; color:var(--slate-500);">VERSUS</span><br>
        <strong>${c.respondent}</strong>
      </td>
      <td>${c.petitionerAdvocate}</td>
      <td>${c.respondentAdvocate}</td>
      <td><span class="badge badge-trial">${c.stage}</span></td>
      <td><span style="font-weight:600; font-size:12px;">${c.courtroom.split('(')[0]}</span></td>
      <td>
        ${idx === 0 
          ? '<span class="badge" style="background:#dcfce7; color:#166534;"><span class="status-dot"></span> In Progress</span>'
          : '<span class="badge badge-regular">Listed for ' + (c.timeSlot || '10:30 AM') + '</span>'}
      </td>
    </tr>
  `).join("");
}

function toggleKioskMode() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    showToast("Entering Fullscreen Court Display Kiosk mode (Press ESC to exit)", "info");
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function printCauseList() {
  window.print();
}

function printDashboardSummary() {
  window.print();
}

/* --------------------------------------------------------------------------
   9. VIRTUAL COURTROOM & SOUND SYNTHESIS
   -------------------------------------------------------------------------- */

let vcTimerSeconds = 1122; // 00:18:42
let vcTimerInterval = null;
let currentTranscriptIndex = 0;

const COURT_TRANSCRIPTS = [
  { speaker: "Justice Sharma:", text: "\"Counsel for petitioner may proceed to summarize clause 14.2 of the concession agreement.\"" },
  { speaker: "Adv. Raghavan Nair (Petitioner):", text: "\"Obliged, My Lord. Clause 14.2 specifically prohibits encashment of bank guarantees without a 30-day cure period.\"" },
  { speaker: "Adv. Sunita Deshmukh (State):", text: "\"With utmost respect, My Lord, the petitioner was in material breach since February 2026.\"" },
  { speaker: "Justice Sharma:", text: "\"Let both parties place the verified escrow account statement on record by 04:00 PM today. Order reserved on injunction.\"" }
];

function startVirtualCourtSimulation() {
  if (vcTimerInterval) clearInterval(vcTimerInterval);
  vcTimerInterval = setInterval(() => {
    vcTimerSeconds++;
    const m = Math.floor(vcTimerSeconds / 60).toString().padStart(2, "0");
    const s = (vcTimerSeconds % 60).toString().padStart(2, "0");
    const el = document.getElementById("vcTimerDisplay");
    if (el) el.textContent = `00:${m}:${s}`;
  }, 1000);
}

function triggerNextTranscript() {
  currentTranscriptIndex = (currentTranscriptIndex + 1) % COURT_TRANSCRIPTS.length;
  const item = COURT_TRANSCRIPTS[currentTranscriptIndex];
  document.getElementById("transcriptSpeaker").textContent = item.speaker;
  document.getElementById("transcriptText").textContent = item.text;

  // Toggle active speaking border
  const tiles = ["tileJudge", "tilePetitioner", "tileRespondent", "tileClerk"];
  tiles.forEach(id => document.getElementById(id).classList.remove("speaking"));
  if (currentTranscriptIndex === 0 || currentTranscriptIndex === 3) {
    document.getElementById("tileJudge").classList.add("speaking");
  } else if (currentTranscriptIndex === 1) {
    document.getElementById("tilePetitioner").classList.add("speaking");
  } else {
    document.getElementById("tileRespondent").classList.add("speaking");
  }
}

function toggleVcMic() {
  const btn = document.getElementById("btnVcMic");
  btn.classList.toggle("active");
  const isActive = btn.classList.contains("active");
  showToast(isActive ? "Microphone unmuted" : "Microphone muted", "info");
}

function toggleVcCam() {
  const btn = document.getElementById("btnVcCam");
  btn.classList.toggle("active");
  const isActive = btn.classList.contains("active");
  showToast(isActive ? "Camera enabled" : "Camera turned off", "info");
}

// Authentic Wooden Gavel Sound synthesized with Web Audio API (Zero external audio files needed!)
function playGavelSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // 2-strike knock
    [0, 0.22].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(160, ctx.currentTime + delay);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + delay + 0.16);

      gain.gain.setValueAtTime(0.7, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.16);
    });
  } catch (e) {
    console.log("Audio synthesis error:", e);
  }
}

function strikeVirtualGavel() {
  playGavelSound();
  showToast("⚖️ CALL TO ORDER: The Hon'ble Bench strikes the Gavel! Court in session.", "warning");

  // Visual screen shake / pulse
  const vcContainer = document.querySelector(".virtual-court-container");
  if (vcContainer) {
    vcContainer.style.transform = "scale(0.99)";
    setTimeout(() => {
      vcContainer.style.transform = "scale(1)";
    }, 150);
  }
}

/* --------------------------------------------------------------------------
   10. ORDERS & JUDGMENTS REPOSITORY
   -------------------------------------------------------------------------- */

function renderJudgments() {
  const container = document.getElementById("ordersGrid");
  if (!container) return;

  // Flatten all orders across cases
  const allOrders = [];
  cases.forEach(c => {
    (c.orders || []).forEach(o => {
      allOrders.push({ ...o, caseNumber: c.number, caseTitle: c.title });
    });
  });

  if (allOrders.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--slate-400);">No court orders currently recorded.</p>`;
    return;
  }

  container.innerHTML = allOrders.map(o => `
    <div class="order-card">
      <div>
        <div class="order-card-header">
          <span class="order-type-badge">${o.type}</span>
          <span class="order-date">${o.date}</span>
        </div>
        <h4>${o.caseNumber}: ${o.caseTitle}</h4>
        <p class="order-summary">${o.summary}</p>
      </div>
      <div class="order-card-footer">
        <span style="font-size:11px; color:var(--slate-500);">${o.bench}</span>
        <button class="btn-table-action" onclick="viewOfficialOrder('${o.orderId}')">
          View Official Order Sheet
        </button>
      </div>
    </div>
  `).join("");
}

function filterJudgments(searchVal = "") {
  const query = searchVal.toLowerCase();
  const filterType = document.getElementById("judgmentTypeFilter").value;

  const allOrders = [];
  cases.forEach(c => {
    (c.orders || []).forEach(o => {
      allOrders.push({ ...o, caseNumber: c.number, caseTitle: c.title });
    });
  });

  const filtered = allOrders.filter(o => {
    const matchSearch = !query || (
      o.orderId.toLowerCase().includes(query) ||
      o.caseNumber.toLowerCase().includes(query) ||
      o.caseTitle.toLowerCase().includes(query) ||
      o.summary.toLowerCase().includes(query) ||
      o.bench.toLowerCase().includes(query)
    );
    const matchType = filterType === "All" || o.type.includes(filterType);
    return matchSearch && matchType;
  });

  const container = document.getElementById("ordersGrid");
  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--slate-400);">No orders found matching filter.</p>`;
    return;
  }

  container.innerHTML = filtered.map(o => `
    <div class="order-card">
      <div>
        <div class="order-card-header">
          <span class="order-type-badge">${o.type}</span>
          <span class="order-date">${o.date}</span>
        </div>
        <h4>${o.caseNumber}: ${o.caseTitle}</h4>
        <p class="order-summary">${o.summary}</p>
      </div>
      <div class="order-card-footer">
        <span style="font-size:11px; color:var(--slate-500);">${o.bench}</span>
        <button class="btn-table-action" onclick="viewOfficialOrder('${o.orderId}')">
          View Official Order Sheet
        </button>
      </div>
    </div>
  `).join("");
}

function viewOfficialOrder(orderId) {
  let targetOrder = null;
  let targetCase = null;

  for (const c of cases) {
    const found = (c.orders || []).find(o => o.orderId === orderId);
    if (found) {
      targetOrder = found;
      targetCase = c;
      break;
    }
  }

  if (!targetOrder) {
    showToast("Order document not found", "error");
    return;
  }

  document.getElementById("paperOrderId").textContent = targetOrder.orderId;
  document.getElementById("paperOrderDate").textContent = targetOrder.date;
  document.getElementById("paperBenchName").textContent = `CORAM: ${targetOrder.bench.toUpperCase()}`;
  document.getElementById("paperCaseNumber").textContent = `Case Record: ${targetCase.number} (CNR: ${targetCase.cnr})`;
  document.getElementById("paperCaseParties").innerHTML = `
    <strong>${targetCase.petitioner}</strong> (Petitioner)<br>
    <em>VERSUS</em><br>
    <strong>${targetCase.respondent}</strong> (Respondent)
  `;

  document.getElementById("paperOrderContent").innerHTML = `
    <p>1. The present application under Order XXXIX Rule 1 & 2 read with Section 151 CPC has been taken up for hearing via hybrid digital court mode.</p>
    <p style="margin-top:10px;">2. Having heard the learned Senior Counsel for the Petitioner and the Standing Counsel for the Respondent Authority, the Court has examined the prima facie merits of the balance of convenience.</p>
    <p style="margin-top:10px; font-weight:bold; background:#f8fafc; padding:12px; border-left:3px solid #000;">
      ORDER DIRECTIONS:<br>
      "${targetOrder.summary}"
    </p>
    <p style="margin-top:10px;">3. The parties are directed to complete pleadings and file digital copies with verified SHA-256 hashes within three weeks. Registry is directed to communicate this order electronically forthwith.</p>
  `;

  document.getElementById("paperJudgeSig").textContent = targetOrder.bench;
  document.getElementById("officialOrderModal").classList.remove("hidden");
}

function openOrderModal(caseNumber = null) {
  const select = document.getElementById("draftOrderCaseSelect");
  select.innerHTML = cases.map(c => `
    <option value="${c.number}" ${caseNumber && c.number === caseNumber ? 'selected' : ''}>
      ${c.number}: ${c.title}
    </option>
  `).join("");

  document.getElementById("draftOrderModal").classList.remove("hidden");
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const cNum = document.getElementById("draftOrderCaseSelect").value;
  const oType = document.getElementById("draftOrderType").value;
  const oBench = document.getElementById("draftOrderBench").value;
  const oText = document.getElementById("draftOrderText").value;

  const targetCase = cases.find(c => c.number === cNum);
  if (!targetCase) return;

  const newOrder = {
    orderId: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toISOString().slice(0, 10),
    type: oType,
    summary: oText,
    bench: oBench
  };

  if (!targetCase.orders) targetCase.orders = [];
  targetCase.orders.push(newOrder);

  if (oType.includes("Final Judgment")) {
    targetCase.status = "Completed";
  }

  saveToStorage();
  updateDashboard();
  renderJudgments();
  closeModal("draftOrderModal");
  showToast(`Order ${newOrder.orderId} published and digitally sealed`, "success");
}

/* --------------------------------------------------------------------------
   11. E-SUMMONS & NOTICES GENERATOR
   -------------------------------------------------------------------------- */

function populateNoticeCaseSelect() {
  const sel = document.getElementById("noticeCaseSelect");
  if (!sel) return;
  sel.innerHTML = cases.map(c => `<option value="${c.number}">${c.number}: ${c.title}</option>`).join("");
  updateNoticePreview();
}

function updateNoticePreview() {
  const cNum = document.getElementById("noticeCaseSelect").value;
  const recipient = document.getElementById("noticeRecipient").value;
  const noticeType = document.getElementById("noticeTypeSelect").value;
  const date = document.getElementById("noticeAppearanceDate").value;
  const courtroom = document.getElementById("noticeCourtroom").value;
  const directions = document.getElementById("noticeDirections").value;

  const c = cases.find(item => item.number === cNum) || cases[0];
  if (!c) return;

  document.getElementById("previewNoticeType").textContent = noticeType.toUpperCase();
  document.getElementById("previewNoticeBody").innerHTML = `
    <p><strong>TO:</strong> ${recipient}</p>
    <p><strong>IN THE MATTER OF:</strong> ${c.title} (Case No. ${c.number} | CNR: ${c.cnr})</p>
    <p style="margin-top:10px;">WHEREAS the Petitioner abovenamed has instituted a suit/petition against you in this Court;</p>
    <p style="margin-top:8px;">YOU ARE HEREBY SUMMONED to appear before this Court in <strong>${courtroom}</strong> on the <strong>${date}</strong> at 10:30 AM in person or through an advocate duly authorized.</p>
    <p style="margin-top:8px; font-weight:600;">"${directions}"</p>
    <p style="margin-top:8px; color:var(--accent-rose); font-weight:600;">TAKE NOTICE that in default of your appearance on the day before mentioned, the cause will be heard and determined in your absence ex-parte.</p>
  `;
}

function dispatchElectronicSummons() {
  showToast("Electronic Summons dispatched via secure e-mail and registered judicial SMS gateway", "success");
}

function printSummonsNotice() {
  window.print();
}

/* --------------------------------------------------------------------------
   12. LEGAL PRECEDENTS & CITATIONS SEARCH
   -------------------------------------------------------------------------- */

function renderPrecedents(list = PRECEDENTS_DATA) {
  const container = document.getElementById("precedentsListContainer");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p style="padding:20px; color:var(--slate-400);">No legal precedents matching keyword.</p>`;
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="precedent-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <span class="precedent-citation">${p.citation}</span>
        <button class="btn-table-action" onclick="copyCitation('${p.citation}: ${p.title}')">
          Copy Citation
        </button>
      </div>
      <h4 class="precedent-title">${p.title}</h4>
      <p class="precedent-principle"><strong>Ratio Decidendi:</strong> ${p.principle}</p>
    </div>
  `).join("");
}

function filterPrecedents(query) {
  const q = query.toLowerCase();
  const filtered = PRECEDENTS_DATA.filter(p => (
    p.citation.toLowerCase().includes(q) ||
    p.title.toLowerCase().includes(q) ||
    p.principle.toLowerCase().includes(q)
  ));
  renderPrecedents(filtered);
}

function copyCitation(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Citation copied to clipboard", "success");
  }).catch(() => {
    showToast("Citation: " + text, "info");
  });
}

/* --------------------------------------------------------------------------
   13. GLOBAL SEARCH & NOTIFICATION DROPDOWN
   -------------------------------------------------------------------------- */

function handleGlobalSearch(term) {
  if (!term) return;
  showSection("cases");
  document.getElementById("searchCase").value = term;
  filterCases();
}

const DEMO_NOTIFICATIONS = [
  { id: 1, title: "Urgent Listing Granted", text: "Motion in DC/2026/0101 listed at 10:30 AM today", time: "10 mins ago", unread: true },
  { id: 2, title: "Digital Order Published", text: "Hon'ble Justice Mehta signed bail order in DC-102", time: "45 mins ago", unread: true },
  { id: 3, title: "Daily Cause List Ready", text: "Cause list for 06-Oct-2026 finalized across 12 benches", time: "2 hours ago", unread: true }
];

function toggleNotifications() {
  const d = document.getElementById("notificationDropdown");
  d.classList.toggle("active");
  renderNotificationList();
}

function renderNotificationList() {
  const list = document.getElementById("notificationList");
  list.innerHTML = DEMO_NOTIFICATIONS.map(n => `
    <div class="notification-item ${n.unread ? 'unread' : ''}" onclick="showSection('cases'); toggleNotifications();">
      <div class="notification-item-icon">
        <svg width="14" height="14"><use href="#icon-bell"></use></svg>
      </div>
      <div class="notification-content">
        <h5>${n.title}</h5>
        <p>${n.text}</p>
        <div class="notification-time">${n.time}</div>
      </div>
    </div>
  `).join("");
}

function markNotificationsRead() {
  DEMO_NOTIFICATIONS.forEach(n => n.unread = false);
  document.getElementById("notificationCount").textContent = "0";
  renderNotificationList();
  showToast("All notifications marked as read", "info");
}

/* --------------------------------------------------------------------------
   14. INITIALIZATION ON PAGE LOAD
   -------------------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  initDataStore();
  resetFilingForm();
  renderNotificationList();
});

// Auto-redraw charts on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const dashboardSection = document.getElementById("dashboard");
    if (dashboardSection && !dashboardSection.classList.contains("hidden")) {
      drawCategoryDonutChart();
      drawMonthlyTrendChart();
    }
  }, 200);
});
