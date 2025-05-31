import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShort(null);

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (res.ok) {
        const host = window.location.origin;
        setShort(`${host}/${data.slug}`);
      } else {
        setError(data.error || "Erro ao encurtar.");
      }
    } catch (err) {
      setError("Erro ao conectar.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "80px auto", textAlign: "center", padding: 20 }}>
      <img src="https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/LOGO-%20VERTICAL.jpg" alt="Logo" style={{ width: 120, marginBottom: 30 }} />

      <h1>Encurtador de Links Phoenix</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Cole o link aqui..."
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
            marginBottom: 10,
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            backgroundColor: "#4b63f2",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          {loading ? "Gerando..." : "Encurtar"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: 20 }}>{error}</p>}

      {short && (
        <div style={{ marginTop: 30 }}>
          <p>Seu link curto:</p>
          <a href={short} target="_blank" rel="noopener noreferrer">
            {short}
          </a>
        </div>
      )}
    </div>
  );
}

