const CONFIG = {
  storageKey: "mylife_planner_v1_events",
  langKey: "mylife_planner_v1_lang",
  appearanceKey: "mylife_planner_v1_appearance",
  themeKey: "mylife_planner_v1_theme",
  radiusKey: "mylife_planner_v1_radius",
  themes: ["lavender", "ocean", "forest", "sunset", "rose", "graphite"],
  radii: ["soft", "medium", "square"],
  sentNotificationsKey: "mylife_planner_v1_sent_notifications"
};

const ICON_PATHS = {
  today: ["M12 3v2", "M12 19v2", "M3 12h2", "M19 12h2", "M5.6 5.6 7 7", "M17 17l1.4 1.4", "M18.4 5.6 17 7", "M7 17l-1.4 1.4"],
  bell: ["M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9", "M10 21h4"],
  plus: ["M12 5v14", "M5 12h14"],
  bolt: ["M13 2 4 14h7l-1 8 10-13h-7l0-7z"],
  history: ["M3 12a9 9 0 1 0 3-6.7", "M3 4v6h6", "M12 7v5l3 2"],
  finance: ["M4 19V5", "M4 19h16", "M8 16v-5", "M12 16V8", "M16 16v-3"],
  family: ["M4 11 12 4l8 7", "M6 10v10h12V10", "M10 20v-6h4v6"],
  office: ["M4 21h16", "M6 21V7l6-4 6 4v14", "M9 10h.01", "M12 10h.01", "M15 10h.01", "M9 14h.01", "M12 14h.01", "M15 14h.01"],
  car: ["M5 17h14", "M6 17l1-6 2-4h6l2 4 1 6", "M8 17v2", "M16 17v2", "M8 13h8"],
  other: ["M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"],
  reminder: ["M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9", "M10 21h4"]
};

const ICON_EXTRA = {
  today: '<circle cx="12" cy="12" r="4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
  health: '<rect x="3" y="3" width="18" height="18" rx="5"/>',
  work: '<rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V5h6v2"/><path d="M4 12h16"/>',
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V22a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 18l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
};

const TRANSLATIONS = {
  pl: {
    appName: "MyLife Planner",
    versionText: "Kalendarz i organizer",
    navToday: "Dzisiaj",
    navAdd: "Dodaj",
    navCalendar: "Kalendarz",
    navAll: "Wszystkie",
    navHistory: "Historia",
    navSettings: "Ustawienia",
    todayPanel: "Dzisiaj i zaległe",
    upcomingPanel: "Nadchodzące",
    addTitle: "Dodaj ważną sprawę",
    quickTitle: "Szybkie dodawanie",
    titleLabel: "Tytuł",
    dateLabel: "Data",
    timeLabel: "Godzina opcjonalnie",
    categoryLabel: "Kategoria",
    reminderLabel: "Przypomnienie",
    noteLabel: "Notatka opcjonalnie",
    saveEvent: "Zapisz wydarzenie",
    demoButton: "Dodaj przykładowe wydarzenia",
    notifyButton: "Włącz / testuj powiadomienia",
    allTitle: "Wszystkie aktywne sprawy",
    historyTitle: "Historia zakończonych",
    clearHistory: "Wyczyść historię zakończonych",
    settingsTitle: "Ustawienia",
    languageLabel: "Język aplikacji",
    languageNote: "Wybrany język zostanie zapamiętany w tej przeglądarce.",
    appearanceLabel: "Wygląd",
    appearanceLight: "Jasny",
    appearanceDark: "Ciemny",
    appearanceSystem: "Systemowy",
    appearanceNote: "Tryb systemowy dopasowuje planner do ustawień urządzenia.",
    themeLabel: "Motyw kolorystyczny",
    themeNote: "Motyw pozwala dopasować organizer do własnego stylu.",
    radiusLabel: "Styl okien",
    radiusSoft: "Zaokrąglone",
    radiusMedium: "Lekko zaokrąglone",
    radiusSquare: "Proste",
    radiusNote: "Miękkie okna wyglądają przyjaźnie, a proste bardziej technicznie.",
    todayCount: "dzisiaj",
    weekCount: "w tygodniu",
    overdueCount: "zaległe"
  },
  en: {
    appName: "MyLife Planner",
    versionText: "Calendar and organizer",
    navToday: "Today",
    navAdd: "Add",
    navCalendar: "Calendar",
    navAll: "All",
    navHistory: "History",
    navSettings: "Settings",
    todayPanel: "Today and overdue",
    upcomingPanel: "Upcoming",
    addTitle: "Add an important item",
    quickTitle: "Quick add",
    titleLabel: "Title",
    dateLabel: "Date",
    timeLabel: "Optional time",
    categoryLabel: "Category",
    reminderLabel: "Reminder",
    noteLabel: "Optional note",
    saveEvent: "Save event",
    demoButton: "Add sample events",
    notifyButton: "Enable / test notifications",
    allTitle: "All active items",
    historyTitle: "Completed history",
    clearHistory: "Clear completed history",
    settingsTitle: "Settings",
    languageLabel: "App language",
    languageNote: "The selected language will be saved in this browser.",
    appearanceLabel: "Appearance",
    appearanceLight: "Light",
    appearanceDark: "Dark",
    appearanceSystem: "System",
    appearanceNote: "System mode follows this device's appearance setting.",
    themeLabel: "Color theme",
    themeNote: "The theme lets you adjust the organizer to your style.",
    radiusLabel: "Window style",
    radiusSoft: "Rounded",
    radiusMedium: "Slightly rounded",
    radiusSquare: "Straight",
    radiusNote: "Soft windows feel friendly, while straight ones look more technical.",
    todayCount: "today",
    weekCount: "this week",
    overdueCount: "overdue"
  }
};

