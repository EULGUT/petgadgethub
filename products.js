const categories = [
  "GPS & Tracking",
  "Voeding",
  "Water & Drinken",
  "Camera & Monitoring",
  "Speelgoed",
  "Verzorging"
];

const productTypes = [
  "Smart Pet Feeder",
  "Pet GPS Tracker",
  "Automatic Water Fountain",
  "Pet Camera",
  "Interactive Dog Toy",
  "Smart Cat Toy",
  "Pet Grooming Tool",
  "Automatic Litter Box",
  "Dog Training Collar",
  "Pet Activity Tracker"
];

const products = [];

for (let i = 1; i <= 1000; i++) {
  const type = productTypes[Math.floor(Math.random() * productTypes.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];

  products.push({
    name: type + " " + i,
    category: category,
    price: Math.random() * 80 + 10,
    description: "A useful gadget for pets that helps owners care for dogs and cats more easily.",
    image: "https://picsum.photos/300/200?random=" + i,
    link: "#"
  });
}
