const div= document.getElementById("users")

 
async function getData(url){
    const response = await fetch(url);
    let cryptos = await response.json();
    console.log(cryptos);
    const finalView= cryptos.map((crypto)=>(`<p>${crypto.name} - ${crypto.current_price} usd</p>`))
    updateDOM(finalView.join(""))
    }


const button = document.getElementById("button")


button.addEventListener("click",()=>{
    getData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
})

function updateDOM (view){
div.innerHTML = view
}


// setInterval(()=>{
//     getData("https://jsonplaceholder.typicode.com/users")
// },5000)