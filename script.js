let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

function init(){
    render();
}

function render(){
    const content = document.getElementById('content');
    let tablehtml = '<table>';
    for (let i = 0; i < 3; i++){
        tablehtml += '<tr>';
    for (let j = 0; j < 3; j++){
        const index = i * 3 + j;
        let symbol = '';
        if(fields[index] === 'circle'){
            symbol = generateAnimatedCircle();
        }else if(fields[index] === 'cross'){
            symbol = generateAnimatedX();
        }
        tablehtml += `<td onclick="handleClick(this, ${index})">${symbol}</td>`;  
    }   
    tablehtml += '<tr>';
     
    
}
    tablehtml += '<table>';
    content.innerHTML += tablehtml;
    
} 



function generateAnimatedCircle( ) {
    const svgHTML = `
    <svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="#00B0EF" stroke-width="10" class="animated-circle"/>
    </svg>
    `;
    return svgHTML;
}

function generateAnimatedX() {
    const svgHTML = /*html*/ `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <line class="line" x1="10" y1="10" x2="90" y2="90" stroke="#FFC000" stroke-width="10" />
            <line class="line" x1="90" y1="10" x2="10" y2="90" stroke="#FFC000" stroke-width="10" />
        </svg>
    `;
    return svgHTML;
}

function handleClick(cell, index) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'circle' ? generateAnimatedCircle() : generateAnimatedX();
        cell.onclick = null;
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    }
}




