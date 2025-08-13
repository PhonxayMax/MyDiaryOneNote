// Developer Workflow Hub - JavaScript

// Default configuration for the application
const defaultConfig = {
  quick: [
    {
      id: "lucidchart",
      title: "Lucidchart - Project Diagram",
      url: "https://lucid.app/lucidchart/5df57bc2-d781-480d-b606-b1da86f011ca/edit?invitationId=inv_e5d1e7f5-b8e8-4948-9d90-1119a4102250&page=0_0#",
      tags: "diagram, planning, flowchart, architecture, project design"
    },
    {
      id: "cursor",
      title: "Cursor Editor",
      url: "cursor://",
      tags: "editor, code, ai, development"
    },
    {
      id: "vscode",
      title: "VS Code",
      url: "vscode://",
      tags: "editor, code, microsoft, development"
    },
    {
      id: "codepen",
      title: "CodePen - PhonxayMax Project",
      url: "https://codepen.io/PhonxayMax/pen/WbQXMVx",
      tags: "prototype, html, css, javascript, frontend, project"
    },
    {
      id: "onecompiler",
      title: "OneCompiler - Python",
      url: "https://onecompiler.com/python",
      tags: "compiler, python, online, testing, programming"
    },
    {
      id: "github",
      title: "GitHub - MyDiaryOneNote",
      url: "https://github.com/PhonxayMax/MyDiaryOneNote",
      tags: "git, repository, version control, mydiary, phonxaymax"
    },
    {
      id: "gitkraken",
      title: "GitKraken Client",
      url: "https://www.gitkraken.com/",
      tags: "git, gui, version control, visualization"
    },
    {
      id: "claude",
      title: "Claude AI Assistant",
      url: "https://claude.ai",
      tags: "ai, assistant, anthropic, programming help"
    },
    {
      id: "onenote",
      title: "OneNote - Task 03 Python",
      url: "https://onedrive.live.com/edit.aspx?resid=66789B30B92D6734!sf991fa08b3df4dd2ad04eec07d354aff&migratedtospo=true&wd=target%28Date-13-08-2025.one%7Cd2957784-33cb-4e65-b8d3-2450ffff173a%2F2025-08-13-task-03-%7Cb5dca1d0-19e1-4d42-be2b-392a143b4240%2F%29&wdorigin=NavigationUrl",
      tags: "notes, documentation, onenote, project notes"
    },
    {
      id: "chatgpt",
      title: "ChatGPT - Current Session",
      url: "https://chatgpt.com/c/689cb8bf-cf24-8322-8b64-9414a55f1390",
      tags: "ai, assistant, openai, programming help, current chat"
    }
  ],
  localPath: "E:\\_0_P1_MyDiaryOneNote\\Date-12-08-2025\\2025-08-12-task-01\\2--cursor-ai--open-the-comprehensive-project-files\\Notepad\\mydiary\\Date-2025-08-13",
  ai: {
    claudeChat: "https://claude.ai"
  },
  embeds: {
    codepenEmbed: "https://codepen.io/PhonxayMax/pen/WbQXMVx",
    lucidOpen: "https://lucid.app/lucidchart/5df57bc2-d781-480d-b606-b1da86f011ca/edit?invitationId=inv_e5d1e7f5-b8e8-4948-9d90-1119a4102250&page=0_0#",
    evaluation: "https://onecompiler.com/python",
    onenoteUrl: "https://onedrive.live.com/edit.aspx?resid=66789B30B92D6734!sf991fa08b3df4dd2ad04eec07d354aff&migratedtospo=true&wd=target%28Date-13-08-2025.one%7Cd2957784-33cb-4e65-b8d3-2450ffff173a%2F2025-08-13-task-03-%7Cb5dca1d0-19e1-4d42-be2b-392a143b4240%2F%29&wdorigin=NavigationUrl",
    githubRepo: "https://github.com/PhonxayMax/MyDiaryOneNote",
    chatgptSession: "https://chatgpt.com/c/689cb8bf-cf24-8322-8b64-9414a55f1390"
  }
};

// Utility function for DOM selection
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Application state
const state = {
  config: JSON.parse(localStorage.getItem("devhub-config") || "null") || defaultConfig
};

