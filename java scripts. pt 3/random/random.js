function generatenumber() {
    const Min = Math.ceil(document.querySelector(".input-min").value)

    const Max = Math.floor(document.querySelector(".input-max").value);

    if (Min >= Max) {
        alert("o valor MINIMO tem que ser MENOR que o MÁXIMO")

    } else {



        const result = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    




    alert(result)}
}
