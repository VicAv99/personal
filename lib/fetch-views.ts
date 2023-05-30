export function getUrl(path = "/view") {
  return process.env.NODE_ENV === "production"
    ? `https://victor-avila.com/api${path}`
    : `http://localhost:3000/api${path}`;
}

export function postView(slug?: string) {
  return fetch(getUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
    }),
  });
}
