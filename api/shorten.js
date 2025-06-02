import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL ausente." });

  const code = Math.random().toString(36).substring(2, 8);

  // Autenticação com API do Google
  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SHEET_ID;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Página1!A:B",
    valueInputOption: "RAW",
    requestBody: {
      values: [[code, url]]
    }
  });

  const shortUrl = `${req.headers.origin}/r/${code}`;
  res.status(200).json({ shortUrl });
}