const today = new Date();
const todayISO = toISO(today);
const state = {
  lang: localStorage.getItem(CONFIG.langKey) || "pl",
  appearance: localStorage.getItem(CONFIG.appearanceKey) || "light",
  theme: localStorage.getItem(CONFIG.themeKey) || "lavender",
  radius: localStorage.getItem(CONFIG.radiusKey) || "soft",
  events: readEvents(),
  calendarDate: new Date(),
  selectedDateISO: todayISO
};

const $ = id => document.getElementById(id);

function svgIcon(name, className = "icon") {
  const paths = (ICON_PATHS[name] || []).map(path => `<path d="${path}"/>`).join("");
  return `<span class="${className}"><svg viewBox="0 0 24 24">${paths}${ICON_EXTRA[name] || ""}</svg></span>`;
}

function text(key) {
  return TRANSLATIONS[state.lang][key] || TRANSLATIONS.pl[key] || key;
}

function locale() {
  return state.lang === "pl" ? "pl-PL" : "en-GB";
}

function toISO(date) {
  const pad = value => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function sanitize(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function readEvents() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEvents() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.events));
}

function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function applyTheme() {
  document.body.classList.remove(...CONFIG.themes.map(theme => `theme-${theme}`));
  document.body.classList.add(`theme-${state.theme}`);
  document.querySelectorAll(".theme-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.theme === state.theme);
  });
}

function applyAppearance() {
  const isDark = state.appearance === "dark" || (state.appearance === "system" && prefersDark());
  document.body.classList.toggle("appearance-dark", isDark);
  document.querySelectorAll(".appearance-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.appearance === state.appearance);
  });
}

