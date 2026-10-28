// Central place to edit business info & listings.

export const SITE = {
  name: "Ruko Cibinong",
  tagline: "Ruko strategis di Bogor, siap untuk usaha Anda",
  // Format internasional tanpa "+" atau "0" di depan. Contoh: 6281234567890
  whatsapp: "6281234567890",
  address: "Cibinong, Kabupaten Bogor, Jawa Barat",
  hours: "Senin – Sabtu, 08.00 – 17.00 WIB",
};

export type Ruko = {
  id: string;
  name: string;
  location: string;
  price: string;
  status: "Tersedia" | "Terbatas" | "Terjual";
  image: string;
  specs: { floors: number; landArea: string; buildingArea: string; bedrooms: number; bathrooms: number };
  highlights: string[];
};

export const RUKOS: Ruko[] = [
  {
    id: "ruko-a",
    name: "Ruko Tipe A",
    location: "Jl. Raya Bogor, Cibinong",
    price: "Rp 1,2 M",
    status: "Tersedia",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1160",
    specs: { floors: 2, landArea: "60 m²", buildingArea: "110 m²", bedrooms: 2, bathrooms: 2 },
    highlights: ["Pinggir jalan utama", "SHM", "Parkir luas"],
  },
  {
    id: "ruko-b",
    name: "Ruko Tipe B",
    location: "Dekat Stadion Pakansari",
    price: "Rp 1,6 M",
    status: "Terbatas",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1160",
    specs: { floors: 3, landArea: "75 m²", buildingArea: "180 m²", bedrooms: 3, bathrooms: 3 },
    highlights: ["3 lantai", "Area ramai", "Listrik 5.500 VA"],
  },
  {
    id: "ruko-c",
    name: "Ruko Tipe C",
    location: "Akses Tol Jagorawi",
    price: "Rp 2,1 M",
    status: "Tersedia",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1160",
    specs: { floors: 3, landArea: "90 m²", buildingArea: "220 m²", bedrooms: 3, bathrooms: 3 },
    highlights: ["Hook / sudut", "Dekat tol", "Cocok kantor"],
  },
];

/** Build a wa.me link with a prefilled chat template. */
export function waLink(ruko?: Ruko) {
  const text = ruko
    ? `Halo ${SITE.name}, saya tertarik dengan *${ruko.name}* (${ruko.location}) seharga ${ruko.price}.\n\nNama: \nRencana penggunaan: \n\nMohon info lebih lanjut & jadwal survei. Terima kasih.`
    : `Halo ${SITE.name}, saya ingin bertanya tentang ruko yang tersedia.\n\nNama: \n\nTerima kasih.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

