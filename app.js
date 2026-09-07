/**
 * AI · AX PULSE - Core Application Logic
 * Real-time AI Transformation News Curation & Executive Intelligence
 */

// ==========================================================================
// 1. Curated AI / AX News Dataset
// ==========================================================================
const NEWS_DATA = [
  {
    id: "news-001",
    title: "구글 딥마인드, 멀티모달 자율 에이전트 전용 플랫폼 'Gemini Enterprise Agentic Suite' 전격 공개",
    category: "agents",
    categoryLabel: "자율 에이전트",
    badgeClass: "agents",
    time: "15분 전",
    timestamp: Date.now() - 15 * 60 * 1000,
    source: "Google DeepMind Press Room",
    readTime: "4분 소요",
    impactScore: 9.8,
    impactTier: "최상위 AX 전환",
    views: 4820,
    whyMatters: "단순 챗봇을 넘어 엔터프라이즈 ERP, CRM과 결합되어 복잡한 멀티스텝 비즈니스 프로세스를 100% 자율 완결하는 에이전트 표준 체계 등장.",
    summary: "구글이 기업 내 레거시 소프트웨어와 멀티모달 추론을 결합하여 복잡한 재무 감사, 인사 발령, 공급망 조율을 완벽히 자동화하는 차세대 에이전틱 플랫폼을 정식 발표했습니다.",
    fullSummary: [
      "Gemini 2.5 기반의 자율 에이전트 오케스트레이션 프레임워크로, API 호출뿐 아니라 브라우저 및 내부 GUI 화면 조작 가능.",
      "기업 데이터 유출 방지를 위한 VPC 샌드박스 및 실시간 권한 감사(Role-Based Agent Security) 탑재.",
      "포춘 500대 기업 파일럿 결과 일일 워크플로우 처리 시간 67% 단축 입증."
    ],
    actionPlan: "기존 RAG 중심 검색 봇 도입 계획을 재검토하고, 내부 API 및 샌드박스를 연동할 수 있는 '에이전틱 워크플로우 아키텍처'로 조기 전환 권고.",
    tags: ["#Gemini", "#자율에이전트", "#오케스트레이션", "#엔터프라이즈보안"]
  },
  {
    id: "news-002",
    title: "글로벌 금융권, 온프레미스 경량 LLM 기반 'AX(AI 전환) 2.0' 착수… 데이터 주권 확보 가속",
    category: "enterprise",
    categoryLabel: "엔터프라이즈 AX",
    badgeClass: "enterprise",
    time: "42분 전",
    timestamp: Date.now() - 42 * 60 * 1000,
    source: "Financial Times Tech Insight",
    readTime: "5분 소요",
    impactScore: 9.5,
    impactTier: "금융 AX 혁신",
    views: 3950,
    whyMatters: "망분리와 개인정보보호 규제가 엄격한 금융권에서 퍼블릭 클라우드 대신 사내 격리형 소형 고성능 모델(sLLM) 도입이 AX의 주류로 안착.",
    summary: "글로벌 상위 10개 투자은행 및 국내 주요 금융지주들이 사내 핵심 금융 데이터의 외부 반출 없이 실시간 여신 심사와 이상거래(FDS)를 탐지하는 온프레미스 AI 클러스터 구축을 완료했습니다.",
    fullSummary: [
      "7B~14B 파라미터 경량 오픈소스 모델을 금융 특화 데이터로 파인튜닝하여 대형 상용 모델 대비 92% 수준의 성능 달성.",
      "추론 지연 시간(Latency) 18ms 이하로 단축하여 실시간 증권 트레이딩 보조에 즉각 투입.",
      "클라우드 종속성 탈피 및 연간 AI 인프라 유지 비용 40% 이상 절감 효과 달성."
    ],
    actionPlan: "민감 정보 취급 부서는 퍼블릭 API 의존도를 낮추고 양자화(Quantization)된 자체 sLLM 파이프라인과 프라이빗 벡터DB 인프라를 우선 검토해야 함.",
    tags: ["#금융AX", "#온프레미스", "#sLLM", "#데이터주권", "#망분리"]
  },
  {
    id: "news-003",
    title: "엔비디아 차세대 블랙웰 울트라(Blackwell Ultra), 에이전트 추론 지연 시간 4.2배 단축 발표",
    category: "frontier",
    categoryLabel: "프론티어 기술",
    badgeClass: "frontier",
    time: "1시간 전",
    timestamp: Date.now() - 60 * 60 * 1000,
    source: "Reuters Technology Desk",
    readTime: "3분 소요",
    impactScore: 9.6,
    impactTier: "핵심 인프라",
    views: 6100,
    whyMatters: "자율 에이전트가 사람처럼 실시간으로 도구를 호출하고 반응하기 위한 최대 걸림돌이었던 추론 지연 시간(Latency)의 획기적 해소.",
    summary: "엔비디아가 실시간 멀티스텝 추론(Multi-Step Reasoning)에 특화된 차세대 HBM3e 메모리 및 트랜스포머 엔진을 탑재한 블랙웰 울트라를 공개하며 전력 효율과 반응 속도를 대폭 개선했습니다.",
    fullSummary: [
      "토큰당 전력 소모량을 이전 세대 대비 55% 감축하여 데이터센터 운용 비용 대폭 절감.",
      "에이전트가 생각하는 시간(Thinking Time)을 실시간 대화 수준인 0.3초 이내로 단축.",
      "주요 클라우드 서비스 공급자(CSP) 및 온프레미스 엔터프라이즈 솔루션에 3분기부터 순차 공급."
    ],
    actionPlan: "향후 2년간 AI 인프라 구매 및 클라우드 계약 시 최신 칩셋 적용 인스턴스의 단위 비용 대비 토큰 생성 속도를 ROI 산정 기준으로 재조정할 것.",
    tags: ["#NVIDIA", "#Blackwell", "#추론가속", "#AI하드웨어"]
  },
  {
    id: "news-004",
    title: "제조업 AX 혁명: BMW·현대차, 조립 라인에 '시각-행동 파운데이션 모델(VLA)' 로봇 현장 배치",
    category: "industry",
    categoryLabel: "산업별 도입 사례",
    badgeClass: "industry",
    time: "2시간 전",
    timestamp: Date.now() - 120 * 60 * 1000,
    source: "Automotive World & Tech Daily",
    readTime: "4분 소요",
    impactScore: 9.3,
    impactTier: "스마트팩토리 AX",
    views: 3240,
    whyMatters: "사전 하드코딩된 규칙 기반 로봇에서 벗어나, 자연어 지시와 카메라 시각 정보만으로 변칙적인 조립 오차를 스스로 수정하는 피지컬 AI 본격화.",
    summary: "완성차 공장에 시각-언어-행동(Vision-Language-Action, VLA) 모델을 탑재한 휴머노이드 및 다관절 협동 로봇이 투입되어 불량률을 0.02%까지 낮추는 데 성공했습니다.",
    fullSummary: [
      "새로운 차종 생산 시 필요한 로봇 티칭(Teaching) 기간이 기존 3주에서 반나절(4시간)로 단축.",
      "실시간 불량 부품 식별 및 자동 보정 작업을 인간 작업자와의 안전 협업 프로토콜 하에 수행.",
      "물류 및 제조 현장의 피지컬 AX 투자 수익률(ROI) 회수 기간이 18개월 이내로 단축."
    ],
    actionPlan: "제조 및 물류 기업은 단순 로봇 자동화를 넘어 파운데이션 모델 기반의 자율 시각 지능(VLA) 파일럿 라인을 선제적으로 구축할 필요가 있음.",
    tags: ["#제조업AX", "#휴머노이드", "#VLA모델", "#피지컬AI", "#스마트팩토리"]
  },
  {
    id: "news-005",
    title: "EU AI 법안(AI Act) 2단계 발효: 글로벌 기업 대상 '고위험 AI 시스템 규제 체크리스트' 배포",
    category: "policy",
    categoryLabel: "규제 및 거버넌스",
    badgeClass: "policy",
    time: "3시간 전",
    timestamp: Date.now() - 180 * 60 * 1000,
    source: "European AI Office Official Gazette",
    readTime: "6분 소요",
    impactScore: 8.8,
    impactTier: "글로벌 거버넌스",
    views: 2890,
    whyMatters: "채용, 신용 평가, 중요 인프라에 AI를 적용하는 기업은 모델 설명가능성 및 편향 감사 보고서 제출이 의무화되며, 미이행 시 막대한 과징금 부과.",
    summary: "유럽연합 집행위원회가 전 세계 기업을 대상으로 고위험 AI 분류 기준과 기술 문서 작성 지침, 데이터 품질 관리 요건을 담은 공식 컴플라이언스 가이드를 확정했습니다.",
    fullSummary: [
      "AI 모델의 학습 데이터 출처, 저작권 준수 증빙 및 정기적인 알고리즘 편향(Bias) 테스트 필수화.",
      "사람의 개입(Human-in-the-Loop) 없는 전자동 인사/신용 결정 시스템의 경우 엄격한 제재 적용.",
      "최대 전 세계 연간 매출의 7% 또는 3,500만 유로 상당의 과징금 조항 적용 시작."
    ],
    actionPlan: "사내 'AI 윤리/거버넌스 위원회'를 신설하고, 프로덕션에 배포된 모든 사내외 AI 모델의 입출력 로깅과 설명가능성 파이프라인을 점검할 것.",
    tags: ["#EU_AI법안", "#AI거버넌스", "#컴플라이언스", "#고위험AI"]
  },
  {
    id: "news-006",
    title: "엔터프라이즈 코딩 AX: Anthropic, 기업 맞춤형 'Claude Team Code Spaces & MCP 2.0' 출시",
    category: "enterprise",
    categoryLabel: "엔터프라이즈 AX",
    badgeClass: "enterprise",
    time: "4시간 전",
    timestamp: Date.now() - 240 * 60 * 1000,
    source: "Anthropic Enterprise News",
    readTime: "4분 소요",
    impactScore: 9.2,
    impactTier: "개발 생산성 AX",
    views: 4120,
    whyMatters: "개발자 개인 도구를 넘어 전사 레포지토리와 아키텍처 컨벤션을 학습해 팀 단위 코드 리뷰와 리팩터링을 주도하는 엔지니어링 AX의 도래.",
    summary: "앤트로픽이 Model Context Protocol(MCP) 생태계를 대폭 확장하여, 팀 전체의 Git 히스토리와 사내 지식 베이스를 자율 학습하는 팀 코딩 에이전트 환경을 공개했습니다.",
    fullSummary: [
      "사내 코딩 스타일 가이드와 보안 취약점 룰셋을 실시간 동기화하여 CI/CD 파이프라인에서 자동 패치 제안.",
      "다국적 개발팀 간의 아키텍처 문서화 및 레거시 코드 현대화(Modernization) 생산성 3.4배 향상.",
      "로컬 IDE와 클라우드 샌드박스를 원활하게 잇는 고신뢰 MCP 2.0 프로토콜 기본 채택."
    ],
    actionPlan: "개발 조직의 코파일럿 단일 도입 단계를 넘어, 전사적 MCP 인프라와 CI 연동 자동화 에이전트 시스템을 표준 도구로 채택할 것.",
    tags: ["#Anthropic", "#Claude", "#MCP", "#엔지니어링AX", "#코드현대화"]
  },
  {
    id: "news-007",
    title: "헬스케어 AX 돌파구: 다중 에이전트 기반 신약 임상시험 심사, 3주에서 '4시간'으로 단축",
    category: "industry",
    categoryLabel: "산업별 도입 사례",
    badgeClass: "industry",
    time: "5시간 전",
    timestamp: Date.now() - 300 * 60 * 1000,
    source: "BioTech Journal & Lancet Digital Health",
    readTime: "5분 소요",
    impactScore: 9.1,
    impactTier: "바이오헬스 AX",
    views: 3100,
    whyMatters: "규제 문서 검토, 유효성 데이터 교차 검증, 부작용 상관관계 분석을 전문 에이전트 협업으로 처리하여 신약 개발 사이클 비용 획기적 축소.",
    summary: "글로벌 제약사들이 수천 페이지에 달하는 임상 프로토콜과 FDA 규격 문서를 검증하는 전문 서브에이전트 군단을 도입해 심사 병목을 획기적으로 해소했습니다.",
    fullSummary: [
      "의학 논문 교차 검증 에이전트, 통계 이상치 탐지 에이전트, 독성 예측 모델이 상호 비판(Reflective Review)하며 정확도 99.4% 기록.",
      "환자 모집 기준 필터링 및 프로토콜 최적화 기간을 평균 21일에서 당일 처리로 혁신.",
      "임상 2상 진입 비용 평균 1,200만 달러 절감 기대."
    ],
    actionPlan: "문서 기반 규제 및 검증 프로세스가 핵심인 산업군(의료, 법률, 특허)은 다중 에이전트 상호 비판(Multi-Agent Debate) 검증 기법을 필수 도입할 것.",
    tags: ["#바이오AX", "#임상시험", "#멀티에이전트", "#헬스케어혁신"]
  },
  {
    id: "news-008",
    title: "AI 에이전트 표준 프로토콜 경쟁 본격화: W3C와 글로벌 빅테크 'Agent-to-Agent 웹 표준' 추진",
    category: "frontier",
    categoryLabel: "프론티어 기술",
    badgeClass: "frontier",
    time: "6시간 전",
    timestamp: Date.now() - 360 * 60 * 1000,
    source: "W3C Standards Working Group",
    readTime: "3분 소요",
    impactScore: 8.9,
    impactTier: "생태계 표준화",
    views: 2650,
    whyMatters: "서로 다른 회사의 AI 에이전트들이 사람의 중개 없이 자율적으로 협상하고 결제하며 작업을 분담하는 '에이전트 웹' 인프라 토대 구축.",
    summary: "웹 표준화 기구 W3C와 주요 테크 기업들이 에이전트 간 신원 인증(Agent Identity), 결제 계약(Smart Contract), 권한 위임을 위한 공통 프로토콜 표준안을 발의했습니다.",
    fullSummary: [
      "인간 사용자가 승인한 예산 한도 내에서 여행 예약, B2B 조달 계약을 에이전트끼리 자율 체결하는 명세 포함.",
      "에이전트의 오작동 및 환불 책임을 명확히 규정하는 디지털 서명(Cryptographic Agent Signature) 체계 도입.",
      "폐쇄형 플랫폼 생태계를 넘어 개방형 멀티 에이전트 경제(Agent Economy) 활성화 전망."
    ],
    actionPlan: "사내 솔루션 설계 시 독자적 폐쇄 프로토콜 대신 표준 API 및 향후 발표될 에이전트 간 통신 명세(Agent Identity)와의 호환성을 염두에 둘 것.",
    tags: ["#AgentProtocol", "#W3C", "#에이전트경제", "#표준화"]
  }
];