function applyRadius() {
  document.body.classList.remove(...CONFIG.radii.map(radius => `radius-${radius}`));
  document.body.classList.add(`radius-${state.radius}`);
  document.querySelectorAll(".radius-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.radius === state.radius);
  });
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelectorAll(".language-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  document.querySelectorAll(".appearance-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.appearance === state.appearance);
  });
  $("todayPill").textContent = today.toLocaleDateString(locale(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function daysBetween(dateISO) {
  const start = new Date(`${todayISO}T00:00`);
  const target = new Date(`${dateISO}T00:00`);
  return Math.round((target - start) / 86400000);
}

function formatDate(event) {
  const date = new Date(`${event.date}T00:00`);
  const formattedDate = date.toLocaleDateString(locale(), {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  return event.time ? `${formattedDate}, ${event.time}` : formattedDate;
}

function relativeDateLabel(dateISO) {
  const diff = daysBetween(dateISO);
  if (state.lang === "pl") {
    if (diff === 0) return "Dzisiaj";
    if (diff === 1) return "Jutro";
    if (diff < 0) return `${Math.abs(diff)} dni po terminie`;
    return `Za ${diff} dni`;
  }
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff < 0) return `${Math.abs(diff)} days overdue`;
  return `In ${diff} days`;
}

function categoryIcon(category) {
  const normalized = String(category || "").toLowerCase();
  if (normalized.includes("fin")) return svgIcon("finance", "cat-icon");
  if (normalized.includes("rodz") || normalized.includes("family")) return svgIcon("family", "cat-icon");
  if (normalized.includes("urz") || normalized.includes("office")) return svgIcon("office", "cat-icon");
  if (normalized.includes("zdrow") || normalized.includes("health")) return svgIcon("health", "cat-icon");
  if (normalized.includes("auto") || normalized.includes("car")) return svgIcon("car", "cat-icon");
  if (normalized.includes("prac") || normalized.includes("work")) return svgIcon("work", "cat-icon");
  return svgIcon("other", "cat-icon");
}

function renderEvent(event) {
  const note = event.note ? `<div class="event-note">${sanitize(event.note)}</div>` : "";
  const doneButton = event.done ? "" : `<button class="mini-action done" type="button" data-action="done" data-id="${sanitize(event.id)}" aria-label="Zakończ">OK</button>`;
  return `
    <div class="event">
      <div class="event-dot"></div>
      <div>
        <div class="event-title">${sanitize(event.title)}</div>
        <div class="event-meta">
          <span class="badge">${categoryIcon(event.category)}${sanitize(event.category)}</span>
          <span>${formatDate(event)}</span>
          <span>${relativeDateLabel(event.date)}</span>
          <span>${svgIcon("reminder", "cat-icon")}${sanitize(event.reminderText)}</span>
        </div>
        ${note}
      </div>
      <div class="event-actions">
        ${doneButton}
        <button class="mini-action delete" type="button" data-action="delete" data-id="${sanitize(event.id)}" aria-label="Usuń">x</button>
      </div>
    </div>
  `;
}

function renderList(id, list, emptyText) {
  $(id).innerHTML = list.length ? list.map(renderEvent).join("") : `<div class="empty">${emptyText}</div>`;
}

function renderDashboard() {
  const active = sortedEvents(false);
  const done = sortedEvents(true);
  const todayAndOverdue = active.filter(event => daysBetween(event.date) <= 0);
  const upcoming = active.filter(event => daysBetween(event.date) > 0).slice(0, 8);
  const week = active.filter(event => daysBetween(event.date) >= 0 && daysBetween(event.date) <= 7);
  const overdue = active.filter(event => daysBetween(event.date) < 0);

  $("statToday").textContent = active.filter(event => daysBetween(event.date) === 0).length;
  $("statWeek").textContent = week.length;
  $("statOverdue").textContent = overdue.length;
  renderList("todayList", todayAndOverdue, state.lang === "pl" ? "Na dzisiaj nie ma żadnych spraw." : "No tasks for today.");
  renderList("upcomingList", upcoming, state.lang === "pl" ? "Brak nadchodzących spraw." : "No upcoming tasks.");
  renderList("allList", active, state.lang === "pl" ? "Nie masz jeszcze aktywnych wydarzeń." : "You have no active events yet.");
  renderList("doneList", done, state.lang === "pl" ? "Historia jest pusta." : "History is empty.");
}

function sortedEvents(done) {
  const direction = done ? -1 : 1;
  return state.events
    .filter(event => Boolean(event.done) === done)
    .sort((a, b) => direction * `${a.date}${a.time || ""}`.localeCompare(`${b.date}${b.time || ""}`));
}

function renderCalendar() {
  const grid = $("calendarGrid");
  const weekdays = state.lang === "pl"
    ? ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"]
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const year = state.calendarDate.getFullYear();
  const month = state.calendarDate.getMonth();
  const start = (new Date(year, month, 1).getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();

  $("calendarTitle").textContent = state.calendarDate.toLocaleDateString(locale(), {
    month: "long",
    year: "numeric"
  });
  grid.innerHTML = weekdays.map(day => `<div class="weekday">${day}</div>`).join("");

  for (let i = 0; i < start; i += 1) {
    grid.insertAdjacentHTML("beforeend", '<div class="cal-day empty"></div>');
  }

  for (let day = 1; day <= days; day += 1) {
    grid.appendChild(createCalendarDay(year, month, day));
  }
}

function createCalendarDay(year, month, day) {
  const dateISO = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const dayEvents = state.events.filter(event => !event.done && event.date === dateISO);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cal-day";
  button.dataset.date = dateISO;
  button.setAttribute("aria-label", dateISO);
  button.classList.toggle("today", dateISO === todayISO);
  button.classList.toggle("selected", dateISO === state.selectedDateISO);

  const dots = dayEvents.slice(0, 4).map(() => '<span class="cal-dot"></span>').join("");
  const more = dayEvents.length > 4 ? `<div class="cal-more">+${dayEvents.length - 4}</div>` : "";
  button.innerHTML = `<div class="cal-num">${day}</div><div class="cal-dots">${dots}</div>${more}`;
  return button;
}

function renderSelectedDay() {
  const selected = new Date(`${state.selectedDateISO}T00:00`);
  const list = state.events
    .filter(event => !event.done && event.date === state.selectedDateISO)
    .sort((a, b) => (a.time || "99:99").localeCompare(b.time || "99:99"));
  $("selectedDayTitle").textContent = selected.toLocaleDateString(locale(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  renderList("selectedDayList", list, state.lang === "pl" ? "Brak wydarzeń w tym dniu." : "No events on this day.");
}

function render() {
  renderDashboard();
  renderCalendar();
  renderSelectedDay();
}

function setView(view) {
  document.querySelectorAll(".view").forEach(section => section.classList.add("hidden"));
  $(view).classList.remove("hidden");
  document.querySelectorAll("[data-view]").forEach(button => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function addEvent(eventData) {
  state.events.push({
    id: `ev_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    done: false,
    createdAt: new Date().toISOString(),
    ...eventData
  });
  saveEvents();
  render();
}

function markDone(id) {
  state.events = state.events.map(event => (
    event.id === id ? { ...event, done: true, doneAt: new Date().toISOString() } : event
  ));
  saveEvents();
  render();
  showToast(state.lang === "pl" ? "Oznaczono jako zrobione" : "Marked as done");
}

function deleteEvent(id) {
  if (!confirm(state.lang === "pl" ? "Usunąć tę sprawę?" : "Delete this item?")) return;
  state.events = state.events.filter(event => event.id !== id);
  saveEvents();
  render();
  showToast(state.lang === "pl" ? "Usunięto" : "Deleted");
}

function handleEventAction(event) {
  const button = event.target.closest("[data-action][data-id]");
  if (!button) return;
  if (button.dataset.action === "done") markDone(button.dataset.id);
  if (button.dataset.action === "delete") deleteEvent(button.dataset.id);
}

function handleCalendarClick(event) {
  const button = event.target.closest(".cal-day[data-date]");
  if (!button) return;
  state.selectedDateISO = button.dataset.date;
  renderCalendar();
  renderSelectedDay();
}

async function registerPWA() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.log("Service Worker error:", error);
  }
}

async function testNotification() {
  if (!("Notification" in window)) {
    showToast(state.lang === "pl" ? "Ta przeglądarka nie obsługuje powiadomień" : "Notifications are not supported");
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    showToast(state.lang === "pl" ? "Powiadomienia nie zostały włączone" : "Notifications were not enabled");
    return;
  }
  const registration = await navigator.serviceWorker.ready;
  registration.showNotification("MyLife Planner", {
    body: state.lang === "pl" ? "Powiadomienia działają. Tak będzie wyglądać przypomnienie." : "Notifications work. This is how a reminder will look.",
    icon: "icon-192.svg",
    badge: "icon-192.svg",
    tag: "mylife-planner-test"
  });
  showToast(state.lang === "pl" ? "Wysłano testowe powiadomienie" : "Test notification sent");
}

function checkDueReminders() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const sent = JSON.parse(localStorage.getItem(CONFIG.sentNotificationsKey) || "{}");
  state.events.filter(event => !event.done).forEach(event => {
    const remindDate = new Date(`${event.date}T00:00`);
    remindDate.setDate(remindDate.getDate() - Number(event.reminder || 0));
    const remindISO = toISO(remindDate);
    const notifyId = `${event.id}_${remindISO}`;
    if (remindISO !== todayISO || sent[notifyId]) return;
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(`Przypomnienie: ${event.title}`, {
        body: `${event.category} - ${formatDate(event)} - ${event.reminderText || ""}`,
        icon: "icon-192.svg",
        badge: "icon-192.svg",
        tag: notifyId
      });
    });
    sent[notifyId] = new Date().toISOString();
  });
  localStorage.setItem(CONFIG.sentNotificationsKey, JSON.stringify(sent));
}

function bindEvents() {
  document.addEventListener("click", handleEventAction);
  $("calendarGrid").addEventListener("click", handleCalendarClick);

  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll("[data-template]").forEach(button => {
    button.addEventListener("click", () => {
      $("title").value = button.dataset.template;
      $("category").value = button.dataset.cat;
      setView("add");
      $("title").focus();
    });
  });

  $("eventForm").addEventListener("submit", event => {
    event.preventDefault();
    const reminder = $("reminder");
    addEvent({
      title: $("title").value.trim(),
      date: $("date").value,
      time: $("time").value,
      category: $("category").value,
      reminder: reminder.value,
      reminderText: reminder.selectedOptions[0]?.textContent || "",
      note: $("note").value.trim()
    });
    event.target.reset();
    $("date").value = todayISO;
    showToast(state.lang === "pl" ? "Zapisano wydarzenie" : "Event saved");
    setView("dashboard");
  });

  $("clearDone").addEventListener("click", () => {
    if (!confirm(state.lang === "pl" ? "Wyczyścić całą historię zakończonych spraw?" : "Clear completed history?")) return;
    state.events = state.events.filter(event => !event.done);
    saveEvents();
    render();
    showToast(state.lang === "pl" ? "Historia wyczyszczona" : "History cleared");
  });

  $("demoBtn").addEventListener("click", addDemoEvents);
  $("notifyBtn").addEventListener("click", testNotification);
  $("prevMonth").addEventListener("click", () => changeMonth(-1));
  $("nextMonth").addEventListener("click", () => changeMonth(1));

  document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      savePreference(CONFIG.langKey, state.lang);
      applyLanguage();
      render();
      showToast(state.lang === "pl" ? "Zmieniono język" : "Language changed");
    });
  });

  document.querySelectorAll(".theme-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.theme = button.dataset.theme;
      savePreference(CONFIG.themeKey, state.theme);
      applyTheme();
      showToast(state.lang === "pl" ? "Zmieniono motyw" : "Theme changed");
    });
  });

  document.querySelectorAll(".appearance-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.appearance = button.dataset.appearance;
      savePreference(CONFIG.appearanceKey, state.appearance);
      applyAppearance();
      showToast(state.lang === "pl" ? "Zmieniono wygląd" : "Appearance changed");
    });
  });

  document.querySelectorAll(".radius-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.radius = button.dataset.radius;
      savePreference(CONFIG.radiusKey, state.radius);
      applyRadius();
      showToast(state.lang === "pl" ? "Zmieniono styl okien" : "Window style changed");
    });
  });

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (state.appearance === "system") applyAppearance();
    });
  }
}

function addDemoEvents() {
  const addDays = days => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return toISO(date);
  };
  [
    ["800+", addDays(2), "", "Finanse", "Sprawdzić wpływ lub status świadczenia."],
    ["Rata kredytu", addDays(5), "09:00", "Finanse", "Upewnić się, że środki są na koncie."],
    ["Wizyta u lekarza", addDays(8), "14:30", "Zdrowie", "Zabrać dokumenty i wyniki badań."]
  ].forEach(item => addEvent({
    title: item[0],
    date: item[1],
    time: item[2],
    category: item[3],
    reminder: "1",
    reminderText: "1 dzień wcześniej",
    note: item[4]
  }));
  showToast(state.lang === "pl" ? "Dodano przykłady" : "Examples added");
  setView("dashboard");
}

function changeMonth(step) {
  state.calendarDate.setMonth(state.calendarDate.getMonth() + step);
  renderCalendar();
}

function mountIcons() {
  const targets = {
    iconTodayHead: "today",
    iconBellHead: "bell",
    iconPlusHead: "plus",
    iconBoltHead: "bolt",
    iconCalendarHead: "calendar",
    iconHistoryHead: "history",
    iconSettingsHead: "settings",
    iconCalendarDayHead: "calendar"
  };
  Object.entries(targets).forEach(([id, iconName]) => {
    $(id).innerHTML = svgIcon(iconName);
  });
}

function init() {
  $("date").value = todayISO;
  mountIcons();
  bindEvents();
  applyAppearance();
  applyTheme();
  applyRadius();
  applyLanguage();
  render();
  registerPWA();
  setTimeout(checkDueReminders, 1800);
}

init();
