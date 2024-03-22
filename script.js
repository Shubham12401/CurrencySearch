async function searchCountries() {
  const currencyCode = document
    .getElementById("currencyInput")
    .value.toUpperCase();
  const response = await fetch(
    `https://restcountries.com/v3.1/currency/${currencyCode}`
  );
  const data = await response.json();
  const countryList = document.getElementById("countryList");

  if (response.ok) {
    countryList.innerHTML = "";
    if (data.length === 0) {
      countryList.innerHTML = "<p>No countries found for this currency code.</p>";
    } else {
      data.forEach(async (country) => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("card");

        const flagImg = document.createElement("img");
        flagImg.src = `https://flagsapi.com/${country.cca2}/flat/64.png`;
        flagImg.alt = `${country.name.common} Flag`;
        flagImg.classList.add("card-img-top"); 
        countryDiv.appendChild(flagImg);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const countryName = document.createElement("h5");
        const countryCapital = document.createElement("h5");
        countryName.classList.add("card-title");
        countryName.textContent = "Name : "+country.name.common;
        countryCapital.textContent = "Capital : "+ country.capital;

        cardBody.appendChild(countryName);
        cardBody.appendChild(countryCapital);
        countryDiv.appendChild(cardBody);
        countryList.appendChild(countryDiv);
      });
    }
  } else {
    countryList.innerHTML =
      "<p>Failed to fetch data. Please try again later.</p>";
  }
}

