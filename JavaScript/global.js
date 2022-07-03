for (var key in nameArray) {
    var div = document.createElement("div");
    div.style.border = "1px solid #e0e0e0";
    div.style.padding = "10px";
    document.getElementById("area").appendChild(div);
    var h1 = document.createElement("h1");
    h1.innerHTML = nameArray[key];
    div.appendChild(h1);
    var p = document.createElement("p");
    p.innerHTML = descArray[key];
    div.appendChild(p);
    var a = document.createElement("a");
    a.href = linkArray[key];
    a.innerHTML = "Website";
    div.appendChild(a);
}
