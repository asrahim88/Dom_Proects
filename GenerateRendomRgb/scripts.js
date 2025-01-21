const generateRgb = ()=> {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
};

document.getElementById("colorGenerator").addEventListener("click", () => {
    const color = generateRgb();
    document.getElementById("colorBox").style.backgroundColor = color;

    document.getElementById("colorCode").innerText = color;
});

document.getElementById("copyColor").addEventListener("click", () => {
    const colorCode = document.getElementById("colorCode");
    const inputTag = document.createElement("input");
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;
    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag);
    alert("copied color code successfully");
});