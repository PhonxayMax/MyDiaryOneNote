// Developer Workflow Hub - JavaScript

// Default configuration for the application
const defaultConfig = {
  quick: [
    {
      id: "lucidchart",
      title: "Lucidchart - Project Planning",
      url: "https://lucid.app/lucidchart/f0cf13ab-f388-407e-ad1b-cc2d107e6e45/edit?invitationId=inv_e731072d-eb1b-4a05-8b5e-245e5f66be0d&page=0_0#",
      tags: "planning, diagram, flowchart, architecture, project design",
      category: "planning",
      status: "active"
    },
    {
      id: "cursor",
      title: "Cursor AI - Code Editor",
      url: "cursor://",
      tags: "editor, code, ai, development",
      category: "development",
      status: "active"
    },
    {
      id: "codepen",
      title: "CodePen - HTML/CSS/JS Prototype",
      url: "https://codepen.io/PhonxayMax/pen/WbQdeoq",
      tags: "prototype, html, css, javascript, frontend, project",
      category: "prototyping",
      status: "active"
    },
    {
      id: "onecompiler",
      title: "OneCompiler - Sub-components",
      url: "https://onecompiler.com/html/43tpbx2y9",
      tags: "compiler, html, online, testing, programming, sub-components",
      category: "prototyping",
      status: "active"
    },
    {
      id: "chatgpt",
      title: "ChatGPT - Current Session",
      url: "https://chatgpt.com/c/689d9e29-0810-8333-a27a-7782ef07aecb",
      tags: "ai, assistant, openai, programming help, image input",
      category: "ai",
      status: "active"
    },
    {
      id: "onedrive",
      title: "OneDrive - Project Cloud Storage",
      url: "https://onedrive.live.com/?id=%2Fpersonal%2F66789b30b92d6734%2FDocuments%2FDesktop%2Fstackblitz%2Fextract-zip%2FDate-14-08-2025%2F2025-08-14-task-01-javascript%2F2025-08-14-task-01-javascript--html-prototype&viewid=bdfeb64d-690d-410a-bd92-57022ac71de8",
      tags: "cloud, storage, backup, project files",
      category: "storage",
      status: "active"
    },
    {
      id: "phoenixcode",
      title: "Phoenix Code - Component Assembly",
      url: "#phoenix-workspace",
      tags: "assembly, components, integration, phoenix",
      category: "assembly",
      status: "active",
      stage: "assembling"
    },
    {
      id: "git",
      title: "Git & GitKraken - Version Control",
      url: "https://www.gitkraken.com/",
      tags: "git, version control, gitkraken",
      category: "version-control",
      status: "active"
    },
    {
      id: "github",
      title: "GitHub - Repository",
      url: "#",
      tags: "git, repository, cloud, version control",
      category: "version-control",
      status: "pending"
    },
    {
      id: "claude",
      title: "Claude Desktop - Workflow Evaluation",
      url: "https://claude.ai",
      tags: "ai, assistant, anthropic, workflow evaluation",
      category: "ai",
      status: "active"
    },
    {
      id: "warp",
      title: "Warp AI Terminal - Workflow Improvement",
      url: "https://www.warp.dev/",
      tags: "terminal, ai, workflow improvement",
      category: "evaluation",
      status: "active"
    },
    {
      id: "netlify",
      title: "Netlify - Project Deployment",
      url: "https://app.netlify.com/",
      tags: "deployment, hosting, netlify",
      category: "deployment",
      status: "pending"
    }
  ],
  localPath: "E:\\_0_P1_MyDiaryOneNote\\Date-12-08-2025\\2025-08-12-task-01\\2--cursor-ai--open-the-comprehensive-project-files\\Notepad\\mydiary\\Date-2025-08-14",
  ai: {
    claudeChat: "https://claude.ai"
  },
  embeds: {
    codepenEmbed: "https://codepen.io/PhonxayMax/pen/WbQdeoq",
    lucidOpen: "https://lucid.app/lucidchart/f0cf13ab-f388-407e-ad1b-cc2d107e6e45/edit?invitationId=inv_e731072d-eb1b-4a05-8b5e-245e5f66be0d&page=0_0#",
    evaluation: "https://www.warp.dev/",
    onenoteUrl: "https://onedrive.live.com/?id=%2Fpersonal%2F66789b30b92d6734%2FDocuments%2FDesktop%2Fstackblitz%2Fextract-zip%2FDate-14-08-2025%2F2025-08-14-task-01-javascript%2F2025-08-14-task-01-javascript--html-prototype&viewid=bdfeb64d-690d-410a-bd92-57022ac71de8",
    githubRepo: "#",
    chatgptSession: "https://chatgpt.com/c/689d9e29-0810-8333-a27a-7782ef07aecb",
    netlify: "https://app.netlify.com/"
  },
  workflowStatus: {
    planning: false,
    opening: false,
    prototyping: false,
    assembling: false,
    testing: false,
    versionControl: false,
    deploying: false,
    maintaining: false
  }
};

