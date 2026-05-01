const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const focusButtons = document.querySelectorAll(".focus-item");
const focusDetail = document.querySelector("#focus-detail");
const filters = document.querySelectorAll(".filter");
const papers = document.querySelectorAll(".paper");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const certificateGrid = document.querySelector("#certificate-grid");
const allCertificateGrid = document.querySelector("#all-certificate-grid");
const certificatePhaseGrids = document.querySelectorAll("[data-cert-phase]");
const certificateSearch = document.querySelector("#certificate-search");
const certificateFilters = document.querySelectorAll(".cert-filter");

const focusCopy = {
  investigacion:
    "Investigo la transición desde modelos centrados en automatización hacia ecosistemas industriales donde la tecnología aumenta las capacidades humanas.",
  datos:
    "Analizo el papel de la inteligencia artificial, IoT y sistemas inteligentes como infraestructura clave para operaciones más seguras y resilientes.",
  politicas:
    "Exploro cómo los gemelos digitales y la robótica colaborativa fortalecen sistemas human-in-the-loop sin desplazar el criterio humano.",
  consultoria:
    "Relaciono productividad industrial con bienestar humano, sostenibilidad ambiental y alineación con objetivos de desarrollo sostenible."
};

const certificates = [
  {
    title: "Make from beginner to pro - AI Automations and AI agents",
    issuer: "Udemy",
    issued: "Mar. 2026",
    id: "UC-ea4f7bb2-61c4-45e0-8942-a97653877944",
    skills: ["Automatización de procesos", "AI agents"],
    categories: ["ai"]
  },
  {
    title: "Curso de Microsoft Power Automate para principiantes",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "UC-b04ed9b0-7f87-400b-87f0-4841ce7f487a",
    skills: ["Microsoft Power Automate", "Automatización de procesos"],
    categories: ["ai"]
  },
  {
    title: "Lean Six Sigma Black Belt (Accredited)",
    issuer: "Quality Gurus Inc.",
    issued: "Feb. 2026",
    id: "99502162732426",
    skills: ["Mejora continua", "Lean Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "Dashboards en minutos con la IA de Claude: impactantes y ya",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "UC-8ff63be5-338e-4e70-b35b-779b61722449",
    skills: ["IA", "Dashboards"],
    categories: ["ai", "data"]
  },
  {
    title: "Practical AI for Work",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "UC-679d0ec8-0ba3-4a21-87fc-b4bee02aa0ce",
    skills: ["IA aplicada", "Productividad"],
    categories: ["ai"]
  },
  {
    title: "Curso Microsoft Copilot 365: IA generativa en Microsoft 365",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "UC-7db80e5f-f0ee-4dc3-8d85-8cfe32b79bef",
    skills: ["Copilot", "IA generativa"],
    categories: ["ai"]
  },
  {
    title: "Curso Gemini Google Workspace. Máxima productividad con IA",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "UC-b0d5e510-9010-4ec4-8fa3-2b767065b4b5",
    skills: ["Gemini", "Productividad con IA"],
    categories: ["ai"]
  },
  {
    title: "AIGPE Certified Seven Basic Tools of Quality Expert",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "98038133914609",
    skills: ["Herramientas de calidad"],
    categories: ["quality"]
  },
  {
    title: "AIGPE Certified Five Forces Analysis Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "99864498560064",
    skills: ["Análisis estratégico", "Calidad"],
    categories: ["quality", "leadership"]
  },
  {
    title: "AIGPE Certified Kano Analysis Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "20035426191498",
    skills: ["Kano", "Voz del cliente"],
    categories: ["quality"]
  },
  {
    title: "AIGPE Certified Voice of Customer (VOC) Techniques Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "60843396908575",
    skills: ["VOC", "Calidad"],
    categories: ["quality"]
  },
  {
    title: "AIGPE Certified Pareto Analysis Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "31874069337505",
    skills: ["Pareto", "Mejora de calidad"],
    categories: ["quality", "data"]
  },
  {
    title: "Lean Management and Manufacturing Expert",
    issuer: "Six Sigma Academy Amsterdam (SSAA)",
    issued: "Feb. 2026",
    id: "78f2280a-0268-4ad3-a70d-de28b18ee4e0",
    skills: ["Lean manufacturing"],
    categories: ["lean"]
  },
  {
    title: "AIGPE Certified Lean Expert",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "26496302734379",
    skills: ["Mejora continua", "Lean manufacturing"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Just-In-Time Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "13228414976729",
    skills: ["JIT", "Mejora de calidad"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Lean Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Feb. 2026",
    id: "50796758661675",
    skills: ["Lean"],
    categories: ["lean"]
  },
  {
    title: "Mastering ISO 9001:2015 Quality Management System - Accredited",
    issuer: "Udemy",
    issued: "Feb. 2026",
    id: "",
    skills: ["Gestión de la calidad", "ISO 9001"],
    categories: ["quality"]
  },
  {
    title: "Lean Six Sigma Black Belt",
    issuer: "Six Sigma Academy Amsterdam (SSAA)",
    issued: "Feb. 2026",
    id: "11aaf1e6-3071-4985-953b-0f1327a6b3ca",
    skills: ["Mejora continua", "Lean Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Six Sigma Academy Amsterdam (SSAA)",
    issued: "Feb. 2026",
    id: "f07da8ed-29ba-48f9-bc2d-5eb8ddd3265f",
    skills: ["Lean Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Six Sigma Black Belt",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Ene. 2026",
    id: "16185953456708",
    skills: ["Mejora continua", "Lean Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Six Sigma Green Belt",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Ene. 2026",
    id: "22108444576044",
    skills: ["Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Six Sigma Yellow Belt",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Ene. 2026",
    id: "72170490122467",
    skills: ["Six Sigma"],
    categories: ["lean", "quality"]
  },
  {
    title: "Comunica con impacto e influencia",
    issuer: "The London School of Economics and Political Science (LSE)",
    issued: "Ene. 2026",
    id: "OA-2026-0107002137557",
    skills: ["Comunicacion", "Influencia"],
    categories: ["leadership"]
  },
  {
    title: "AIGPE Certified Root Cause Analysis Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Ene. 2026",
    id: "83630536226479",
    skills: ["Gestión de la calidad", "Análisis estadístico"],
    categories: ["quality", "data"]
  },
  {
    title: "AIGPE Certified Value Stream Mapping (VSM) Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Dic. 2025",
    id: "29413575642731",
    skills: ["Mapa del flujo de valor"],
    categories: ["lean", "quality"]
  },
  {
    title: "AIGPE Certified Six Sigma White Belt",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Dic. 2025",
    id: "95883946844922",
    skills: ["Mejora de productividad"],
    categories: ["lean"]
  },
  {
    title: "AIGPE Certified Quality Function Deployment (QFD) Specialist",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    issued: "Dic. 2025",
    id: "94996464457046",
    skills: ["QFD", "Gestión de la calidad"],
    categories: ["quality"]
  },
  {
    title: "KPIs: Key Performance Indicators A-Z: Performance Management",
    issuer: "Udemy",
    issued: "Dic. 2025",
    id: "UC-56ea9e10-bf15-4353-a862-8fe463c57782",
    skills: ["KPIs", "Lean manufacturing"],
    categories: ["data", "lean"]
  },
  {
    title: "Introducción básica a Lean Manufacturing",
    issuer: "Más Productividad",
    issued: "Dic. 2025",
    id: "20251278623",
    skills: ["Lean manufacturing", "Productividad"],
    categories: ["lean"]
  },
  {
    title: "Time Management",
    issuer: "Harvard Business School",
    issued: "Oct. 2025",
    id: "OA-2025-1023001871013",
    skills: ["Mejora continua", "Trabajo en equipo"],
    categories: ["leadership"]
  },
  {
    title: "Especialista en calidad: evaluación y gestión de proveedores",
    issuer: "Alison",
    issued: "Oct. 2025",
    id: "",
    skills: ["Gestión de la calidad", "Control de calidad"],
    categories: ["quality"]
  },
  {
    title: "Curso completo de estadística a nivel universitario",
    issuer: "Udemy",
    issued: "Oct. 2025",
    id: "UC-982b369a-f4af-4a22-b559-7ab7ed703b71",
    skills: ["Análisis estadístico", "Control de calidad"],
    categories: ["data", "quality"]
  },
  {
    title: "Lean Manufacturing A-Z: Operations Management & Six Sigma",
    issuer: "Udemy",
    issued: "Sept. 2025",
    id: "UC-64caae23-9239-424d-abbb-4a244e47e4c5",
    skills: ["Mejora continua", "Lean manufacturing"],
    categories: ["lean"]
  },
  {
    title: "Excel total en 30 días: Excel completo de cero a avanzado",
    issuer: "Udemy",
    issued: "Ago. 2025",
    id: "UC-7b0186bf-c5a4-46ad-9af6-0c627c4841a7",
    skills: ["KPIs", "Microsoft Excel"],
    categories: ["data"]
  },
  {
    title: "Power BI Fundamentals",
    issuer: "Santander",
    issued: "Ago. 2025",
    id: "OA-2025-0826001641807",
    skills: ["KPIs", "Microsoft Power BI"],
    categories: ["data"]
  },
  {
    title: "Excel - From basics to intermediate",
    issuer: "Santander",
    issued: "Ago. 2025",
    id: "OA-2025-0825001638197",
    skills: ["KPIs", "Microsoft Excel"],
    categories: ["data"]
  },
  {
    title: "Habilidades duraderas para el entorno profesional",
    issuer: "Universidad de Las Americas (EC)",
    issued: "Ago. 2025",
    id: "126B03105843",
    skills: ["Trabajo en equipo", "Entorno profesional"],
    categories: ["leadership"]
  },
  {
    title: "Introducción al comportamiento del consumidor",
    issuer: "University of Miami",
    issued: "Jul. 2025",
    id: "OA-2025-0725001475102",
    skills: ["Servicio al cliente", "Marketing digital"],
    categories: ["leadership"]
  },
  {
    title: "Neuromarketing",
    issuer: "Udemy",
    issued: "Jul. 2025",
    id: "",
    skills: ["Marketing digital", "Consumidor"],
    categories: ["leadership"]
  },
  {
    title: "Storytelling en el Marketing Digital",
    issuer: "University of Chicago",
    issued: "Jul. 2025",
    id: "OA-2025-0723001460509",
    skills: ["Storytelling", "Marketing digital"],
    categories: ["leadership"]
  },
  {
    title: "Domina la IA con Gemini",
    issuer: "Google",
    issued: "Jul. 2025",
    id: "",
    skills: ["Gemini", "Productividad"],
    categories: ["ai"]
  },
  {
    title: "Negociación",
    issuer: "Esade",
    issued: "Jul. 2025",
    id: "OA-2025-0715001381532",
    skills: ["Negociacion", "Trabajo en equipo"],
    categories: ["leadership"]
  },
  {
    title: "Copilot: Prompting responsable: maximiza la IA en tu negocio",
    issuer: "Microsoft",
    issued: "Jul. 2025",
    id: "OA-2025-0714001374814",
    skills: ["Copilot", "IA responsable"],
    categories: ["ai"]
  },
  {
    title: "Google: Inteligencia Artificial y productividad",
    issuer: "Google",
    issued: "Jul. 2025",
    id: "OA-2025-0713001370344",
    skills: ["IA", "Productividad"],
    categories: ["ai"]
  },
  {
    title: "Introducción a la IA generativa",
    issuer: "MIT Professional Education en español",
    issued: "Jul. 2025",
    id: "OA-2025-0712001365729",
    skills: ["IA generativa", "Productividad"],
    categories: ["ai"]
  },
  {
    title: "Rising Star - Business",
    issuer: "Celonis",
    issued: "Jun. 2025",
    id: "",
    skills: ["Process mining", "Business value"],
    categories: ["ai", "data"]
  },
  {
    title: "Deliver Business Value with Celonis",
    issuer: "Celonis",
    issued: "Jun. 2025",
    id: "",
    skills: ["Celonis", "Process mining"],
    categories: ["ai", "data"]
  },
  {
    title: "High-Performance Leadership: Lessons from Formula 1",
    issuer: "Santander",
    issued: "Jun. 2025",
    id: "OA-2025-0616001238458",
    skills: ["Liderazgo de equipos"],
    categories: ["leadership"]
  },
  {
    title: "Automatización de procesos básica",
    issuer: "Bizagi",
    issued: "Jun. 2025",
    id: "",
    skills: ["BPMN", "Bizagi Studio"],
    categories: ["ai", "quality"]
  },
  {
    title: "L1 Introducción - Certificado en BPMN",
    issuer: "AuraQuantic",
    issued: "May. 2025",
    id: "",
    skills: ["BPMN"],
    categories: ["quality"]
  },
  {
    title: "Profundización en Bizagi Modeler Enterprise",
    issuer: "Bizagi",
    issued: "May. 2025",
    id: "",
    skills: ["BPMN", "Bizagi Studio"],
    categories: ["quality"]
  },
  {
    title: "Modelamiento de Procesos",
    issuer: "Bizagi",
    issued: "May. 2025",
    id: "",
    skills: ["BPMN", "Bizagi Studio"],
    categories: ["quality"]
  }
];

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

const escapeHTML = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const certificateCardMarkup = (certificate) => `
  <article>
    <time>${escapeHTML(certificate.issued)}</time>
    <h3>${escapeHTML(certificate.title)}</h3>
    <p>${escapeHTML(certificate.issuer)}</p>
    <span class="credential-id">${
      certificate.id ? `ID de credencial: ${escapeHTML(certificate.id)}` : "Credencial disponible en LinkedIn"
    }</span>
    <div class="skill-tags">
      ${certificate.skills.map((skill) => `<span>${escapeHTML(skill)}</span>`).join("")}
    </div>
    <a href="https://www.linkedin.com/in/luis-fernando-su%C3%A1rez-alc%C3%ADvar-9bb5a4295/" target="_blank" rel="noreferrer">Ver credencial</a>
  </article>
`;

const renderAllCertificates = () => {
  if (!allCertificateGrid) return;
  allCertificateGrid.innerHTML = certificates.map(certificateCardMarkup).join("");
};

const renderCertificatePhases = () => {
  certificatePhaseGrids.forEach((grid) => {
    const category = grid.dataset.certPhase;
    const filtered = certificates.filter((certificate) =>
      certificate.categories.includes(category)
    );

    grid.innerHTML = filtered.map(certificateCardMarkup).join("");
  });
};

const renderCertificates = () => {
  if (!certificateGrid) return;

  const activeFilter =
    document.querySelector(".cert-filter.active")?.dataset.certFilter || "all";
  const query = (certificateSearch?.value || "").trim().toLowerCase();

  const filtered = certificates.filter((certificate) => {
    const matchesCategory =
      activeFilter === "all" || certificate.categories.includes(activeFilter);
    const searchable = [
      certificate.title,
      certificate.issuer,
      certificate.issued,
      certificate.id,
      ...certificate.skills
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchable.includes(query));
  });
  const shouldLimit = activeFilter === "all" && !query;
  const visibleCertificates = shouldLimit ? filtered.slice(0, 5) : filtered;

  certificateGrid.innerHTML = visibleCertificates.map(certificateCardMarkup).join("");

  if (!filtered.length) {
    certificateGrid.innerHTML =
      '<article><time>Sin resultados</time><h3>No encontré certificaciones con ese filtro.</h3><p>Prueba otra palabra clave o vuelve a seleccionar "Todas".</p></article>';
  }
};

certificateFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    certificateFilters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    renderCertificates();
  });
});

certificateSearch?.addEventListener("input", renderCertificates);
renderAllCertificates();
renderCertificatePhases();
renderCertificates();

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    focusButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    focusDetail.textContent = focusCopy[button.dataset.detail];
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    papers.forEach((paper) => {
      paper.classList.toggle(
        "is-hidden",
        category !== "all" && paper.dataset.category !== category
      );
    });
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(data.get("subject"));
  const message = encodeURIComponent(
    `Hola, soy ${data.get("name")}.\n\n${data.get("message")}\n\nCorreo: ${data.get("email")}`
  );

  formStatus.textContent = "Abriendo tu cliente de correo...";
  window.location.href = `mailto:tu.correo@dominio.com?subject=${subject}&body=${message}`;

  setTimeout(() => {
    formStatus.textContent = "Gracias. Tu mensaje quedó listo para enviarse desde tu correo.";
    contactForm.reset();
  }, 700);
});
