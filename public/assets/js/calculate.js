getCoins();

function getCoins() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let coins = data.map(el => el);

            for (let i = 0; i < coins.length * .2; i++) {
                coins.pop();
            }

            displayCoins(coins);

        })
}

function displayCoins(coins) {
    const list = document.querySelector('.section2');
    const symbol = [];
    const amount = [];


    coins.forEach(coin => {

        symbol.push(coin.symbol)
        amount.push(coin.current_price)

    })

    const ticker = document.getElementById("favCrypto");
    const tickerTwo = document.getElementById("favCryptoTwo");

    for (i = 0; i < symbol.length; i++) {
        console.log((i+1) + ": " + symbol[i]);
        let opt = symbol[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ticker.appendChild(el);
    }

    for (i = 0; i < symbol.length; i++) {
        console.log((i+1) + ": " + symbol[i]);
        let opt = symbol[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        tickerTwo.appendChild(el);
    }

    for (i = 0; i < amount.length; i++) {
        console.log((i+1) + ": " + amount[i]);
    }

}