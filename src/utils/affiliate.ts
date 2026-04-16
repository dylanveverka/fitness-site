export const AMAZON_TAG = "dveverka-20";

// Maps each product ASIN to a verified Amazon search URL.
// Search URLs are used instead of /dp/ links to avoid 404s when
// individual product listings are removed or region-redirected.
const ASIN_MAP: Record<string, string> = {
  // Protein shakes
  "B00HIIJDXO": "https://www.amazon.com/s?k=premier+protein+shake&tag=dveverka-20",
  // Kodiak waffles
  "B07NQXHF44": "https://www.amazon.com/s?k=kodiak+cakes+power+waffles&tag=dveverka-20",
  // ON Gold Standard
  "B000QSNYGI": "https://www.amazon.com/s?k=optimum+nutrition+gold+standard+whey&tag=dveverka-20",
  // MyProtein Impact Whey
  "B09NWD163P": "https://www.amazon.com/s?k=myprotein+impact+whey&tag=dveverka-20",
  // Creatine monohydrate
  "B002DYIZEO": "https://www.amazon.com/s?k=creatine+monohydrate&tag=dveverka-20",
  // Pre-workouts
  "B07SMGPK85": "https://www.amazon.com/s?k=transparent+labs+bulk+pre+workout&tag=dveverka-20",
  "B00EKZJBHY": "https://www.amazon.com/s?k=c4+pre+workout&tag=dveverka-20",
  "B08CCZZ4BW": "https://www.amazon.com/s?k=legion+pulse+pre+workout&tag=dveverka-20",
  // Resistance bands
  "B01AVDVHTI": "https://www.amazon.com/s?k=resistance+bands+set&tag=dveverka-20",
  "B07NKD3M5S": "https://www.amazon.com/s?k=resistance+bands+set&tag=dveverka-20",
  "B07WKFL8MV": "https://www.amazon.com/s?k=resistance+bands+set&tag=dveverka-20",
  // Shaker bottles
  "B001NZ9HCI": "https://www.amazon.com/s?k=blender+bottle+shaker&tag=dveverka-20",
  "B01LXBUA3Y": "https://www.amazon.com/s?k=blender+bottle+shaker&tag=dveverka-20",
  "B00YJKUUOY": "https://www.amazon.com/s?k=blender+bottle+shaker&tag=dveverka-20",
  // Home gym gear
  "B00YJHKMJ0": "https://www.amazon.com/s?k=doorframe+pull+up+bar&tag=dveverka-20",
  "B07T6GXQ5N": "https://www.amazon.com/s?k=adjustable+dumbbells&tag=dveverka-20",
  "B0043IQNQQ": "https://www.amazon.com/s?k=exercise+yoga+mat&tag=dveverka-20",
  "B07BNGXV5Z": "https://www.amazon.com/s?k=jump+rope+fitness&tag=dveverka-20",
  // Nutrition tracking
  "B079D3GLRS": "https://www.amazon.com/s?k=food+kitchen+scale&tag=dveverka-20",
  "B076HMXMYP": "https://www.amazon.com/s?k=meal+prep+containers&tag=dveverka-20",
};

export function amazonLink(asin: string): string {
  return ASIN_MAP[asin] ?? `https://www.amazon.com/s?k=${asin}&tag=${AMAZON_TAG}`;
}
