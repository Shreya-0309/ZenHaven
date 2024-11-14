function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    if (commentInput.value.trim()) {
        const newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.innerHTML = `
            <h3>New User:</h3>
            <p>${commentInput.value}</p>
            <button onclick="speakText('${commentInput.value}')">🔊 Listen</button>
        `;
        document.getElementById("forum").appendChild(newComment);
        commentInput.value = "";
    }
});
