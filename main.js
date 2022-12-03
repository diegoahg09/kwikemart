const listVentas=async()=>{
    try {
        const response = await fetch("https://my-json-server.typicode.com/diegoahg09/ventas");
        const data = await response.json();
        console.log(data);
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await listVentas();
});


