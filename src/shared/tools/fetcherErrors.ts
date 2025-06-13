export class FetcherError extends Error {
	originalError: unknown;
	status?: number;
	statusText?: string;
	url: string;

	constructor(
		message: string,
		url: string,
		originalError: unknown,
		status?: number,
		statusText?: string
	) {
		super(message);
		this.name = "FetcherError";
		this.url = url;
		this.originalError = originalError;
		this.status = status;
		this.statusText = statusText;
	}
}
