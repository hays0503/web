"use client";
import { Link } from "@/i18n/navigation";
import { useCityParams } from "@/shared/hooks";
import type { LinkCitySCKProps } from "./LinkSCK";

export const normalizePatch = (href: string|unknown) => {
	return typeof href === "string"
		? href.startsWith("/")
			? href.slice(1)
			: href
		: "";
};

const LinkWithHooksSCK: React.FC<LinkCitySCKProps> = ({
	href,
	children,
	...props
}) => {
	const city = useCityParams().cityEn;

	// Нормализация пути
	const normalizedHref = normalizePatch(href);

	const url = `/city/${city}/${normalizedHref}`;

	return (
		<Link href={url} {...props}>
			{children}
		</Link>
	);
};

export default LinkWithHooksSCK;
