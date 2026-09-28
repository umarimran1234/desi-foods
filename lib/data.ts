// Business info and menu. Prices, timings and reviews are placeholders — confirm with the owner.

export const site = {
  name: "Desi Foods",
  urdu: "دیسی فوڈز",
  url: "https://desi-foods.vercel.app",
  street: "Apartment Abdullah Centre, Federal B Area Block 16",
  area: "Gulberg Town, Karachi",
  landmark: "Opposite Lucky One Mall",
  phones: [
    { label: "0300-2926900", tel: "+923002926900" },
    { label: "0313-2260162", tel: "+923132260162" },
  ],
  whatsapp: "923002926900",
  facebook: "https://www.facebook.com/DesiFoodd/",
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=Desi+Foods+Abdullah+Centre+FB+Area+Block+16+Karachi",
  mapEmbed: "https://maps.google.com/maps?q=Lucky%20One%20Mall%20Karachi&z=16&output=embed",
  hours: [
    ["Mon – Thu", "12:00 PM – 12:00 AM"],
    ["Fri", "2:00 PM – 1:00 AM"],
    ["Sat – Sun", "12:00 PM – 1:00 AM"],
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const unsplash = (id: string, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export type Special = {
  name: string;
  urdu: string;
  desc: string;
  price: number;
  unit: string;
  badge: string;
  img: string;
};

export const specials: Special[] = [
  { name: "Dumba Derhya Pulao", urdu: "دنبہ ڈیرھیا پلاؤ", desc: "Fragrant rice cooked in fresh dumba yakhni with tender, fall-off-the-bone dumba meat.", price: 1450, unit: "/ plate", badge: "Signature", img: unsplash("photo-1563379091339-03b21ab4a4f8") },
  { name: "Dumba Karahi", urdu: "دنبہ کڑاہی", desc: "Fresh dumba cooked in desi ghee with tomatoes, green chillies, ginger and black pepper.", price: 3200, unit: "/ kg", badge: "Must Try", img: unsplash("photo-1603894584373-5ac82b2ae398") },
  { name: "Dumba Chalkki", urdu: "دنبہ چلکی", desc: "Crispy, smoky dumba chalkki pieces — a rare Karachi find, served sizzling with chutney.", price: 1800, unit: "/ plate", badge: "New", img: unsplash("photo-1606491956689-2ea866880c84") },
  { name: "Dumba Dum Pukht", urdu: "دم پخت", desc: "Slow-cooked on dum for hours with whole spices until the meat melts in your mouth.", price: 3500, unit: "/ kg", badge: "Chef's Pick", img: unsplash("photo-1545247181-516773cae754") },
  { name: "Batair Fry", urdu: "بٹیر", desc: "Whole quails marinated in house masala and fried crisp — a desi street favourite.", price: 650, unit: "/ piece", badge: "Popular", img: unsplash("photo-1598515214211-89d3c73ae83b") },
  { name: "Beef Derhya Biryani", urdu: "بیف بریانی", desc: "Spicy Karachi-style biryani with beef, aloo and layers of saffron rice.", price: 550, unit: "/ plate", badge: "Classic", img: unsplash("photo-1589302168068-964664d93dc0") },
];

export type MenuItem = { name: string; desc?: string; price: number };

export const menu: Record<string, MenuItem[]> = {
  "Dumba Specials": [
    { name: "Dumba Derhya Pulao", desc: "Full plate, fresh yakhni", price: 1450 },
    { name: "Dumba Karahi (1 kg)", desc: "Desi ghee, black pepper", price: 3200 },
    { name: "Dumba Karahi (½ kg)", price: 1700 },
    { name: "Dumba Chalkki", desc: "Crispy smoked pieces", price: 1800 },
    { name: "Dumba Dum Pukht (1 kg)", desc: "Slow-cooked", price: 3500 },
    { name: "Dumba Namkeen Gosht", desc: "Peshawari style", price: 3000 },
  ],
  "Karahi & Handi": [
    { name: "Chicken Karahi (full)", price: 1900 },
    { name: "Chicken Karahi (half)", price: 1050 },
    { name: "Mutton Karahi (1 kg)", price: 3400 },
    { name: "Chicken White Handi", desc: "Creamy, mild", price: 1300 },
    { name: "Chicken Makhni Handi", price: 1350 },
    { name: "Daal Mash Fry", desc: "Tarka with desi ghee", price: 450 },
  ],
  Rice: [
    { name: "Beef Derhya Biryani", desc: "Single plate", price: 550 },
    { name: "Chicken Biryani", desc: "Single plate", price: 450 },
    { name: "Chicken Pulao", price: 450 },
    { name: "Prawns Biryani", price: 950 },
    { name: "Fish Biryani", price: 850 },
    { name: "Plain Rice", price: 250 },
  ],
  BBQ: [
    { name: "Chicken Tikka (leg/chest)", price: 450 },
    { name: "Malai Boti (10 pcs)", price: 850 },
    { name: "Seekh Kabab (4 pcs)", desc: "Beef", price: 700 },
    { name: "Reshmi Kabab (4 pcs)", price: 750 },
    { name: "Batair Fry", desc: "Per piece", price: 650 },
    { name: "BBQ Platter", desc: "Tikka, kabab, boti, fries", price: 2800 },
  ],
  "Breads & Sides": [
    { name: "Tandoori Naan", price: 60 },
    { name: "Roghni Naan", price: 100 },
    { name: "Garlic Naan", price: 120 },
    { name: "Raita", price: 120 },
    { name: "Fresh Salad", price: 150 },
    { name: "Soft Drink 1.5L", price: 280 },
  ],
};

export const platters = [
  { name: "Family Platter", serves: "Serves 4–5", price: 4499, items: ["Chicken Karahi (half)", "Beef Biryani (2 plates)", "Chicken Tikka ×2", "Raita, salad & 4 naan", "1.5L cold drink"] },
  { name: "Dumba Platter", serves: "Serves 6–8", price: 11999, hot: true, items: ["Dumba Derhya Pulao", "Dumba Karahi (1 kg)", "Dumba Chalkki", "Dumba Dum Pukht", "Raita, salad, naan & drinks"] },
  { name: "Mega Dawat Platter", serves: "Serves 10–12", price: 18999, items: ["Dumba Pulao (full degh)", "Batair ×12", "BBQ Platter (tikka, kabab, boti)", "Handi & mix salad", "12 naan + dessert"] },
];

export const gallery = [
  { label: "Dumba Pulao", img: unsplash("photo-1563379091339-03b21ab4a4f8", 1000) },
  { label: "Karahi", img: unsplash("photo-1603894584373-5ac82b2ae398", 600) },
  { label: "BBQ", img: unsplash("photo-1599487488170-d11ec9c172f0", 600) },
  { label: "Biryani", img: unsplash("photo-1589302168068-964664d93dc0", 600) },
  { label: "Handi", img: unsplash("photo-1565557623262-b51c2513a641", 600) },
  { label: "Dining Hall", img: unsplash("photo-1555396273-367ea4eb4db5", 1000) },
];

// SAMPLE reviews for the pitch — replace with real Google reviews before going live.
export const reviews = [
  { stars: 5, initial: "A", text: "Dumba Derhya Pulao was outstanding — soft meat and proper yakhni flavour. The platter was enough for our whole family." },
  { stars: 5, initial: "S", text: "Ordered the Dumba Platter for a dawat of 10 people. Everything arrived hot and on time. Will order again." },
  { stars: 4, initial: "H", text: "Karahi and BBQ were very tasty, reasonable prices for the quantity. Great place near Lucky One Mall." },
];

export const formatPrice = (n: number) => "Rs " + n.toLocaleString("en-PK");
