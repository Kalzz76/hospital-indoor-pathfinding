import * as PF from "pathfinding";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cols = 122;
const rows = 219;
const cellSize = 7;

canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

// var matriks = [
//     [0,0,0,1,1,0,0,0],
//     [1,1,0,0,1,0,1,0],
//     [1,1,1,0,1,0,1,0],
//     [1,1,1,0,1,0,1,0],
//     [1,1,1,0,0,0,1,0],
//     [1,1,1,1,1,1,1,0],
//     [0,0,0,0,0,0,0,0]
// ];

const grid = new PF.Grid(cols, rows);
function tembok(){
    let a = 0;
    for(a = 58; a <= 67; a++ ){
        grid.setWalkableAt(a, 182, false);
    }
    for(a = 149; a <= 190; a++ ){
        grid.setWalkableAt(56, a, false);
    }
    // 1. Koordinat 76, 149 - 57, 149 (Horizontal)
    for(a = 57; a <= 76; a++) {
        grid.setWalkableAt(a, 149, false);
    }

    // 2. Koordinat 76, 150 - 57, 150 (Horizontal)
    for(a = 57; a <= 76; a++) {
        grid.setWalkableAt(a, 150, false);
    }

    // 3. Koordinat 55, 190 - 17, 190 (Horizontal)
    for(a = 17; a <= 55; a++) {
        grid.setWalkableAt(a, 190, false);
    }

    // 4. Koordinat 16, 190 - 16, 28 (Vertikal)
    for(a = 28; a <= 190; a++) {
        grid.setWalkableAt(16, a, false);
    }

    // 5. Koordinat 17, 28 - 37, 28 (Horizontal)
    for(a = 17; a <= 37; a++) {
        grid.setWalkableAt(a, 28, false);
    }

    // 6. 36,29 - 36,57 (Vertikal)
    for(a = 29; a <= 57; a++) { grid.setWalkableAt(36, a, false); }

    // 7. 37,28 - 37,52 (Vertikal)
    for(a = 28; a <= 52; a++) { grid.setWalkableAt(37, a, false); }

    // 8. 38,30 - 68,30 (Horizontal)
    for(a = 38; a <= 68; a++) { grid.setWalkableAt(a, 30, false); }

    // 9. 68,31 - 68,75 (Vertikal)
    for(a = 31; a <= 75; a++) { grid.setWalkableAt(68, a, false); }

    // 10. 67,41 - 67,75 (Vertikal)
    for(a = 41; a <= 75; a++) { grid.setWalkableAt(67, a, false); }

    // 11. 44,40 - 119,40 (Horizontal)
    for(a = 44; a <= 119; a++) { grid.setWalkableAt(a, 40, false); }

    // 12. 68,76 - 55,76 (Horizontal)
    for(a = 55; a <= 68; a++) { grid.setWalkableAt(a, 76, false); }

    // 13. 68,77 - 55,77 (Horizontal)
    for(a = 55; a <= 68; a++) { grid.setWalkableAt(a, 77, false); }

    // 14. 55,75 - 55,71 (Vertikal)
    for(a = 71; a <= 75; a++) { grid.setWalkableAt(55, a, false); }

    // 15. 58,71 - 62,71 (Horizontal)
    for(a = 58; a <= 62; a++) { grid.setWalkableAt(a, 71, false); }

    // 16. 62,70 - 62,41 (Vertikal)
    for(a = 41; a <= 70; a++) { grid.setWalkableAt(62, a, false); }

    // 17. 69,48 - 104,48 (Horizontal)
    for(a = 69; a <= 104; a++) { grid.setWalkableAt(a, 48, false); }

    // 18. 69,49 - 106,49 (Horizontal)
    for(a = 69; a <= 106; a++) { grid.setWalkableAt(a, 49, false); }

    // 19. 105,49 - 105,149 (Vertikal)
    for(a = 49; a <= 149; a++) { grid.setWalkableAt(105, a, false); }

    // 20. 106,49 - 106,149 (Vertikal)
    for(a = 49; a <= 149; a++) { grid.setWalkableAt(106, a, false); }

    // 21 & 22. 104,76 s/d 75,77 (Horizontal & Vertikal Range)
    for(a = 75; a <= 104; a++) { grid.setWalkableAt(a, 76, false); }
    for(a = 75; a <= 104; a++) { grid.setWalkableAt(a, 77, false); }

    // 23. 77,78 - 77,86 (Vertikal)
    for(a = 78; a <= 86; a++) { grid.setWalkableAt(77, a, false); }

    // 24. 104,93 - 77,93 (Horizontal)
    for(a = 77; a <= 104; a++) { grid.setWalkableAt(a, 93, false); }

    // 25. 77,49 - 77,113 (Vertikal)
    for(a = 49; a <= 113; a++) { grid.setWalkableAt(77, a, false); }

    // 26. 104,121 - 61,121 (Horizontal)
    for(a = 61; a <= 104; a++) { grid.setWalkableAt(a, 121, false); }

    // 27. 97,122 - 97,142 (Vertikal)
    for(a = 122; a <= 142; a++) { grid.setWalkableAt(97, a, false); }

    // 28. 106,150 - 90,150 (Horizontal)
    for(a = 90; a <= 106; a++) { grid.setWalkableAt(a, 150, false); }

    // 29. 98,149 - 89,149 (Horizontal)
    for(a = 89; a <= 98; a++) { grid.setWalkableAt(a, 149, false); }

    // 30. 89,149 - 89,181 (Vertikal)
    for(a = 149; a <= 181; a++) { grid.setWalkableAt(89, a, false); }

    // 31. 89,182 - 79,182 (Horizontal)
    for(a = 79; a <= 89; a++) { grid.setWalkableAt(a, 182, false); }

    // 32. 79,181 - 79,174 (Vertikal)
    for(a = 174; a <= 181; a++) { grid.setWalkableAt(79, a, false); }

    // 33. 67,180 - 67,145 (Vertikal)
    for(a = 145; a <= 180; a++) { grid.setWalkableAt(67, a, false); }

    // 34. 45,76 - 45,113 (Vertikal)
    for(a = 76; a <= 113; a++) {
        grid.setWalkableAt(45, a, false);
    }

    // 35. 44,76 - 44,113 (Vertikal)
    for(a = 76; a <= 113; a++) {
        grid.setWalkableAt(44, a, false);
    }

    // 36. 43,92 - 17,92 (Horizontal)
    for(a = 17; a <= 43; a++) {
        grid.setWalkableAt(a, 92, false);
    }

    // 37. 43,93 - 17,93 (Horizontal)
    for(a = 17; a <= 43; a++) {
        grid.setWalkableAt(a, 93, false);
    }

    // 38. 37,77 - 17,77 (Horizontal)
    for(a = 17; a <= 37; a++) {
        grid.setWalkableAt(a, 77, false);
    }

    // 39. 37,76 - 17,76 (Horizontal)
    for(a = 17; a <= 37; a++) {
        grid.setWalkableAt(a, 76, false);
    }

    // 40. 37,75 - 37,64 (Vertikal)
    for(a = 64; a <= 75; a++) {
        grid.setWalkableAt(37, a, false);
    }

    // 41. 36,75 - 36,64 (Vertikal)
    for(a = 64; a <= 75; a++) {
        grid.setWalkableAt(36, a, false);
    }

    // 42. 35,65 - 24,65 (Horizontal)
    for(a = 24; a <= 35; a++) {
        grid.setWalkableAt(a, 65, false);
    }

    // 43. 35,64 - 24,64 (Horizontal)
    for(a = 24; a <= 35; a++) {
        grid.setWalkableAt(a, 64, false);
    }

    // 44. 77,86 - 77,91 (Membuka Jalur / Set True)
    for(a = 86; a <= 91; a++) {
        grid.setWalkableAt(77, a, true);
    }

    // 45. 36,83 - 36,92 (Vertikal)
    for(a = 83; a <= 92; a++) {
        grid.setWalkableAt(36, a, false);
    }

    // 46. 37,83 - 37,92 (Vertikal)
    for(a = 83; a <= 92; a++) {
        grid.setWalkableAt(37, a, false);
    }

    // 47. 36,150 - 36,121 (Vertikal)
    for(a = 121; a <= 150; a++) {
        grid.setWalkableAt(36, a, false);
    }

    // 48. 37,121 - 37,150 (Vertikal)
    for(a = 121; a <= 150; a++) {
        grid.setWalkableAt(37, a, false);
    }

    // 49. 23,121 - 45,121 (Horizontal)
    for(a = 23; a <= 45; a++) {
        grid.setWalkableAt(a, 121, false);
    }

    // 50. 17,149 - 30,149 (Horizontal)
    for(a = 17; a <= 30; a++) {
        grid.setWalkableAt(a, 149, false);
    }

    // 51. 17,150 - 30,150 (Horizontal)
    for(a = 17; a <= 30; a++) {
        grid.setWalkableAt(a, 150, false);
    }

    // 52. 36,149 - 49,149 (Horizontal)
    for(a = 36; a <= 49; a++) {
        grid.setWalkableAt(a, 149, false);
    }

    // 53. 36,150 - 49,150 (Horizontal)
    for(a = 36; a <= 49; a++) {
        grid.setWalkableAt(a, 150, false);
    }

    // 54. 17,134 - 35,134 (Horizontal)
    for(a = 17; a <= 35; a++) {
        grid.setWalkableAt(a, 134, false);
    }

    // 55. 17,135 - 35,135 (Horizontal)
    for(a = 17; a <= 35; a++) {
        grid.setWalkableAt(a, 135, false);
    }
}
tembok();

