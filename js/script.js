  // Toggle class active
  const navbarNav = document.querySelector('.navbar-nav');
  // ketika hamburger menu di klik
  document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle('active');
  };

  // klik di luar sidebar untuk menghilangkan nav
  const hamburger = document.querySelector('#hamburger-menu');

  document.addEventListener('click', function(e){
      if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
          navbarNav.classList.remove('active');
      }
  });

const zahir = "https://randomuser.me/api/?results=5";

async function buatReviews() {
  try {
    const api = await fetch(zahir);
    const data = await api.json();

    const reviewContainer = document.getElementById("review-container");

    const reviews = [
      "Tahu bulat ini bikin mager di rumah jadi worth it banget sih.🔥",
      "Gurihnya masuk banget di vibe ngemil tengah malam. 🌙🍴",
      "Gak nyangka tahu bulat bisa se-epik ini. auto order tiap nongkrong 🤩",
      "Tahu bulatnya crunchy di luar, soft di dalam 😎",
      "Serius, tahu ini vibes-nya beda, no debat 🥇💯",
      "Tahu bulat favorit kita semua, mantul parah 🚀",
      "Tahu bulat? Sekali coba langsung jadi team loyal. Ini gak main-main, bro 🤙",
      "Aromanya ngundang tetangga, rasanya bikin nostalgia 🔥🤤",
      "Cemilan legit yang pas banget buat healing dari skripsian. 💻😌",
      "Sumpah, ini tahu bulat terlalu underrated. Enaknya gak paham! 🤯✨",
      "Yamanskuy 🤙"
    ];

    data.results.forEach((user, index) => {
      const card = document.createElement("div");
      card.classList.add("review-card");

      const review = reviews[Math.floor(Math.random() * reviews.length)];

      card.innerHTML = `
        <img src="${user.picture.medium}" alt="Foto ${user.name.first}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.location.country}</p>
        <p>"${review}"</p>
      `;

      reviewContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

buatReviews();


