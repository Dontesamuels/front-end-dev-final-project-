
export async function searchRepositories(query = "react project") {
  const encodedQuery = encodeURIComponent(query);

  const url = `https://api.github.com/search/repositories?q=${encodedQuery}&sort=stars&order=desc&per_page=8`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }

    const data = await response.json();

    // Return just the items array
    return data.items || [];
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    throw error;
  }
}