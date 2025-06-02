import { google } from "googleapis";

export default async function handler(req, res) {
  const code = req.query.code;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Página1!A:B"
  });

  const rows = response.data.values;
  const match = rows.find(row => row[0] === code);
  const targetUrl = match ? match[1] : null;

  if (!targetUrl) return res.status(404).send("Link não encontrado.");

  const html = `
    <html>
      <head>
        <meta http-equiv="refresh" content="3;url=${targetUrl}" />
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #000;
            color: #fff;
            font-family: sans-serif;
            flex-direction: column;
          }
          img {
            max-width: 200px;
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        </style>
      </head>
      <body>
        <img src="/logo.jpg" alt="Logo" />
        <p>Redirecionando...</p>
      </body>
    </html>
  `;
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
