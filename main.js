// Array de productos
const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 120
        }
        },
        {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
        "rate": 4.1,
        "count": 259
        }
        },
        {
        "id": 3,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 4.6,
        "count": 400
        }
        },
        {
        "id": 4,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 70
        }
        },
        {
        "id": 5,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
        "rate": 3.3,
        "count": 203
        }
        },
        {
        "id": 6,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
        "rate": 2.9,
        "count": 470
        }
        },
        {
        "id": 7,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
        "rate": 2.6,
        "count": 235
        }
        },
        {
        "id": 8,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
        "rate": 2.9,
        "count": 340
        }
        },
  ];
  
// Obtener todas las categorías únicas de los productos
const allCategories = Array.from(new Set(products.map(product => product.category)));

// Filtrar productos por categorías seleccionadas
const selectedCategories = allCategories;

const filteredProducts = products.filter(product => selectedCategories.includes(product.category));

// Saludar al usuario y dar la bienvenida a la tienda
alert("Bienvenido a nuestra tienda online. ¡Gracias por elegirnos!");

// Visualizar las categorías de productos disponibles
alert("Categorías de productos disponibles:\n" + allCategories.join("\n"));

// Mostrar lista de productos ordenados por ID y preguntar al usuario qué producto quiere comprar por ID
const sortedProductsById = filteredProducts.slice().sort((a, b) => a.id - b.id);
let selectedProductDetails;

do {
  const selectedProductId = prompt("Lista de productos:\n" + sortedProductsById.map(product => `ID: ${product.id} - ${product.title}`).join("\n") + "\n\nIngrese el ID del producto que desea comprar:");

  // Buscar el producto deseado por ID y mostrar detalles
  selectedProductDetails = sortedProductsById.find(product => product.id === parseInt(selectedProductId));

  if (selectedProductDetails) {
    const confirmation = confirm(`Nombre: ${selectedProductDetails.title}\nDescripción: ${selectedProductDetails.description}\nPrecio: $${selectedProductDetails.price}\n\n¿Desea completar la compra?`);

    if (confirmation) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7); // Supongamos que la entrega se programará para 7 días después
      alert(`¡Gracias por su compra! La entrega está programada para ${deliveryDate.toLocaleDateString()}.`);
    } else {
      alert("Gracias por visitar nuestra tienda. ¡Hasta pronto!");
    }
  } else {
    const retry = confirm("Producto no encontrado. ¿Desea intentarlo nuevamente?");
    if (!retry) {
      alert("Gracias por visitar nuestra tienda. ¡Hasta pronto!");
      break;
    }
  }
} while (!selectedProductDetails);