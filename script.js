async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        const data = await response.json();
        return data.dailyQuotes;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return [];
    }
}

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    fetchQuotes()
        .then(quotes => {
            const quote = getRandomQuote(quotes);
            document.getElementById('quote-text').textContent = `"${quote.quote}"`;
            document.getElementById('quote-author').textContent = `— ${quote.author}`;
        })
        .catch(error => console.error('Error fetching and displaying quotes:', error));
}

displayQuote();

setInterval(() => {
    displayQuote();
}, 60 * 1000);
setTimeout(() => {
    location.reload(true); 
}, 60 * 1000);
