import { Link } from "@/i18n/navigation";
import { memo } from "react";
import type { ComponentProps } from "react";
import LinkWithHooksSCK, { normalizePatch } from "./LinkWithHooksSCK";

export type LinkCitySCKProps = ComponentProps<typeof Link> & {
	cityEn?: string;
};

const LinkCitySCK: React.FC<LinkCitySCKProps> = ({
	href,
	cityEn,
	children,
	...props
}) => {
	if (cityEn) {
		// Нормализация пути
		const normalizedHref = normalizePatch(href);

		const url = normalizedHref
			? `/city/${cityEn}/${normalizedHref}`
			: `/city/${cityEn}`;

		return (
			<Link href={url} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<LinkWithHooksSCK href={href} {...props}>
			{children}
		</LinkWithHooksSCK>
	);
};

export default memo(LinkCitySCK);
