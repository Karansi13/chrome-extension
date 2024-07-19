const getQuotes = async () => {
    try {
        // Generate a random number between 1 and 150
        const randomId = Math.floor(Math.random() * 150) + 1;
        const res = await fetch(`https://dummyjson.com/quotes/${randomId}`);
        const data = await res.json();
        const Sigma = document.querySelector("#Sigma");
        Sigma.innerHTML = data.quote;
    } catch (error) {
        alert("Error fetching quotes. Please try again later.");
    }
}

window.addEventListener("load", () => {
    getQuotes();
});
