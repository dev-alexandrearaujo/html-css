// Opcional: Recupere os valores da tabela e faça algo com eles
function getTableValues() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var inputs = row.getElementsByTagName("input");

        for (var j = 0; j < inputs.length; j++) {
            var input = inputs[j];
            var value = input.value;

            console.log("Valor da célula " + (j + 1) + " na linha " + (i + 1) + ": " + value);
        }
    }
}
