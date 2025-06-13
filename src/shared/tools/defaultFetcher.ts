import { FetcherError } from "./fetcherErrors";

const defaultFetcher = async <T>(
	url: string,
	options?: RequestInit
): Promise<T> => {
	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			const errorText = await response.text(); // может быть HTML или JSON
			throw new FetcherError(
				`Fetch error in ${url}: ${response.status} ${response.statusText} — ${errorText}`,
				url,
				null,
				response.status,
				response.statusText
			);
		}

		const data = await response.json();
		return data as T;
	} catch (error) {
		console.error("defaultFetcher error:", error);
		if (error instanceof FetcherError) {
			throw error; // Пробрасываем FetcherError дальше
		} else {
			throw new FetcherError(
				`Unexpected error during fetch from ${url}`,
				url,
				error
			); // Оборачиваем другие ошибки в FetcherError
		}
	}
};

export default defaultFetcher;
