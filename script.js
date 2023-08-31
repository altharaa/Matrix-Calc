document.addEventListener("DOMContentLoaded", function () {
    const matrixSize = 3; 
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");

    function createMatrixInput(tableId) {
        const table = document.getElementById(tableId);
        table.innerHTML = '';

        for (let i = 0; i < matrixSize; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < matrixSize; j++) {
                const cell = document.createElement("td");
                const input = document.createElement("input");
                input.type = "number";
                input.id = `${tableId}${i}${j}`;
                cell.appendChild(input);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }

    createMatrixInput("matrixA");
    createMatrixInput("matrixB");

    addBtn.addEventListener("click", performOperation("add"));
    subtractBtn.addEventListener("click", performOperation("subtract"));

    document.getElementById("resetBtn").addEventListener("click", function () {
        createMatrixInput("matrixA");
        createMatrixInput("matrixB");
        document.getElementById("resultMatrix").innerHTML = '';
    });

    function performOperation(operation) {
        return function() {
            const resultMatrix = [];
            for (let i = 0; i < matrixSize; i++) {
                resultMatrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                    const a = parseFloat(document.getElementById(`matrixA${i}${j}`).value);
                    const b = parseFloat(document.getElementById(`matrixB${i}${j}`).value);
                    let result = 0;
                    if (operation === "add") {
                        result = a + b;
                    } else if (operation === "subtract") {
                        result = a - b;
                    }
                    resultMatrix[i].push(result);
                }
            }
            displayResultMatrix(resultMatrix);
        };
    }

    function displayResultMatrix(resultMatrix) {
        const table = document.getElementById("resultMatrix");
        table.innerHTML = '';

        for (let i = 0; i < matrixSize; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < matrixSize; j++) {
                const cell = document.createElement("td");
                cell.textContent = resultMatrix[i][j];
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
});
