     // Get the button element
     let btn = document.querySelector("#check");

     // Add a click event to the button
     btn.addEventListener("click", (e) => {
         // Prevent the form from reloading the page
         e.preventDefault();

         // Get the amount entered by the user
         let amount = document.getElementById("amount").value;

         // Fetch the latest exchange rates for USD
         fetch("https://open.er-api.com/v6/latest/USD")
             .then((response) => response.json()) // Convert response to JSON
             .then((data) => {
                 // Show the amount in dollars
                 document.getElementById("dollar").innerText = `USD: $${amount}`;

                 // Multiply the amount by the current USD to NGN rate
                 let nairaAmount = data.rates.NGN * amount;

                 // Show the amount in Naira, rounded to 2 decimal places
                 document.getElementById("naira").innerText = `NGN: ₦${nairaAmount.toFixed(2)}`;
             })
             .catch((error) => {
                 // In case something goes wrong
                 console.error("Error fetching data:", error);
                 document.getElementById("naira").innerText = "Could not fetch exchange rate.";
             });
     });