const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await fetch(`${UPSTASH_URL}/get/${slug}`, {
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    });

    const url = await response.text();

    if (!url || url === "null") {
      return { notFound: true };
    }

    return { props: { url } };
  } catch (e) {
    return { notFound: true };
  }
}

import { useEffect } from "react";

export default function RedirectPage({ url }) {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  }, [url]);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <img src="/logo.png" alt="Logo" style={{ width: 120, marginBottom: 20 }} />
      <h2>Você está sendo redirecionado...</h2>
      <p>Em instantes você será levado ao conteúdo.</p>
    </div>
  );
}
