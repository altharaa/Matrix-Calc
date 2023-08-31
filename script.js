const matrixA = [
    [document.getElementById("matrixA00"), document.getElementById("matrixA01"), document.getElementById("matrixA02")],
    [document.getElementById("matrixA10"), document.getElementById("matrixA11"), document.getElementById("matrixA12")],
    [document.getElementById("matrixA20"), document.getElementById("matrixA21"), document.getElementById("matrixA22")]
  ];
  
  const matrixB = [
    [document.getElementById("matrixB00"), document.getElementById("matrixB01"), document.getElementById("matrixB02")],
    [document.getElementById("matrixB10"), document.getElementById("matrixB11"), document.getElementById("matrixB12")],
    [document.getElementById("matrixB20"), document.getElementById("matrixB21"), document.getElementById("matrixB22")]
  ];
  
  const resultMatrix = [
    [document.getElementById("result00"), document.getElementById("result01"), document.getElementById("result02")],
    [document.getElementById("result10"), document.getElementById("result11"), document.getElementById("result12")],
    [document.getElementById("result20"), document.getElementById("result21"), document.getElementById("result22")]
  ];
  
  function addMatrices() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const sum = parseFloat(matrixA[i][j].value) + parseFloat(matrixB[i][j].value);
        resultMatrix[i][j].value = sum;
      }
    }
  }
  
  function subtractMatrices() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const difference = parseFloat(matrixA[i][j].value) - parseFloat(matrixB[i][j].value);
        resultMatrix[i][j].value = difference;
      }
    }
  }
  
  function resetMatrices() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        matrixA[i][j].value = "";
        matrixB[i][j].value = "";
        resultMatrix[i][j].value = "";
      }
    }
  }
  document.getElementById("addBtn").addEventListener("click", addMatrices);
  document.getElementById("subtractBtn").addEventListener("click", subtractMatrices);
  document.getElementById("resetBtn").addEventListener("click", resetMatrices);