// Trending keywords list
const TRENDING_KEYWORDS = [
  "Gemini 2.5",
  "자율 에이전트",
  "온프레미스 AX",
  "Blackwell",
  "제조업 VLA",
  "EU AI Act",
  "MCP 2.0"
];

// Categories definition
const CATEGORIES = [
  { id: "all", label: "전체 소식", icon: "fa-solid fa-border-all" },
  { id: "enterprise", label: "🏢 엔터프라이즈 AX", icon: "" },
  { id: "agents", label: "🤖 자율 에이전트", icon: "" },
  { id: "frontier", label: "⚡ 프론티어 기술", icon: "" },
  { id: "industry", label: "🏭 산업별 도입 사례", icon: "" },
  { id: "policy", label: "⚖️ 규제 및 거버넌스", icon: "" }
];

// ==========================================================================
// 2. State Management
// ==========================================================================
const state = {
  currentCategory: "all",
  searchQuery: "",
  sortBy: "latest",
  onlyBookmarks: false,
  bookmarks: JSON.parse(localStorage.getItem("aiax_pulse_bookmarks") || "[]"),
  selectedNews: null
};

// ==========================================================================
// 3. DOM Elements
// ==========================================================================
const DOM = {
  tickerContent: document.getElementById("tickerContent"),
  totalNewsCount: document.getElementById("totalNewsCount"),
  avgImpactScore: document.getElementById("avgImpactScore"),
  trendingTags: document.getElementById("trendingTags"),
  categoryTabs: document.getElementById("categoryTabs"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  sortSelect: document.getElementById("sortSelect"),
  bookmarkFilterBtn: document.getElementById("bookmarkFilterBtn"),
  bookmarkBadge: document.getElementById("bookmarkBadge"),
  filterStatusBar: document.getElementById("filterStatusBar"),
  filterStatusText: document.getElementById("filterStatusText"),
  resetFilterBtn: document.getElementById("resetFilterBtn"),
  newsGrid: document.getElementById("newsGrid"),
  emptyState: document.getElementById("emptyState"),
  emptyResetBtn: document.getElementById("emptyResetBtn"),
  // Detail Modal
  detailModal: document.getElementById("detailModal"),
  closeDetailModalBtn: document.getElementById("closeDetailModalBtn"),
  modalCategory: document.getElementById("modalCategory"),
  modalDate: document.getElementById("modalDate"),
  modalImpact: document.getElementById("modalImpact"),
  modalTitle: document.getElementById("modalTitle"),
  modalSource: document.getElementById("modalSource"),
  modalWhyMatters: document.getElementById("modalWhyMatters"),
  modalSummaryList: document.getElementById("modalSummaryList"),
  modalActionPlan: document.getElementById("modalActionPlan"),
  modalTags: document.getElementById("modalTags"),
  modalBookmarkToggleBtn: document.getElementById("modalBookmarkToggleBtn"),
  modalCopySummaryBtn: document.getElementById("modalCopySummaryBtn"),
  // Briefing Modal
  briefingBtn: document.getElementById("briefingBtn"),
  briefingModal: document.getElementById("briefingModal"),
  closeBriefingModalBtn: document.getElementById("closeBriefingModalBtn"),
  briefingDate: document.getElementById("briefingDate"),
  briefingContentText: document.getElementById("briefingContentText"),
  copyBriefingBtn: document.getElementById("copyBriefingBtn"),
  // Toast
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 4. Initialization & Setup
// ==========================================================================
function initApp() {
  renderTicker();
  renderMetrics();
  renderTrendingKeywords();
  renderCategoryTabs();
  renderNewsGrid();
  updateBookmarkBadge();
  setupEventListeners();
}

// Render real-time ticker
function renderTicker() {
  const itemsHTML = NEWS_DATA.map(item => `
    <div class="ticker-item" data-id="${item.id}">
      <span class="ticker-tag">${item.categoryLabel}</span>
      <span class="ticker-title">${item.title}</span>
    </div>
  `).join("");

  // Duplicate for seamless infinite loop
  DOM.tickerContent.innerHTML = itemsHTML + itemsHTML;

  // Add click handler to jump/open detail
  DOM.tickerContent.querySelectorAll(".ticker-item").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-id");
      openDetailModal(id);
    });
  });
}

