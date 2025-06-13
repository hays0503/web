const defaultFetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text(); // может быть HTML или JSON
      throw new Error(`Fetch error in ${url}: ${response.status} ${response.statusText} — ${errorText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("defaultFetcher error:", error);
    throw error; // пробрасываем дальше, чтобы отловить выше
  }
};

export default defaultFetcher;
