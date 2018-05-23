function delRow(rowNum) {
    row = document.getElementById("r" + rowNum);
    row.innerHTML = "";
}

var previousText;
function changeText(b) {
    previousText = b.innerHTML;
    b.innerHTML = "Удалить"; 
}

function unDo(b)
{
    b.innerHTML = previousText;
}