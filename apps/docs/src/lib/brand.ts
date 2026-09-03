export const BRANDS = [
  { id: "navigato", label: "Navigato" },
  { id: "nox-vale", label: "Nox & Vale" },
] as const;

export type BrandId = (typeof BRANDS)[number]["id"];

export const BRAND_STORAGE_KEY = "navigato-brand";
export const THEME_STORAGE_KEY = "navigato-theme";

export function isBrandId(value: string | null): value is BrandId {
  return value === "navigato" || value === "nox-vale";
}

export function readBrand(): BrandId {
  if (typeof window === "undefined") return "navigato";
  const stored = localStorage.getItem(BRAND_STORAGE_KEY);
  return isBrandId(stored) ? stored : "navigato";
}

export function readDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyBrand(brand: BrandId) {
  document.documentElement.dataset.brand = brand;
  localStorage.setItem(BRAND_STORAGE_KEY, brand);
}

export function applyDark(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
}