// Save configuration to localStorage
function save() {
  try {
    localStorage.setItem("devhub-config", JSON.stringify(state.config));
  } catch (error) {
    console.error("Failed to save configuration:", error);
  }
}

// Render quick launch cards
function renderCards() {
  const container = $("#cards");
  if (!container) return;

  const searchTerm = ($("#q")?.value || "").toLowerCase();
  
  container.innerHTML = "";
  
  state.config.quick.forEach(item => {
    if (!item.title || !item.url) return; // Skip empty items
    
    // Filter based on search term
    const searchableText = `${item.title} ${item.tags || ""}`.toLowerCase();
    if (searchTerm && !searchableText.includes(searchTerm)) return;
    
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="row">
        <h3>${escapeHtml(item.title)}</h3>
        <span class="pill">${item.id}</span>
      </div>
      <div class="kvs">
        <a href="${escapeHtml(item.url)}" class="btn" target="_blank" rel="noopener">Open</a>
        ${item.tags ? `<span class="kv">${escapeHtml(item.tags)}</span>` : ""}
      </div>
    `;
    container.appendChild(card);
  });
  
  // Show message if no cards match search
  if (container.children.length === 0 && searchTerm) {
    container.innerHTML = '<div class="muted">No cards match your search.</div>';
  }
}

// Apply embed configurations
function applyEmbeds() {
  // CodePen embed
  const codepenFrame = $("#codepenFrame");
  const codepenLink = $("#codepenLink");
  if (codepenFrame && state.config.embeds.codepenEmbed) {
    const embedUrl = convertToEmbedUrl(state.config.embeds.codepenEmbed);
    codepenFrame.src = embedUrl;
    if (codepenLink) {
      codepenLink.href = state.config.embeds.codepenEmbed;
    }
  }
  
  // Lucidchart link
  const lucidOpen = $("#lucidOpen");
  if (lucidOpen && state.config.embeds.lucidOpen) {
    lucidOpen.href = state.config.embeds.lucidOpen;
  }
  
  // GitHub repository link
  const githubRepo = $("#githubRepo");
  if (githubRepo && state.config.embeds.githubRepo) {
    githubRepo.href = state.config.embeds.githubRepo;
  }
  
  // GitKraken link
  const gitkraken = $("#gitkraken");
  if (gitkraken) {
    gitkraken.href = "https://www.gitkraken.com/";
  }
  
  // Evaluation link
  const evaluationLink = $("#evaluationLink");
  if (evaluationLink && state.config.embeds.evaluation) {
    evaluationLink.href = state.config.embeds.evaluation;
  }
  
  // Claude chat link
  const claudeChat = $("#claudeChat");
  if (claudeChat && state.config.ai.claudeChat) {
    claudeChat.href = state.config.ai.claudeChat;
  }
  
  // OneNote link
  const onenoteLink = $("#onenoteLink");
  if (onenoteLink && state.config.embeds.onenoteUrl) {
    onenoteLink.href = state.config.embeds.onenoteUrl;
  }
  
  // Local path display
  const localPath = $("#localPath");
  if (localPath && state.config.localPath) {
    localPath.textContent = state.config.localPath;
    localPath.title = "Click to copy path";
    localPath.addEventListener("click", () => {
      copyToClipboard(state.config.localPath);
    });
  }
}

// Convert CodePen URL to embed URL
function convertToEmbedUrl(url) {
  if (url.includes("codepen.io/pen/")) {
    return url.replace("/pen/", "/embed/") + "?theme-id=dark&default-tab=result";
  }
  return url;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showNotification("Copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showNotification("Copied to clipboard!");
  }
}

// Show temporary notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--ok);
    color: var(--bg);
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
    style.remove();
  }, 3000);
}

// Open the edit links dialog
function openEditor() {
  const form = $("#formFields");
  if (!form) return;
  
  form.innerHTML = "";

  // Quick Links edit fields
  state.config.quick.forEach(q => {
    form.innerHTML += `
      <label class="muted">Title (${q.id})</label>
      <input id="title_${q.id}" value="${escapeHtml(q.title || "")}" placeholder="Enter title">
      <label class="muted">URL (${q.id})</label>
      <input id="url_${q.id}" value="${escapeHtml(q.url || "")}" placeholder="Enter URL">
      <label class="muted">Tags (${q.id})</label>
      <input id="tags_${q.id}" value="${escapeHtml(q.tags || "")}" placeholder="Enter tags">
    `;
  });

  // Embeds, AI, Local Path
  form.innerHTML += `
    <label class="muted">CodePen Embed URL</label>
    <input id="codepenEmbed" value="${escapeHtml(state.config.embeds.codepenEmbed || "")}" placeholder="https://codepen.io/pen/...">
    <label class="muted">Lucidchart Open URL</label>
    <input id="lucidOpenField" value="${escapeHtml(state.config.embeds.lucidOpen || "")}" placeholder="https://lucid.app/documents/...">
    <label class="muted">Evaluation Tool URL</label>
    <input id="evaluation" value="${escapeHtml(state.config.embeds.evaluation || "")}" placeholder="https://example.com/evaluation">
    <label class="muted">OneNote Page URL</label>
    <input id="onenoteUrlField" value="${escapeHtml(state.config.embeds.onenoteUrl || "")}" placeholder="https://onedrive.live.com/edit.aspx?...">
    <label class="muted">GitHub Repository URL</label>
    <input id="githubRepoField" value="${escapeHtml(state.config.embeds.githubRepo || "")}" placeholder="https://github.com/username/repo">
    <label class="muted">ChatGPT Session URL</label>
    <input id="chatgptSessionField" value="${escapeHtml(state.config.embeds.chatgptSession || "")}" placeholder="https://chatgpt.com/c/...">
    <label class="muted">Claude Chat URL</label>
    <input id="claudeChatField" value="${escapeHtml(state.config.ai.claudeChat || "")}" placeholder="https://claude.ai">
    <label class="muted">Local Note Path</label>
    <input id="localPathField" value="${escapeHtml(state.config.localPath || "")}" placeholder="C:\\path\\to\\notes">
  `;

  // Set up save functionality
  const saveButton = $("#save");
  if (saveButton) {
    saveButton.onclick = () => {
      // Update quick links
      state.config.quick = state.config.quick.map(q => ({
        id: q.id,
        title: ($(`#title_${q.id}`)?.value || "").trim(),
        url: ($(`#url_${q.id}`)?.value || "").trim(),
        tags: ($(`#tags_${q.id}`)?.value || "").trim()
      }));
      
      // Update embeds and other settings
      state.config.embeds.codepenEmbed = ($("#codepenEmbed")?.value || "").trim();
      state.config.embeds.lucidOpen = ($("#lucidOpenField")?.value || "").trim();
      state.config.embeds.evaluation = ($("#evaluation")?.value || "").trim();
      state.config.embeds.onenoteUrl = ($("#onenoteUrlField")?.value || "").trim();
      state.config.embeds.githubRepo = ($("#githubRepoField")?.value || "").trim();
      state.config.embeds.chatgptSession = ($("#chatgptSessionField")?.value || "").trim();
      state.config.ai.claudeChat = ($("#claudeChatField")?.value || "").trim();
      state.config.localPath = ($("#localPathField")?.value || "").trim();
      
      save();
      applyEmbeds();
      renderCards();
      
      $("#editor")?.close();
    };
  }

  $("#editor")?.showModal();
}

// Initialize search functionality
function initializeSearch() {
  const searchInput = $("#q");
  if (searchInput) {
    searchInput.addEventListener("input", renderCards);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        renderCards();
      }
    });
  }
}

// Initialize the application
function initialize() {
  // Set up event listeners
  $("#edit")?.addEventListener("click", openEditor);
  
  $("#reset")?.addEventListener("click", () => {
    if (confirm("Reset all customizations to defaults?")) {
      localStorage.removeItem("devhub-config");
      state.config = JSON.parse(JSON.stringify(defaultConfig)); // Deep clone
      applyEmbeds();
      renderCards();
      showNotification("Settings reset to defaults");
    }
  });
  
  // Handle dialog close
  $("#editor")?.addEventListener("close", () => {
    // Cleanup if needed
  });
  
  // Initialize search
  initializeSearch();
  
  // Initial render
  applyEmbeds();
  renderCards();
  
  console.log("Developer Workflow Hub initialized");
}

// Start the application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
