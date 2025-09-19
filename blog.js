
window.onload = function () {
  const container = document.getElementById("colleges-container");

  colleges.forEach(clg => {
    const card = document.createElement("div");
    card.classList.add("college-card");

    card.innerHTML = `
      <img src="${clg.image}" alt="${clg.name}" class="college-img" />
      <h2 class="college-name">${clg.name}</h2>
      <p class="college-desc">${clg.description}</p>
      <button class="read-btn">Read More</button>
    `;

    container.appendChild(card);
  });
};