const finder = new PF.AStarFinder({
    allowDiagonal: false
});

var path = finder.findPath(73, 190, 83, 104
    , grid);

// gambar grid
// function drawGrid() {
//     for(let x=0; x<cols; x++){
//         for(let y=0; y<rows; y++){

//             ctx.strokeStyle = "#ccc";
//             ctx.strokeRect(
//                 x*cellSize,
//                 y*cellSize,
//                 cellSize,
//                 cellSize
//             );
//         }
//     }
// }

// gambar path
function drawPath(){
    ctx.fillStyle = "purple";
    for(let i=0; i<path.length; i++){
        let [x,y] = path[i];
        ctx.fillRect(
            x*cellSize,
            y*cellSize,
            cellSize,
            cellSize
        );
    }
}

canvas.addEventListener("mousedown", function(e) {
    // 1. Dapatkan posisi klik relatif terhadap canvas
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 2. Konversi posisi pixel ke indeks grid (matriks)
    // Kita gunakan Math.floor agar nilainya bulat ke bawah
    const gridX = Math.floor(mouseX / cellSize);
    const gridY = Math.floor(mouseY / cellSize);

    // 3. Pastikan klik berada di dalam jangkauan grid
    if (gridX >= 0 && gridX < cols && gridY >= 0 && gridY < rows) {
        console.log(`Koordinat Matriks: ${gridX}, ${gridY}`);
        
        // Opsional: Tampilkan di UI atau alert
            alert(`Koordinat: ${gridX}, ${gridY}`);
    }
});

// drawGrid();
drawPath();