// Render top hero metrics
function renderMetrics() {
  DOM.totalNewsCount.textContent = NEWS_DATA.length;
  const avg = (NEWS_DATA.reduce((acc, item) => acc + item.impactScore, 0) / NEWS_DATA.length).toFixed(1);
  DOM.avgImpactScore.textContent = avg;
}

// Render trending keyword pills
function renderTrendingKeywords() {
  DOM.trendingTags.innerHTML = TRENDING_KEYWORDS.map(kw => `
    <button class="tag-pill-btn" data-keyword="${kw}">
      # ${kw}
    </button>
  `).join("");

  DOM.trendingTags.querySelectorAll(".tag-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const kw = btn.getAttribute("data-keyword");
      DOM.searchInput.value = kw;
      handleSearchChange(kw);
    });
  });
}

// Render category filter tabs with dynamic counts
function renderCategoryTabs() {
  DOM.categoryTabs.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === "all" 
      ? NEWS_DATA.length 
      : NEWS_DATA.filter(item => item.category === cat.id).length;
    
    const activeClass = state.currentCategory === cat.id && !state.onlyBookmarks ? "active" : "";
    return `
      <button class="category-tab-btn ${activeClass}" data-category="${cat.id}">
        <span>${cat.label}</span>
        <span class="tab-count">${count}</span>
      </button>
    `;
  }).join("");

  DOM.categoryTabs.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      state.currentCategory = cat;
      state.onlyBookmarks = false;
      DOM.bookmarkFilterBtn.setAttribute("data-active", "false");
      updateCategoryTabsActive();
      renderNewsGrid();
    });
  });
}

