// Data produk manual
const products = [
  {
    id: 1,
    name: "Baju Katun Lengan Panjang",
    price: 120000,
    material: "Katun",
    category: "Baju",
    stock: 20,
    createdAt: "2024-01-01",
    image: "./img/1-baju-katun-lengan-panjang.jpg",
  },
  {
    id: 2,
    name: "Celana Jeans Pria",
    price: 180000,
    material: "Jeans",
    category: "Celana",
    stock: 18,
    createdAt: "2024-01-02",
    image: "./img/2-celana-jeans-pria.jpg",
  },
  {
    id: 3,
    name: "Rok Plisket Midi",
    price: 90000,
    material: "Polyester",
    category: "Rok",
    stock: 15,
    createdAt: "2024-01-03",
    image: "./img/3-rok-plisket-midi.jpg",
  },
  {
    id: 4,
    name: "Gamis Brokat Elegan",
    price: 250000,
    material: "Brokat",
    category: "Gamis",
    stock: 10,
    createdAt: "2024-01-04",
    image: "./img/4-gamis-brokat-elegan.jpg",
  },
  {
    id: 5,
    name: "Sweater Rajut Wanita",
    price: 150000,
    material: "Rajut",
    category: "Sweater",
    stock: 22,
    createdAt: "2024-01-05",
    image: "./img/5-sweater-rajut-wanita.jpg",
  },
  {
    id: 6,
    name: "Hoodie Oversize Unisex",
    price: 200000,
    material: "Fleece",
    category: "Hoodie",
    stock: 25,
    createdAt: "2024-01-06",
    image: "./img/6-hoodie-oversize-unisex.jpg",
  },
  {
    id: 7,
    name: "Mantel Musim Dingin",
    price: 300000,
    material: "Wol",
    category: "Mantel",
    stock: 12,
    createdAt: "2024-01-07",
    image: "./img/7-mantel-musim-dingin.jpg",
  },
  {
    id: 8,
    name: "Syal Polos Hangat",
    price: 50000,
    material: "Akrilik",
    category: "Syal",
    stock: 30,
    createdAt: "2024-01-08",
    image: "./img/8-syal-polos-hangat.jpg",
  },
  {
    id: 9,
    name: "Gamis Polos Remaja",
    price: 170000,
    material: "Katun Rayon",
    category: "Gamis",
    stock: 18,
    createdAt: "2024-01-09",
    image: "./img/9-gamis-polos-remaja.jpg",
  },
  {
    id: 10,
    name: "Celana Kulot Wanita",
    price: 110000,
    material: "Katun Linen",
    category: "Celana",
    stock: 14,
    createdAt: "2024-01-10",
    image: "./img/10-celana-kulot-wanita.jpg",
  },
  {
    id: 11,
    name: "Baju Batik Kasual",
    price: 130000,
    material: "Katun Batik",
    category: "Baju",
    stock: 16,
    createdAt: "2024-01-11",
    image: "./img/11-baju-batik-kasual.jpg",
  },
  {
    id: 12,
    name: "Sweater Polos Cowok",
    price: 140000,
    material: "Terry",
    category: "Sweater",
    stock: 20,
    createdAt: "2024-01-12",
    image: "./img/12-sweater-polos-cowok.jpg",
  },
  {
    id: 13,
    name: "Rok Span Formal",
    price: 100000,
    material: "Stretch",
    category: "Rok",
    stock: 11,
    createdAt: "2024-01-13",
    image: "./img/13-rok-span-formal.jpg",
  },
  {
    id: 14,
    name: "Hoodie Crop Wanita",
    price: 160000,
    material: "Fleece",
    category: "Hoodie",
    stock: 17,
    createdAt: "2024-01-14",
    image: "./img/14-hoodie-crop-wanita.jpg",
  },
  {
    id: 15,
    name: "Mantel Formal Hitam",
    price: 280000,
    material: "Wool Blend",
    category: "Mantel",
    stock: 13,
    createdAt: "2024-01-15",
    image: "./img/15-mantel-formal-hitam.jpg",
  },
  {
    id: 16,
    name: "Syal Rajut Abu",
    price: 55000,
    material: "Rajut",
    category: "Syal",
    stock: 24,
    createdAt: "2024-01-16",
    image: "./img/16-syal-rajut-abu.jpg",
  },
  {
    id: 17,
    name: "Celana Jogger Pria",
    price: 125000,
    material: "Katun Twill",
    category: "Celana",
    stock: 19,
    createdAt: "2024-01-17",
    image: "./img/17-celana-jogger-pria.jpg",
  },
  {
    id: 18,
    name: "Baju Blouse Wanita",
    price: 100000,
    material: "Sifon",
    category: "Baju",
    stock: 20,
    createdAt: "2024-01-18",
    image: "./img/18-baju-blouse-wanita.jpg",
  },
  {
    id: 19,
    name: "Rok Tutu Remaja",
    price: 95000,
    material: "Tulle",
    category: "Rok",
    stock: 10,
    createdAt: "2024-01-19",
    image: "./img/19-rok-tutu-remaja.jpg",
  },
  {
    id: 20,
    name: "Gamis Syar’i Premium",
    price: 275000,
    material: "Wolfis Premium",
    category: "Gamis",
    stock: 9,
    createdAt: "2024-01-20",
    image: "./img/20-gamis-syari-premium.jpg",
  },
  {
    id: 21,
    name: "Sweater Unisex Cokelat",
    price: 145000,
    material: "Terry",
    category: "Sweater",
    stock: 15,
    createdAt: "2024-01-21",
    image: "./img/21-sweater-unisex-cokelat.jpg",
  },
  {
    id: 22,
    name: "Hoodie Zipper Abu",
    price: 170000,
    material: "Fleece",
    category: "Hoodie",
    stock: 18,
    createdAt: "2024-01-22",
    image: "./img/22-hoodie-zipper-abu.jpg",
  },
  {
    id: 23,
    name: "Celana Legging Wanita",
    price: 90000,
    material: "Spandex",
    category: "Celana",
    stock: 21,
    createdAt: "2024-01-23",
    image: "./img/23-celana-legging-wanita.jpg",
  },
  {
    id: 24,
    name: "Rok Panjang Polos",
    price: 105000,
    material: "Katun",
    category: "Rok",
    stock: 14,
    createdAt: "2024-01-24",
    image: "./img/24-rok-panjang-polos.jpg",
  },
  {
    id: 25,
    name: "Syal Bermotif Etnik",
    price: 65000,
    material: "Wol",
    category: "Syal",
    stock: 0,
    createdAt: "2024-01-25",
    image: "./img/25-syal-bermotif-etnik.jpg",
  },
  {
    id: 26,
    name: "Gamis Casual Harian",
    price: 190000,
    material: "Linen",
    category: "Gamis",
    stock: 12,
    createdAt: "2024-01-26",
    image: "./img/26-gamis-casual-harian.jpg",
  },
  {
    id: 27,
    name: "Baju Tunik Lengan Puff",
    price: 115000,
    material: "Katun Poplin",
    category: "Baju",
    stock: 18,
    createdAt: "2024-01-27",
    image: "./img/27-baju-tunik-lengan-puff.jpg",
  },
  {
    id: 28,
    name: "Mantel Hoodie Panjang",
    price: 295000,
    material: "Wool & Fleece",
    category: "Mantel",
    stock: 11,
    createdAt: "2024-01-28",
    image: "./img/28-mantel-hoodie-panjang.jpg",
  },
  {
    id: 29,
    name: "Celana Chino Slim Fit",
    price: 150000,
    material: "Katun",
    category: "Celana",
    stock: 20,
    createdAt: "2024-01-29",
    image: "./img/29-celana-chino-slim-fit.jpg",
  },
  {
    id: 30,
    name: "Sweater Vest Wanita",
    price: 130000,
    material: "Rajut",
    category: "Sweater",
    stock: 17,
    createdAt: "2024-01-30",
    image: "./img/30-sweater-vest-wanita.jpg",
  },
];

