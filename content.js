function createSidebar() {
    // Wrapper that doesn't block clicks outside sidebar
    const wrapper = document.createElement("div");
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.right = "0";
    wrapper.style.width = "250px";
    wrapper.style.height = "100%";
    wrapper.style.zIndex = "2147483647"; // MAX z-index to stay on top
    wrapper.style.pointerEvents = "none"; // Let clicks pass through except on sidebar

    // The actual clickable sidebar content
    const sidebar = document.createElement("div");
    sidebar.id = "quickie-sidebar";
    sidebar.style.height = "100%";
    sidebar.style.background = "#f5f5f5"; // Solid background for visibility
    sidebar.style.color = "#000"; // Text color
    sidebar.style.borderLeft = "1px solid #ddd";
    sidebar.style.overflowY = "auto";
    sidebar.style.padding = "10px";
    sidebar.style.fontFamily = "sans-serif";
    sidebar.style.pointerEvents = "auto"; // Allow interaction inside sidebar
    sidebar.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

    sidebar.innerHTML = "<h3 style='font-weight:bold; margin-top:0;'>Quickie</h3><ul id='quickie-list' style='list-style:none; padding:0;'></ul>";

    wrapper.appendChild(sidebar);
    document.body.appendChild(wrapper);
}


function updateSidebar() {
    const list = document.getElementById("quickie-list");
    if (!list) return;

    // New ChatGPT structure — grab user messages only
    const prompts = document.querySelectorAll("div[data-message-author-role='user']");

    list.innerHTML = "";
    prompts.forEach((prompt, index) => {
        const text = prompt.innerText.trim().split("\n")[0];
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${text}`;
        li.style.cursor = "pointer";
        li.onclick = () => {
            prompt.scrollIntoView({ behavior: "smooth", block: "center" });
        };
        list.appendChild(li);
    });
}

// Create sidebar
createSidebar();

// Watch for new messages
const observer = new MutationObserver(updateSidebar);
observer.observe(document.body, { childList: true, subtree: true });

// Initial load
setTimeout(updateSidebar, 2000);
