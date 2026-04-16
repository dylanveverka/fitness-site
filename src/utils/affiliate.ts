export const AMAZON_TAG = "dveverka-20";

export function amazonLink(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=dveverka-20`;
}
