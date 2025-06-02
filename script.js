document.getElementById("shortenBtn").addEventListener("click", async () => {
  const link = document.getElementById("linkInput").value.trim();
  if (!link) return alert("Por favor, cole um link válido.");

  const response = await fetch("/api/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: link })
  });

  const data = await response.json();
  if (data.shortUrl) {
    const resultDiv = document.getElementById("result");
    const shortLink = document.getElementById("shortLink");
    shortLink.href = data.shortUrl;
    shortLink.textContent = data.shortUrl;
    resultDiv.classList.remove("hidden");
  } else {
    alert("Erro ao encurtar o link.");
  }
});
