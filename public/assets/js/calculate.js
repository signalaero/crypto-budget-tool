// Favorite Color One
const favCrypto = document.getElementById("favCrypto");
let favCryptoOptions = cryptoOptions;

for(let i = 0; i < favCryptoOptions.length; i++) {
let opt = favCryptoOptions[i];
const el = document.createElement("option");
el.textContent = opt;
el.value = opt;
favCrypto.appendChild(el);
}

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


    coins.forEach(coin => {
        let sym = document.createElement('p');
        sym.classList.add('coin-name');
        let price = document.createElement('p');
        price.classList.add('coin-price');

        sym.innerHTML = coin.symbol;
        price.innerHTML = '$' + coin.current_price;

        list.appendChild(sym);
        list.appendChild(price);
        

        // Use this data to create an array with symbols and current_price
        console.log(coin.symbol)
        console.log(coin.current_price)
    })

}