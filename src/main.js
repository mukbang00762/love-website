import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
<div class="container">

<h1 class="title">
Hi, Оюун Эрдэнэ ❤️
</h1>

<p class="subtitle">
I made something special just for you...
</p>

<button id="startBtn">
Open My Gift 🎁
</button>

</div>
`;

document.getElementById("startBtn").addEventListener("click", () => {
    alert("❤️ Welcome to our story...");
});
document.getElementById("startBtn").addEventListener("click", () => {
    alert("❤️ Welcome to our story...");
});