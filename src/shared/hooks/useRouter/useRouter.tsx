import { useCityParams } from "../useCityParams";
import { useRouter as useRouterI18N } from "@/i18n/navigation";

const useRouterSCK = (cityEn?: string) => {
  const _cityEn = useCityParams().cityEn;
  const router = useRouterI18N();
  const city = cityEn ?? _cityEn;
  return {
    push: (href: string, params?: {scroll?: boolean}) => router.push(`/city/${city}/${href}`,params),
    replace: (href: string, params?: {scroll?: boolean}) => router.replace(`/city/${city}/${href}`,params),
    back: () => router.back(),
    forward: () => router.forward(),
    prefetch: (href: string) => router.prefetch(`/city/${city}/${href}`),
    refresh: () => router.refresh(),
  };
}

export default useRouterSCK