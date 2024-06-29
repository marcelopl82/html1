function generatenumber(){
    const Min=  Math.ceil(document.querySelector(".input-min").value )
    
    const Max=Math.floor(document.querySelector(".input-max").value);
    const result= Math.floor(Math.random() * (Max - Min + 1)) + Min;

    alert(result)
}