// Ambil produk dari Fake Store API, hanya yang kategori fashion
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((fakeProducts) => {
    const fashionOnly = fakeProducts.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );

    // Ubah struktur produk dari fake store agar sesuai dengan struktur produk lokal
    const mappedFakeProducts = fashionOnly.map((item, index) => ({
      id: products.length + index + 1, // ID unik, lanjut dari ID terakhir produk manual
      name: item.title, // Nama produk
      price: Math.round(item.price * 16000), // Konversi USD ke IDR
      material: "material" ? "Katun" : "Linen", // Default material jika tidak ada
      category:
        item.category === "men's clothing" ? "Baju Pria" : "Baju Wanita", // Sesuaikan kategori
      stock: Math.floor(Math.random() * 20) + 5, // Stok random antara 5-25
      createdAt: new Date().toISOString().split("T")[0], // Tanggal hari ini
      image: item.image, // URL gambar
    }));

    // Gabungkan data manual dan dari API
    products.push(...mappedFakeProducts);

    // Jalankan fungsi render produk setelah semua produk tersedia
    if (typeof renderProducts === "function") {
      renderProducts(products);
    } else {
      console.warn("renderProducts() tidak ditemukan!");
    }
  })
  .catch((error) =>
    console.error("Gagal fetch produk dari Fake Store API:", error)
  );
