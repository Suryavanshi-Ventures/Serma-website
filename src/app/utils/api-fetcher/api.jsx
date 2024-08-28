export async function fetchData(url) {
  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { result: data.result, error: null };
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return { result: null, error: error.message };
  }
}
