class Calculate
{
    calculation()
    {
        // Calculations
        var selectedAmount = amount.options[amount.selectedIndex].index;

        // Change 
        function changeFavCrypto(selectedAmount) { 
        document.getElementById("costOfFavCryptoDisplay").textContent = "Cost of Favorite Crypto = $" + (selectedAmount);
        }
    }


    storage()
    {
        // Local Storage of Calculations Based on Most Recent Submit
        const netPayPerMonthDisplay = document.getElementById("netPayPerMonthDisplay");
        netPayPerMonthDisplay.textContent = "Net Pay Per Month = $" + (netPayPerMonth);
    }
}

async function getCoins() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'`
    var test = []
    fetch(url)
        .then(res => res.json())
        .then(data => {
            coins = data.map(el => el);

            for (let i = 0; i < coins.length * .2; i++) {
                coins.pop();
            }
            
            displayCoins(coins).then(val => {
                amountResuls = val.map(m => m);
                console.log(amountResuls);
            })
        })
}

function displayCoins(coins) {
    const coinName = [];
    const amount = [];


    coins.forEach(coin => {

        coinName.push(coin.name)
        amount.push(coin.current_price)

    })

    const ticker = document.getElementById("favCrypto");
    const tickerTwo = document.getElementById("favCryptoTwo");

    for (i = 0; i < coinName.length; i++) {
    // console.log((i+1) + ": " + coinName[i]);
        let opt = coinName[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ticker.appendChild(el);
    }

    for (i = 0; i < coinName.length; i++) {
        // console.log((i+1) + ": " + coinName[i]);
        let opt = coinName[i];
        const el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        tickerTwo.appendChild(el);
    }


    return Promise.resolve(amount);
}