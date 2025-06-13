"use client";

import { useCallback } from "react";
import { ErrorInfo } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface ErrorBoundaryLoggerProps {
	fallbackUI: React.ReactNode;
	onReset?: () => void;
	contextMessage: string;
	children: React.ReactNode;
}

const ErrorBoundaryLogger = ({
	fallbackUI,
	onReset,
	contextMessage,
	children,
}: ErrorBoundaryLoggerProps) => {
  const logError = useCallback((error: Error, info: ErrorInfo): void => {
    console.log('Пояснение:', contextMessage);
    console.log(`Ошибка в ${info.componentStack}:`, error, info);
  }, [contextMessage]);
	return (
			<ErrorBoundary onReset={onReset} fallback={fallbackUI} onError={logError}>
				{children}
			</ErrorBoundary>
	);
};
export default ErrorBoundaryLogger;