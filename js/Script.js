function toggleMode() {
    document.body.classList.toggle("dark");
}


//Rooms and Villas
const rooms = [
    {
        name: "បន្ទប់ស្តង់ដារ",
        category: "Standard",
        price: 50,
        image: "https://th.bing.com/th/id/OIP.s0fyRWUFDUpE4QStaAP9ogHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Comfortable room with basic facilities",
        numbers: [101]
    },
    {
        name: "បន្ទប់ VIP",
        category: "Vip",
        price: 50,
        image: "https://th.bing.com/th/id/OIP.DU8_IkMAVthoraPrGfDD6wHaE8?w=305&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Comfortable room with basic facilities",
        numbers: [102]
    },
    {
        name: "បន្ទប់ VIP",
        category: "Vip",
        price: 50,
        image: "https://th.bing.com/th/id/OIP.1voqWWJ3gEmq5JC0IE2t2AHaE8?w=279&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Comfortable room with basic facilities",
        numbers: [103]
    },
    {
        name: "បន្ទប់ឌីលុច",
        category: "Deluxe",
        price: 90,
        image: "https://th.bing.com/th/id/OIP.tyjyH3xb8lYrSVroz1lVhQHaDt?w=296&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Spacious room with premium",
        numbers: [104]
    },
    {
        name: "បន្ទប់ឌីលុច",
        category: "Deluxe",
        price: 90,
        image: "https://th.bing.com/th/id/OIP.z3lNod7anMDxD1PiLN9d_QHaE8?w=189&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Spacious room with premium",
        numbers: [105]
    },
    {
        name: "បន្ទប់ឌីលុច",
        category: "Deluxe",
        price: 90,
        image: "https://th.bing.com/th/id/OIP.wiRsA1RUHzDFk5oClNDcDwHaEK?w=271&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Spacious room with premium",
        numbers: [106]
    },
    {
        name: "វីឡា​ឯកជន",
        category: "Villa",
        price: 180,
        image: "https://th.bing.com/th/id/OIP.B1B25gPke37XaZs_iGX5zAHaEU?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Luxury villa with private pool",
        numbers: [107]
    },
    {
        name: "វីឡា​ឯកជន",
        category: "Villa",
        price: 180,
        image: "https://th.bing.com/th/id/OIP.cUquyNGxZEXTRXl_Qlg7rgHaE8?w=245&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        desc: "Luxury villa with private pool",
        numbers: [108]
    },
];

// 🎯 Render function
function renderRooms() {
    const filter = document.getElementById("filter").value;
    const container = document.getElementById("roomList");
    container.innerHTML = "";
    //Loop data
    const filtered = rooms.filter(room => {
        return filter === "All" || room.category === filter;
    });

    filtered.forEach(room => {
        container.innerHTML += `
            <div class="card">
                <img src="${room.image}">
                <div class="card-content">
                    <h3>${room.name}</h3>
                    <p class="price">$${room.price} / យប់</p>
                    <p>${room.desc}</p>
                    <button class="btn" onclick='openBooking(${JSON.stringify(room)})'>
                        Book Now
                    </button>
                </div>
            </div>
        `;
    });
}


// 🎯 Loop room discount
const promos = [
    {
        name: "បន្ទប់ស្តង់ដារ",
        category: "Standard",
        price: 40,
        dis: "20% OFF",
        image: "https://th.bing.com/th/id/OIP.qWL8V0PvT-olO5T9Od_i-wHaFj?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        numbers: [109]
    },
    {
        name: "បន្ទប់ VIP",
        category: "Vip",
        price: 30,
        dis: "30% OFF",
        image: "https://th.bing.com/th/id/OIP.vD2DRW0Vf4J1YQt6N4PrMgHaEK?w=324&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        numbers: [110]
    },
    {
        name: "បន្ទប់ឌីលុច",
        category: "Deluxe",
        price: 35,
        dis: "15% OFF",
        image: "https://th.bing.com/th/id/OIP.c5Ed2jozgur7FNWLzSXVwAHaFj?w=244&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        numbers: [111]
    }
];

const carousel = document.getElementById("carouselContent");
const indicators = document.getElementById("indicators");

promos.forEach((promo, i) => {

    // 🔹 Slides
    carousel.innerHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${promo.image}" class="d-block w-100">

            <div class="carousel-caption text-start bg-dark bg-opacity-50 p-3 rounded">
                <h2>${promo.name}</h2>
                <p class="text-white fw-bold">${promo.dis}</p>
                <button class="btn btn-success"
                    onclick='openBooking(${JSON.stringify(promo)})'>
                    Book Now
                </button>
            </div>
        </div>
    `;

    // 🔹 Indicators
    indicators.innerHTML += `
        <button type="button"
            data-bs-target="#promoCarousel"
            data-bs-slide-to="${i}"
            class="${i === 0 ? 'active' : ''}">
        </button>
    `;
});

// 🚀 Load first time
renderRooms();



/*Lightbox */
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/*Open Popup*/
function openBooking(roomName) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("room").value = roomName;
}
// ❌ Close popup
function closeBooking() {
    document.getElementById("popup").style.display = "none";
}


/*Booking Room */
function openBooking(room) {
    document.getElementById("popup").style.display = "flex";

    // 🏷️ AUTO ROOM TYPE
    document.getElementById("roomType").value = room.category;

    // Set room name
    document.getElementById("roomname").value = room.name;

    // 🎯 Auto pick random available room number
    let randomRoom =
        room.numbers[Math.floor(Math.random() * room.numbers.length)];

    document.getElementById("roomNumber").value = randomRoom;

    //Auto price
    document.getElementById("price").value = room.price;
}



/*Send booking request */
function sendBooking() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let roomname = document.getElementById("roomname").value;
    let roomtype = document.getElementById("roomType").value;
    let roomNumber = document.getElementById("roomNumber").value;
    let guests = document.getElementById("guests").value;
    let price = document.getElementById("price").value;

    let message = `
🏨 New Booking

Name: ${name}
Email: ${email}
Phone: ${phone}
Check-in: ${checkin}
Check-out: ${checkout}
Room Name: ${roomname}
Room Type: ${roomtype}
Room Number: ${roomNumber}
Guests: ${guests}
Price: ${price}
______________________
Thank you.
`;

    let token = "8769443016:AAHVGx-wihJfp3S14Ufob4KYKxhzSyFx8y0";
    let chat_id = "7757000041";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
        .then(() => {
            alert("Booking បានជោគជ័យ.✅");
            closeBooking();
        })
        .catch(() => alert("Error booking សូមព្យាយាមម្តងទៀត!❌"));
}


//Send Message from contact
function sendMessage() {
    let contactname = document.getElementById("contactname").value;
    let contactmessage = document.getElementById("contactmessage").value;
    let message = `
🏨 New Contact

ឈ្មោះ: ${contactname}
សារ: ${contactmessage}
______________________
`;

    let token = "8769443016:AAHVGx-wihJfp3S14Ufob4KYKxhzSyFx8y0";
    let chat_id = "7757000041";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
        .then(() => {
            alert("Message sent successfully.✅");
            closeBooking();
        })
        .catch(() => alert("Error sending message. Please try again!❌"));
}