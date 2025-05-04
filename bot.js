
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (!message.trim()) return;
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = '';

    // Update the fetch URL to use GitHub Pages
    const response = await fetch('https://tamary-jade.github.io/CodeSmart-Bot/icd_data.csv');
    const text = await response.text();
    const lines = text.split('\n');
    let found = false;

    for (const line of lines) {
        const [code, description, rule, pmb] = line.split(',');
        if (message.toLowerCase().includes(description.toLowerCase())) {
            chatBox.innerHTML += `<div><strong>Bot:</strong><br>ICD Code: ${code}<br>Description: ${description}<br>Coding Rule: ${rule}<br>PMB Status: ${pmb}</div>`;
            found = true;
            break;
        }
    }
    if (!found) {
        chatBox.innerHTML += "<div><strong>Bot:</strong> I'm not sure how to code that. Please try a different term.</div>";
    }
}