function updateCategoryTabsActive() {
  DOM.categoryTabs.querySelectorAll(".category-tab-btn").forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === state.currentCategory && !state.onlyBookmarks) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// ==========================================================================
// 5. News Filtering & Rendering
// ==========================================================================
function getFilteredNews() {
  let list = [...NEWS_DATA];

  // Bookmark filter
  if (state.onlyBookmarks) {
    list = list.filter(item => state.bookmarks.includes(item.id));
  } else if (state.currentCategory !== "all") {
    list = list.filter(item => item.category === state.currentCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(item => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.whyMatters.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q)) ||
        item.source.toLowerCase().includes(q)
      );
    });
  }

  // Sort
  if (state.sortBy === "latest") {
    list.sort((a, b) => b.timestamp - a.timestamp);
  } else if (state.sortBy === "impact") {
    list.sort((a, b) => b.impactScore - a.impactScore);
  } else if (state.sortBy === "views") {
    list.sort((a, b) => b.views - a.views);
  }

  return list;
}

function renderNewsGrid() {
  const filtered = getFilteredNews();

  // Handle active filter status bar
  updateFilterStatusBar(filtered.length);

  if (filtered.length === 0) {
    DOM.newsGrid.innerHTML = "";
    DOM.emptyState.style.display = "block";
    return;
  }

  DOM.emptyState.style.display = "none";
  DOM.newsGrid.innerHTML = filtered.map(item => {
    const isBookmarked = state.bookmarks.includes(item.id);
    return `
      <article class="news-card" data-id="${item.id}">
        <div class="card-meta-top">
          <span class="card-category-badge ${item.badgeClass}">
            <i class="fa-solid fa-tag"></i> ${item.categoryLabel}
          </span>
          <div class="card-time-info">
            <span><i class="fa-regular fa-clock"></i> ${item.time}</span>
            <span>·</span>
            <span>${item.readTime}</span>
          </div>
        </div>

        <div class="card-main">
          <h3 class="card-title">${item.title}</h3>
          
          <!-- Why It Matters for AX -->
          <div class="card-impact-highlight">
            <div class="card-impact-header">
              <i class="fa-solid fa-lightbulb"></i>
              <span>Why It Matters for AX</span>
            </div>
            <p class="card-impact-text">${item.whyMatters}</p>
          </div>

          <p class="card-desc">${item.summary}</p>

          <div class="card-tags">
            ${item.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
          </div>
        </div>

        <div class="card-footer">
          <div class="impact-score-widget" title="비즈니스 AX 전환 영향도 지수">
            <div class="impact-circle">${item.impactScore}</div>
            <div class="impact-score-info">
              <span class="impact-score-label">AX Impact</span>
              <span class="impact-score-tier">${item.impactTier}</span>
            </div>
          </div>

          <div class="card-action-btns">
            <button class="icon-btn bookmark-toggle-btn ${isBookmarked ? 'active' : ''}" 
                    data-id="${item.id}" 
                    title="${isBookmarked ? '북마크 취소' : '북마크 저장'}">
              <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </button>
            <button class="btn btn-outline btn-sm open-detail-btn" data-id="${item.id}">
              <span>심층 분석</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach card event listeners
  DOM.newsGrid.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't trigger if clicked on bookmark button
      if (e.target.closest(".bookmark-toggle-btn")) return;
      const id = card.getAttribute("data-id");
      openDetailModal(id);
    });
  });

  DOM.newsGrid.querySelectorAll(".bookmark-toggle-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      toggleBookmark(id);
    });
  });
}

function updateFilterStatusBar(count) {
  const isFiltering = state.searchQuery.trim() !== "" || state.onlyBookmarks || state.currentCategory !== "all";
  if (!isFiltering) {
    DOM.filterStatusBar.style.display = "none";
    return;
  }

  DOM.filterStatusBar.style.display = "flex";
  let statusText = `현재 검색 및 필터 조건 결과: <strong>${count}</strong>건 표시 중`;
  if (state.onlyBookmarks) {
    statusText = `저장된 북마크 목록: <strong>${count}</strong>건`;
  } else if (state.searchQuery.trim()) {
    statusText = `"${state.searchQuery}" 검색 결과: <strong>${count}</strong>건`;
  }
  DOM.filterStatusText.innerHTML = statusText;
}

// ==========================================================================
// 6. Bookmarks & LocalStorage
// ==========================================================================
function toggleBookmark(id) {
  const index = state.bookmarks.indexOf(id);
  let isAdded = false;

  if (index > -1) {
    state.bookmarks.splice(index, 1);
    isAdded = false;
  } else {
    state.bookmarks.push(id);
    isAdded = true;
  }

  localStorage.setItem("aiax_pulse_bookmarks", JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  renderNewsGrid();

  // If modal is open, update modal bookmark button state
  if (state.selectedNews && state.selectedNews.id === id) {
    updateModalBookmarkBtnState();
  }

  showToast(
    isAdded ? "기사가 북마크에 저장되었습니다." : "북마크에서 제거되었습니다.",
    isAdded ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
  );
}

function updateBookmarkBadge() {
  DOM.bookmarkBadge.textContent = state.bookmarks.length;
}

// ==========================================================================
// 7. Detail Modal Logic
// ==========================================================================
function openDetailModal(id) {
  const news = NEWS_DATA.find(item => item.id === id);
  if (!news) return;

  state.selectedNews = news;
  news.views += 1; // Increment view count

  DOM.modalCategory.textContent = news.categoryLabel;
  DOM.modalCategory.className = `modal-category ${news.badgeClass}`;
  DOM.modalDate.textContent = `${news.time} · ${news.readTime}`;
  DOM.modalImpact.textContent = `AX Impact ${news.impactScore} / 10 (${news.impactTier})`;
  DOM.modalTitle.textContent = news.title;
  DOM.modalSource.innerHTML = `<i class="fa-solid fa-building-columns"></i> 출처: <strong>${news.source}</strong> · 조회수: ${news.views.toLocaleString()}회`;
  DOM.modalWhyMatters.textContent = news.whyMatters;

  // Summary bullets
  DOM.modalSummaryList.innerHTML = news.fullSummary.map(point => `<li>${point}</li>`).join("");

  // Action plan
  DOM.modalActionPlan.innerHTML = `<strong>실행 권고사항:</strong> ${news.actionPlan}`;

  // Tags
  DOM.modalTags.innerHTML = news.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("");

  updateModalBookmarkBtnState();

  DOM.detailModal.classList.add("open");
  DOM.detailModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  DOM.detailModal.classList.remove("open");
  DOM.detailModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.selectedNews = null;
}

function updateModalBookmarkBtnState() {
  if (!state.selectedNews) return;
  const isBookmarked = state.bookmarks.includes(state.selectedNews.id);
  DOM.modalBookmarkToggleBtn.innerHTML = `
    <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
    <span>${isBookmarked ? '북마크 해제' : '북마크 저장'}</span>
  `;
  DOM.modalBookmarkToggleBtn.setAttribute("data-active", isBookmarked ? "true" : "false");
}

// ==========================================================================
// 8. Executive Daily Briefing Generator
// ==========================================================================
function generateBriefingReport() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  DOM.briefingDate.textContent = today;

  // Compile top highlights
  const topNews = [...NEWS_DATA].sort((a, b) => b.impactScore - a.impactScore).slice(0, 4);

  let report = `# 📋 [AX Daily Executive Briefing] ${today}\n`;
  report += `작성: AI · AX Pulse 자동 인텔리전스 시스템\n\n`;
  report += `------------------------------------------------------------\n`;
  report += `■ EXECUTIVE SUMMARY (경영진 핵심 요약)\n`;
  report += `오늘의 글로벌 AI 전환(AX)의 가장 핵심 화두는 '단순 텍스트 생성'에서 '사내 데이터 격리 기반 자율 에이전트(Agentic Orchestration)'로의 전환입니다.\n`;
  report += `특히 온프레미스 경량화 모델(sLLM)과 기업용 샌드박스 표준이 본격 상용화되면서 엔터프라이즈 도입 속도가 가속화되고 있습니다.\n\n`;

  report += `------------------------------------------------------------\n`;
  report += `■ TOP STRATEGIC HIGHLIGHTS (최고 임팩트 이슈 TOP 4)\n\n`;

  topNews.forEach((item, idx) => {
    report += `${idx + 1}. [${item.categoryLabel}] ${item.title}\n`;
    report += `   - AX 영향도: ${item.impactScore} / 10 (${item.impactTier})\n`;
    report += `   - Why It Matters: ${item.whyMatters}\n`;
    report += `   - 핵심 시사점:\n`;
    item.fullSummary.forEach(bullet => {
      report += `     * ${bullet}\n`;
    });
    report += `   - 기업 적용 Action Plan: ${item.actionPlan}\n\n`;
  });

  report += `------------------------------------------------------------\n`;
  report += `■ 결론 및 이번 주 전사 권장 액션\n`;
  report += `1. 사내 도입 중인 AI 프로젝트의 '에이전틱 워크플로우' 확장 가능성 점검\n`;
  report += `2. 데이터 주권 및 사내 보안 준수를 위한 프라이빗 sLLM/인프라 비용 검토\n`;
  report += `3. 글로벌 AI 규제(EU AI Act 등)에 대응하기 위한 거버넌스 및 감사 파이프라인 수립\n`;

  DOM.briefingContentText.textContent = report;
  DOM.briefingModal.classList.add("open");
  DOM.briefingModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeBriefingModal() {
  DOM.briefingModal.classList.remove("open");
  DOM.briefingModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 9. Toast Notification System
// ==========================================================================
function showToast(message, iconClass = "fa-solid fa-circle-check") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 2800);
}

// ==========================================================================
// 10. Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Search
  DOM.searchInput.addEventListener("input", (e) => {
    handleSearchChange(e.target.value);
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    handleSearchChange("");
    DOM.searchInput.focus();
  });

  // Sort
  DOM.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderNewsGrid();
  });

  // Bookmark filter toggle
  DOM.bookmarkFilterBtn.addEventListener("click", () => {
    state.onlyBookmarks = !state.onlyBookmarks;
    DOM.bookmarkFilterBtn.setAttribute("data-active", state.onlyBookmarks ? "true" : "false");
    updateCategoryTabsActive();
    renderNewsGrid();
  });

  // Reset filters
  const resetAll = () => {
    state.currentCategory = "all";
    state.searchQuery = "";
    state.onlyBookmarks = false;
    state.sortBy = "latest";
    DOM.searchInput.value = "";
    DOM.clearSearchBtn.style.display = "none";
    DOM.sortSelect.value = "latest";
    DOM.bookmarkFilterBtn.setAttribute("data-active", "false");
    updateCategoryTabsActive();
    renderNewsGrid();
  };

  DOM.resetFilterBtn.addEventListener("click", resetAll);
  DOM.emptyResetBtn.addEventListener("click", resetAll);

  // Detail Modal Events
  DOM.closeDetailModalBtn.addEventListener("click", closeDetailModal);
  DOM.detailModal.addEventListener("click", (e) => {
    if (e.target === DOM.detailModal) closeDetailModal();
  });

  DOM.modalBookmarkToggleBtn.addEventListener("click", () => {
    if (state.selectedNews) {
      toggleBookmark(state.selectedNews.id);
    }
  });

  DOM.modalCopySummaryBtn.addEventListener("click", () => {
    if (!state.selectedNews) return;
    const textToCopy = `[AI·AX Pulse] ${state.selectedNews.title}\n\n■ Why It Matters:\n${state.selectedNews.whyMatters}\n\n■ 실행 권고사항:\n${state.selectedNews.actionPlan}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("기사 핵심 브리핑이 클립보드에 복사되었습니다.", "fa-solid fa-copy");
    });
  });

  // Briefing Modal Events
  DOM.briefingBtn.addEventListener("click", generateBriefingReport);
  DOM.closeBriefingModalBtn.addEventListener("click", closeBriefingModal);
  DOM.briefingModal.addEventListener("click", (e) => {
    if (e.target === DOM.briefingModal) closeBriefingModal();
  });

  DOM.copyBriefingBtn.addEventListener("click", () => {
    const content = DOM.briefingContentText.textContent;
    navigator.clipboard.writeText(content).then(() => {
      showToast("경영진 브리핑 리포트 전체가 복사되었습니다.", "fa-solid fa-copy");
    });
  });

  // Keyboard Shortcuts (ESC to close modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (DOM.detailModal.classList.contains("open")) closeDetailModal();
      if (DOM.briefingModal.classList.contains("open")) closeBriefingModal();
    }
  });
}

function handleSearchChange(val) {
  state.searchQuery = val;
  DOM.clearSearchBtn.style.display = val.trim() !== "" ? "block" : "none";
  renderNewsGrid();
}

// Start application
document.addEventListener("DOMContentLoaded", initApp);
