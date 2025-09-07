const products = [
  {
    path: "data:image/jpeg;base64,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",
    title: "Mens Cotton Jacket",
    price: "$55.99",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    category: "Clothing",
  },
  {
    path:"https://img.drz.lazcdn.com/static/pk/p/3c669437771b01911c7bb7e5d579d8f3.jpg_720x720q80.jpg",
    title: "Silicone Kitchen Utensil Set",
    price: "$22.3",
    description:
      "A stylish and functional kitchen utensil collection,brushes, spoons, tongs",
    category: "kitchen",
  },
  {
    path:"https://www.fjallraven.com/495467/globalassets/catalogs/fjallraven/f2/f242/f24210/f550/7392158958177_ss18_a_foldsack_no1_21.jpg?width=624&height=624&rmode=BoxPad&bgcolor=fff&quality=100",
    title: "Fjallraven - Foldsac",
    price: "$109.95",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the main compartment",
    category: "Clothing",
  },
  {
    path:"https://m.media-amazon.com/images/I/61lYOCzqvAL._UY1000_.jpg",
    title: "John Hardy Women's L",
    price: "$695",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean",
    category: "Jewellery",
  },
  {
    path: "https://cdn.shoplightspeed.com/shops/645668/files/54211819/1000x640x2/western-digital-western-digital-2tb-elements-porta.jpg",
    title: "WD 2TB Elements Port",
    price: "$64",
    description:
      "USB 3.0 and USB 2.0 Compatibility, Fast data transfers, Improve PC Performance, High Capacity; Compatible",
    category: "Electronics",
  },
  {
    path: "https://images.squarespace-cdn.com/content/v1/5b4544e485ede17941bc95fc/88b32e09-f809-4e16-8dc4-9a26a18d142a/arc%E2%80%99teryx-beta-sl.jpg",
    title: "Rain Jacket Women Wi",
    price: "$39.99",
    description:
      "Lightweight, perfect for trip or casual wear—Long sleeve with hooded, adjustable drawstring waist design",
    category: "Clothing",
  },
  {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-orM0IpKaneDDrB3vhnZBn_GxyotZt31KA&s",
    title: "Premium Cookware Collection",
    price: "$55.99",
    description:
      "frying pans, grill pans, non-stick skillets, stainless-steel sauté pans, pressure cookers, and deep pots",
    category: "kitchen",
  },
  {
    path: "https://www.thoughtco.com/thmb/x1_k2-GNKgiM0GOv_JWus0CQkgU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-173609232-569d7ef73df78cafda9d4f76.jpg",
    title: "White Gold Plated Pr",
    price: "$9.99",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love",
    category: "Jewellery",
  },
  {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUT6cLrk4WHV0uQzyA_ZKCVX7p6_hwbS6-Q&s",
    title: "Samsung 49-Inch CHG9",
    price: "$999.99",
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screens side by side, QUANTUM DOT technology",
    category: "Electronics",
  },
  {
    path: "https://m.media-amazon.com/images/I/61mExYRV6mL._AC_SL1500_.jpg",
    title: "SanDisk SSD PLUS 1TB",
    price: "$109",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA drive)",
    category: "Electronics",
  },
    {
    path:"https://www.thepetalsbeauty.com/cdn/shop/files/Perfect_makeup_bundle_-_The_Petals_Beauty-4870938.jpg?v=1729596824",
    title: "MakeUp bundle",
    price: "$695",
    description:
      "Flawless Glow BB Cream Blush & Glow duo (in pink and peach shades),Multipurpose makeup brush",
    category: "Beauty",
  },
   {
    path:"https://i.pinimg.com/originals/a3/bb/56/a3bb5608a85de2b0d3a5229322ae830f.png",
    title: "Pastel Beauty Essentials Flat Lay",
    price: "$695",
    description:
      "A beautifully curated flat lay of skincare and beauty essentials displayed on a soft pastel pink background",
    category: "Beauty",
  },
  {
 path:" https://dailysale.com/cdn/shop/collections/toys-games-879935.jpg?v=1737087607",
 title:"Delightful Toy Display",
 price:"$30",
 description:"plush teddy bear, colorful stacking rings, building blocks, toy vehicles, and small rubber figures",
 category:"toys",
},
];

const wishList = [];
const cartList = [];

function productMapping(products) {
  const container = document.querySelector("#parent");
  if (!container) return;

  products.forEach((element) => {
    let div = document.createElement("div");
    let title = document.createElement("h1");
    let price = document.createElement("h3");
    let des = document.createElement("p");
    let img = document.createElement("img");
    let div2 = document.createElement("div");
    let wish = document.createElement("button");
    let cart = document.createElement("button");

    // Classes with Tailwind CSS
    div.className = "bg-white w-80 md:w-64  h-[500px] p-2 flex flex-col  items-center justify-between rounded-[10px]";
    title.className = "text-center"; 
    des.className = "text-center px-4";
    img.className = "h-[230px]";
    div2.className = "flex gap-[7px]";
    wish.className = "bg-gray-300 text-orange-600 py-2.5 px-3 rounded-[5px] text-lg text-nowrap";
    cart.className = "bg-orange-600 transition-colors duration-300 py-2.5 px-3 rounded-[5px] text-lg text-white text-nowrap";

    // Set content
    wish.innerText = "Add to wish";
    cart.innerText = "Add to cart";
    title.innerText = element.title;
    price.innerText = element.price;
    des.innerText = element.description;
    img.src = element.path;
    img.alt = element.title;

    // Append elements in correct order
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(des);
    div2.appendChild(wish);
    div2.appendChild(cart);
    div.appendChild(div2);
    container.appendChild(div);

    // Event listeners
    wish.addEventListener("mouseenter", () => {
      wish.classList.add("bg-orange-100")
    });
    wish.addEventListener("mouseleave", () => {
      wish.classList.remove("bg-orange-100")
    });
    wish.addEventListener("click", function () {
      wishList.push(element);
      localStorage.setItem("wishes", JSON.stringify(wishList));
    });

    cart.addEventListener("mouseenter", () => {
      cart.classList.add("bg-orange-800") 
    });
    cart.addEventListener("mouseleave", () => {
      cart.classList.remove("bg-orange-800") 
    });
    cart.addEventListener("click", function () {
      cartList.push(element);
      localStorage.setItem("cart", JSON.stringify(cartList));
    });
  });
}

function gettingParent() {
  let container = document.querySelector("#parent");
  if (container) container.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  productMapping(products)
});

function clothing() {
  gettingParent()
  let clothArray = products.filter((e) => e.category === "Clothing")
  productMapping(clothArray)
}

function electronics() {
  gettingParent()
  let electronicArray = products.filter((e) => e.category === "Electronics")
  productMapping(electronicArray)
}

function jewellery() {
  gettingParent()
  let jewelleryArray = products.filter((e) => e.category === "Jewellery")
  productMapping(jewelleryArray)
}

function beauty(){
  gettingParent()
  let beautyArray= products.filter((e) => e.category==="Beauty")
  productMapping(beautyArray)
}

function toys(){
  gettingParent()
  let toyArray= products.filter((e)=> e.category==="toys")
  productMapping(toyArray)
}

function kitchen(){
  gettingParent()
  let kitchenArray= products.filter((e)=>e.category==="kitchen")
  productMapping(kitchenArray)
}