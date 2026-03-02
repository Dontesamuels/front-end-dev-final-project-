// src/services/github.js

export async function searchRepos(query = "react beginner project") {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    query
  )}&sort=stars&order=desc&per_page=8`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GitHub API Error: ${res.status}`);
  }

  const data = await res.json();
  return data.items || [];
}