// Utility function for DOM selection
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Application state
const state = {
  config: (() => {
    try {
      return JSON.parse(localStorage.getItem("devhub-config") || "null") || defaultConfig;
    } catch (error) {
      console.warn("Failed to load saved configuration, using defaults:", error);
      return defaultConfig;
    }
  })()
};

// Save configuration to localStorage
function save() {
  try {
    localStorage.setItem("devhub-config", JSON.stringify(state.config));
  } catch (error) {
    console.error("Failed to save configuration:", error);
    // Fallback for environments where localStorage might not be available
    showNotification("Unable to save settings locally");
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
    card.dataset.category = item.category || 'other';
    
    const statusIndicator = item.status ? `<span class="pill status-${item.status}">${item.status}</span>` : '';
    
    card.innerHTML = `
      <div class="row">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="pill-group">
          <span class="pill">${item.id}</span>
          ${statusIndicator}
        </div>
      </div>
      <div class="kvs">
        <a href="${escapeHtml(item.url)}" class="btn" target="_blank" rel="noopener" onclick="trackToolUsage('${item.id}')">Open</a>
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
      updateWorkflowProgress();
      showNotification("Settings reset to defaults");
    }
  });

  // Export configuration
  $("#export")?.addEventListener("click", () => {
    const dataStr = JSON.stringify(state.config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'devhub-config.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification("Configuration exported");
  });

  // Import configuration
  $("#import")?.addEventListener("click", () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const imported = JSON.parse(e.target.result);
            state.config = { ...defaultConfig, ...imported };
            save();
            applyEmbeds();
            renderCards();
            updateWorkflowProgress();
            showNotification("Configuration imported");
          } catch (error) {
            showNotification("Invalid configuration file", "error");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  });

  // Filter functionality
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });
  
  // Handle dialog close
  $("#editor")?.addEventListener("close", () => {
    // Cleanup if needed
  });
  
  // Initialize search
  initializeSearch();
  
  // Initial setup
  applyEmbeds();
  renderCards();
  updateWorkflowProgress();
  updateLastUpdated();
  
  console.log("Developer Workflow Hub initialized");
}

// Filter cards by category
function filterCards(category) {
  const cards = $$('#cards .card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Update workflow progress
function updateWorkflowProgress() {
  const status = state.config.workflowStatus || {};
  const total = Object.keys(status).length;
  const completed = Object.values(status).filter(Boolean).length;
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  const progressFill = $('#progressFill');
  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }
  
  // Update step indicators
  $$('.step').forEach(step => {
    const stepName = step.dataset.step;
    if (status[stepName]) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  // Update status indicator
  const statusIndicator = $('#workflowStatus');
  if (statusIndicator) {
    if (percentage === 100) {
      statusIndicator.textContent = 'Complete';
      statusIndicator.style.color = 'var(--ok)';
    } else if (percentage > 0) {
      statusIndicator.textContent = 'In Progress';
      statusIndicator.style.color = 'var(--warn)';
    } else {
      statusIndicator.textContent = 'Ready';
      statusIndicator.style.color = 'var(--muted)';
    }
  }
}

// Update last updated timestamp
function updateLastUpdated() {
  const lastUpdated = $('#lastUpdated');
  if (lastUpdated) {
    lastUpdated.textContent = `Updated: ${new Date().toLocaleDateString()}`;
  }
}

// Track tool usage
function trackToolUsage(toolId) {
  try {
    const usage = JSON.parse(localStorage.getItem('devhub-usage') || '{}');
    usage[toolId] = (usage[toolId] || 0) + 1;
    usage.lastUsed = Date.now();
    localStorage.setItem('devhub-usage', JSON.stringify(usage));
    
    updateUsageStats();
  } catch (error) {
    console.warn("Failed to track tool usage:", error);
  }
}

// Update usage statistics
function updateUsageStats() {
  try {
    const usage = JSON.parse(localStorage.getItem('devhub-usage') || '{}');
    const usageStats = $('#usageStats');
    if (usageStats && Object.keys(usage).length > 1) {
      const totalClicks = Object.values(usage).reduce((sum, count) => {
        return typeof count === 'number' ? sum + count : sum;
      }, 0);
      usageStats.innerHTML = `Total tool launches: ${totalClicks}`;
    }
  } catch (error) {
    console.warn("Failed to update usage stats:", error);
  }
}

// Start the application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
