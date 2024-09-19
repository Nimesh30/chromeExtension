const getjokes = async ()=>{
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json(); 
        const quotes = document.querySelector("#quotes");
    quotes.innerHTML = data.value;
    
} catch (error) {
   
}
};

window.addEventListener("load",()=>{
    getjokes();
})