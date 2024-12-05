'use strict'
const map = L.map('map').setView([20.5937, 78.9629], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var airports = [
    { name: "Soekarno-Hatta International Airport (CGK)", coords: [-6.1256, 106.6559] },
    { name: "Kuala Lumpur International Airport (KUL)", coords: [2.7456, 101.7072] },
    { name: "Ninoy Aquino International Airport (MNL)", coords: [14.5086, 121.0195] },
    { name: "Changi Airport (SIN)", coords: [1.3644, 103.9915] },
    { name: "Tan Son Nhat International Airport (SGN)", coords: [10.8185, 106.6584] },
    { name: "Shahjalal International Airport (DAC)", coords: [23.8467, 90.4027] },
    { name: "Bandaranaike International Airport (CMB)", coords: [7.1728, 79.8836] },
    { name: "Tribhuvan International Airport (KTM)", coords: [27.7008, 85.3591] },
    { name: "Velana International Airport (MLE)", coords: [4.1918, 73.5290] },
    { name: "Hamid Karzai International Airport (KBL)", coords: [34.5659, 69.2121] },
    { name: "Almaty International Airport (ALA)", coords: [43.3534, 77.0405] },
    { name: "Ashgabat International Airport (ASB)", coords: [37.9868, 58.3602] },
    { name: "Hamad International Airport (DOH)", coords: [25.2731, 51.6086] },
    { name: "Muscat International Airport (MCT)", coords: [23.5933, 58.2844] },
    { name: "Kuwait International Airport (KWI)", coords: [29.2285, 47.9774] },
    { name: "King Abdulaziz International Airport (JED)", coords: [21.6796, 39.1565] },
    { name: "Queen Alia International Airport (AMM)", coords: [31.7226, 35.9933] },
    { name: "Beirut-Rafic Hariri International Airport (BEY)", coords: [33.8208, 35.4884] },
    { name: "Imam Khomeini International Airport (IKA)", coords: [35.4161, 51.1522] },
    { name: "Baghdad International Airport (BGW)", coords: [33.2625, 44.2346] },
    { name: "Heydar Aliyev International Airport (GYD)", coords: [40.4675, 50.0467] },
    { name: "Islamabad International Airport (ISB)", coords: [33.5499, 72.8258] },
    { name: "Jinnah International Airport (KHI)", coords: [24.9065, 67.1608] },
    { name: "Allama Iqbal International Airport (LHE)", coords: [31.5203, 74.4055] },
    { name: "Indira Gandhi International Airport (DEL)", coords: [28.5562, 77.1000] },
    { name: "Mumbai International Airport (BOM)", coords: [19.0896, 72.8656] },
    { name: "Chennai International Airport (MAA)", coords: [12.9941, 80.1695] },
    { name: "Rajiv Gandhi International Airport (HYD)", coords: [17.2403, 78.4294] },
    { name: "Beijing Capital International Airport (PEK)", coords: [40.0799, 116.6031] },
    { name: "Shanghai Pudong International Airport (PVG)", coords: [31.1434, 121.8052] },
    { name: "Guangzhou Baiyun International Airport (CAN)", coords: [23.3924, 113.2988] },
    { name: "Dubai International Airport (DXB)", coords: [25.2532, 55.3657] },
    { name: "Sheikh Zayed Airport (AUH)", coords: [24.4539, 54.3773] },
    { name: "Istanbul Airport (IST)", coords: [41.2753, 28.7529] },
    { name: "Incheon International Airport (ICN)", coords: [37.4602, 126.4407] },
    { name: "Tokyo Haneda Airport (HND)", coords: [35.5494, 139.7798] },
    { name: "Suvarnabhumi International Airport (BKK)", coords: [13.6899, 100.7501] },

];

const riddles = [
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "What has a neck but no head?", answer: "bottle" },
    { question: "What can you catch but not throw?", answer: "cold" },
    { question: "What has hands but can’t clap?", answer: "clock" },
    { question: "What is black and white and read all over?", answer: "newspaper" },
    { question: "What comes up but never goes down?", answer: "age" },
    { question: "What has keys but can’t open locks?", answer: "piano" },
    { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    { question: "What has many teeth but can’t bite?", answer: "comb" },
    { question: "What runs but has no legs?", answer: "river" },
    { question: "What has words but never speaks?", answer: "book" },
    { question: "What has four wheels and flies?", answer: "garbage truck" },
    { question: "What begins with T, ends with T, and has T in it?", answer: "teapot" },
    { question: "What has a head, a tail, but no body?", answer: "coin" },
    { question: "What is full of holes but still holds water?", answer: "sponge" },
    { question: "What has one eye but can’t see?", answer: "needle" },
    { question: "What has legs but doesn’t walk?", answer: "table" },
    { question: "What is orange and sounds like a parrot?", answer: "carrot" },
    { question: "What is always coming but never arrives?", answer: "tomorrow" },
    { question: "What has an ear but cannot hear?", answer: "corn" },
    { question: "What has a bed but never sleeps?", answer: "river" },
    { question: "What kind of room has no doors or windows?", answer: "mushroom" },
    { question: "What has one head, one foot, and four legs?", answer: "bed" },
    { question: "What is so fragile that saying its name breaks it?", answer: "silence" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "What has a thumb and four fingers but is not a hand?", answer: "glove" },
    { question: "What has cities but no houses, forests but no trees, rivers but no water?", answer: "map" },
    { question: "What gets broken without being held?", answer: "promise" },
];

airports.forEach(function(airport) {
    L.marker(airport.coords)
        .addTo(map)
        .bindPopup(`<b>${airport.name}</b>`);
});
function displayRandomRiddles() {
    const randomRiddles = riddles.sort(() => 0.5 - Math.random()).slice(0, 3);
    const riddlesBox = document.querySelector('.riddles');
    riddlesBox.innerHTML = '';
    randomRiddles.forEach(riddle => {
        const riddleElement = document.createElement('div');
        riddleElement.classList.add('riddle-box');
        riddleElement.innerHTML = `<strong>Q:</strong> ${riddle.question}`;
        riddlesBox.appendChild(riddleElement);
    });
}

document.addEventListener('DOMContentLoaded', displayRandomRiddles);
