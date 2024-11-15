// Array of tips for sleep quality
const tips = [
    {
        title: "Increase bright light exposure during the day",
        content: "Spending time in natural sunlight or bright light can help keep your circadian rhythm healthy."
    },
    {
        title: "Reduce blue light exposure in the evening",
        content: "Blue light from electronic devices can reduce melatonin, so turn off devices 2 hours before bed."
    },
    {
        title: "Don’t consume caffeine late in the day",
        content: "Avoid caffeine 8 hours before bed to prevent sleep disruption."
    },
    {
        title: "Reduce irregular or long daytime naps",
        content: "Avoid long naps during the day as it can affect nighttime sleep."
    },
    {
        title: "Sleep and wake at consistent times",
        content: "Align with sunrise and sunset for a healthy circadian rhythm."
    },
    {
        title: "Take a melatonin supplement",
        content: "Melatonin helps regulate sleep; consult a healthcare provider before use."
    },
    {
        title: "Consider other supplements",
        content: "Magnesium, zinc, and omega-3s may also support sleep quality."
    },
    {
        title: "Don’t drink alcohol before bed",
        content: "Alcohol can disrupt melatonin production and sleep cycles."
    },
    {
        title: "Get a comfortable bed and pillow",
        content: "Quality bedding supports better sleep and minimizes discomfort."
    },
    {
        title: "Optimize your bedroom environment",
        content: "Keep the room quiet, dark, and cool for optimal sleep."
    },
    {
        title: "Don’t eat late in the evening",
        content: "Late meals can affect sleep; avoid eating 2 hours before bed."
    },
    {
        title: "Don’t drink any liquids before bed",
        content: "Limit fluids before bed to avoid waking up at night."
    },
    {
        title: "Relax in the evening",
        content: "Practice meditation, breathing exercises, or read to relax."
    },
    {
        title: "Rule out a sleep disorder",
        content: "Consult a healthcare professional if you experience chronic sleep issues."
    },
    {
        title: "Exercise regularly — but not before bed",
        content: "Regular exercise can support sleep, but avoid exercising too late."
    }
];

// Function to generate tips in HTML
function loadTips() {
    const tipsContainer = document.getElementById("tips-container");

    tips.forEach((tip, index) => {
        const tipDiv = document.createElement("div");
        tipDiv.className = "tip";

        const title = document.createElement("h2");
        title.innerText = `${index + 1}. ${tip.title}`;

        const content = document.createElement("p");
        content.innerText = tip.content;

        const audioButton = document.createElement("button");
        audioButton.innerText = "Listen";
        audioButton.onclick = () => readTip(tip.title + " - " + tip.content);

        tipDiv.appendChild(title);
        tipDiv.appendChild(content);
        tipDiv.appendChild(audioButton);

        tipsContainer.appendChild(tipDiv);
    });
}

// Text-to-Speech function
function readTip(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

// Load tips on page load
document.addEventListener("DOMContentLoaded", loadTips);
