
var mode = 'deg' // or 'radians'

document.getElementById('columns33').addEventListener('click', () => {
    if (document.getElementById('columns33').innerText === 'deg') {
        mode = "rad"
        document.getElementById('columns33').innerText = 'rad'
        console.log(mode)
        return
    }
    if (document.getElementById('columns33').innerText === 'rad') {
        mode = "deg"
        document.getElementById('columns33').innerText = 'deg'
        console.log(mode)
        return
    }
});

function addHistoryEntry(parentId, equation, answer) {
    // Get the parent div
    const parentDiv = document.getElementById(parentId);
    var maineq = equation

    // Create new elements
    const entryDiv = document.createElement('div');
    entryDiv.id = 'hstryequtnsmain';

    const equationDiv = document.createElement('div');
    equationDiv.id = 'topequtn';
    maineq = maineq.replace('<span style="font-size: 6vh;">2</span>', '<p><sup>2</sup></p>');
    maineq = maineq.replace('<span style="font-size: 6vh;">3</span>', '<p><sup>3</sup></p>');
    maineq = maineq.replace('<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="40px" height="22%" viewBox="0 0 256 256"><path fill="#969696" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>', '<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="25px" height="100%" viewBox="0 0 256 256"><path fill="#969696" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>');
    equationDiv.innerHTML = maineq
    console.log(maineq)

    const answerDiv = document.createElement('div');
    answerDiv.id = 'anstoeq';
    answerDiv.innerHTML = answer;

    // Append children to the entry div
    entryDiv.appendChild(equationDiv);
    entryDiv.appendChild(answerDiv);

    // Append the entry div to the parent div
    parentDiv.appendChild(entryDiv);
}


function handleButtonClick(event) {
    const content = event.currentTarget.innerHTML;
    const outputDiv = document.getElementById('topequtnclans');
    if (content === "AC") {
        document.getElementById('topequtnclans').innerText = ''
        return
    } else if (content === "deg" || content === "rad") {
        return
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.2vw" height="2.2vw" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M13.5 11a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5zm0-4.5a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></path></svg>') {
        
        var mainarr = document.getElementById('topequtnclans').innerHTML;
        var equtnarc = document.getElementById('topequtnclans').innerHTML;
        console.log(mainarr);

        function factorial(n) {
            if (n === 0) return 1;
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        function summation(n) {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
        }
        if (mainarr.includes('<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="12vh" height="85%" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>')) {
            mainarr = mainarr.replace('<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="12vh" height="85%" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>', 'Σ');
        }
        function degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        }

        function parseExpression(expression) {
            expression = expression.replace(/(\d+)!/g, (match, p1) => `factorial(${p1})`);

            expression = expression.replace(/Σ(\d+)/g, (match, p1) => `summation(${p1})`);

            if (mode === 'deg') {
                expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(degreesToRadians(${p1}))`);
                expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(degreesToRadians(${p1}))`);
                expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(degreesToRadians(${p1}))`);
                expression = expression.replace(/sinh\(([^)]+)\)/g, (match, p1) => `Math.sinh(degreesToRadians(${p1}))`);
                expression = expression.replace(/cosh\(([^)]+)\)/g, (match, p1) => `Math.cosh(degreesToRadians(${p1}))`);
                expression = expression.replace(/tanh\(([^)]+)\)/g, (match, p1) => `Math.tanh(degreesToRadians(${p1}))`);
            } else {
                expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1})`);
                expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1})`);
                expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1})`);
                expression = expression.replace(/sinh\(([^)]+)\)/g, (match, p1) => `Math.sinh(${p1})`);
                expression = expression.replace(/cosh\(([^)]+)\)/g, (match, p1) => `Math.cosh(${p1})`);
                expression = expression.replace(/tanh\(([^)]+)\)/g, (match, p1) => `Math.tanh(${p1})`);
            }

            // Replace logarithmic functions
            expression = expression.replace(/log10\(([^)]+)\)/g, (match, p1) => `Math.log10(${p1})`);
            expression = expression.replace(/log2\(([^)]+)\)/g, (match, p1) => `Math.log2(${p1})`);
            expression = expression.replace(/ln\(([^)]+)\)/g, (match, p1) => `Math.log(${p1})`);
            expression = expression.replace(/√(\d+)/g, (match, p1) => `Math.sqrt(${p1})`);
            expression = expression.replace(/√\(([^)]+)\)/g, (match, p1) => `Math.sqrt(${p1})`);

            return expression;

        }

        mainarr = mainarr.replace(/<span style="font-size: 6vh;">2<\/span>/g, '**2');
        mainarr = mainarr.replace(/<span style="font-size: 6vh;">3<\/span>/g, '**3');
        mainarr = mainarr.replace('%', '/100');
        mainarr = mainarr.replace(/×/g, '*');
        mainarr = mainarr.replace(/÷/g, '/');
        mainarr = mainarr.replace(/\^/g, '**');
        console.log(mainarr);

        let parsedInput = parseExpression(mainarr);
        console.log(mainarr)
        console.log(parsedInput)
        let result;
        try {
            result = eval(parsedInput);
            if (typeof result === 'number' && !Number.isInteger(result)) {
                result = result.toFixed(3);
            }
        } catch (error) {
            result = 'Error';
        }

        equtnarc = equtnarc.replace('<span style="font-size: 6vh;">2</span>', '<p><sup>2</sup></p>');
        equtnarc = equtnarc.replace('<span style="font-size: 6vh;">3</span>', '<p><sup>3</sup></p>');
        equtnarc = equtnarc.replace('<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="12vh" height="85%" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>', '<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="40px" height="22%" viewBox="0 0 256 256"><path fill="#969696" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>');
        document.getElementById('topequtnclclt').innerHTML = equtnarc;
        document.getElementById('topequtnclans').innerHTML = result;
        console.log(result)
        console.log(` this is mode: ${mode}`)
        addHistoryEntry('mainhstrycntnts', equtnarc, result);

        return;



        // sigma
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>' ? '<svg style="margin-left: -5px;margin-right: -5px;" xmlns="http://www.w3.org/2000/svg" width="12vh" height="85%" viewBox="0 0 256 256"><path fill="white" d="M184 72V56H80.65l53.6 67a8 8 0 0 1 0 10l-53.6 67H184v-16a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8H64a8 8 0 0 1-6.25-13l60-75l-60-75A8 8 0 0 1 64 40h128a8 8 0 0 1 8 8v24a8 8 0 0 1-16 0"></path></svg>' : content;
        outputDiv.innerHTML += modifiedContent;
        // add
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.1vw" height="2.1vw" viewBox="0 0 15 15"><path fill="white" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.1vw" height="2.1vw" viewBox="0 0 15 15"><path fill="white" d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5z"></path></svg>' ? '+' : content;
        outputDiv.innerHTML += modifiedContent;
        // subtract
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 16 16"><path fill="white" d="M3 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 16 16"><path fill="white" d="M3 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8"></path></svg>' ? '-' : content;
        outputDiv.innerHTML += modifiedContent;
        // multiply
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 23 22"><path fill="white" d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18"></path><path fill="white" d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 23 22"><path fill="white" d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18"></path><path fill="white" d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"></path></svg>' ? '×' : content;
        outputDiv.innerHTML += modifiedContent;
        // divide
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><path fill="white" d="M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><path fill="white" d="M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4"></path></svg>' ? '÷' : content;
        outputDiv.innerHTML += modifiedContent;
        // percentage
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><path fill="white" d="M7.758 10.758a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m8.484 6.484a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><path fill="white" d="M7.758 10.758a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m8.484 6.484a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414"></path></svg>' ? '%' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'x!') {
        const modifiedContent = content === 'x!' ? '!' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<p>X<sup>2</sup></p>') {
        const modifiedContent = content === '<p>X<sup>2</sup></p>' ? '<span style="font-size: 6vh;">2</span>' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<p>X<sup>3</sup></p>') {
        const modifiedContent = content === '<p>X<sup>3</sup></p>' ? '<span style="font-size: 6vh;">3</span>' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<p>X<sup>y</sup></p>') {
        const modifiedContent = content === '<p>X<sup>y</sup></p>' ? '^' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 16 16"><path fill="white" d="M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415M11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2z"></path></svg>') {
        return;
    }  else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 21"><path fill="white" d="M11 7.998H8v3a1 1 0 0 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2m10 10h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2M17.793 4.707L4.707 17.793a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L19.293 6.207a1 1 0 0 0 0-1.414l-.086-.086a1 1 0 0 0-1.414 0"></path></svg>') {
        return;
    } else if (content === 'ln') {
        const modifiedContent = content === 'ln' ? 'ln(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'log10') {
        const modifiedContent = content === 'log10' ? 'log10(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'log2') {
        const modifiedContent = content === 'log2' ? 'log2(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'sin') {
        const modifiedContent = content === 'sin' ? 'sin(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'cos') {
        const modifiedContent = content === 'cos' ? 'cos(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'tan') {
        const modifiedContent = content === 'tan' ? 'tan(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'tanh') {
        const modifiedContent = content === 'tanh' ? 'tanh(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'sinh') {
        const modifiedContent = content === 'sinh' ? 'sinh(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === 'cosh') {
        const modifiedContent = content === 'cosh' ? 'cosh(' : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.2vw" height="2.2vw" viewBox="0 0 32 32"><path fill="white" d="m19.313 6l-.25.656l-6.157 16.063l-3-6.157L9.625 16H6v2h2.375L12 25.438l.281.562h1.5l.25-.656L20.687 8H26V6z"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.2vw" height="2.2vw" viewBox="0 0 32 32"><path fill="white" d="m19.313 6l-.25.656l-6.157 16.063l-3-6.157L9.625 16H6v2h2.375L12 25.438l.281.562h1.5l.25-.656L20.687 8H26V6z"></path></svg>' ? '√' : content;
        outputDiv.innerHTML += modifiedContent;
    }
    else if (content === 'Rand') {
        const modifiedContent = content === 'Rand' ? Math.random().toFixed(2) : content;
        outputDiv.innerHTML += modifiedContent;
    } else if (content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.2vw" height="2.2vw" viewBox="0 0 24 24"><path fill="white" d="M2 7a3 3 0 0 1 3-3h15.25a1 1 0 1 1 0 2H17v10.703a1.5 1.5 0 0 0 2.005 1.412l.159-.057a1 1 0 1 1 .672 1.884l-.159.057c-2.28.814-4.677-.876-4.677-3.296V6H9.979a68 68 0 0 1-.36 4.21c-.316 2.683-.89 6.142-1.924 9.118a1 1 0 1 1-1.89-.656c.965-2.774 1.518-6.065 1.827-8.695A66 66 0 0 0 7.976 6H5a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0z"></path></svg>') {
        const modifiedContent = content === '<svg xmlns="http://www.w3.org/2000/svg" width="2.2vw" height="2.2vw" viewBox="0 0 24 24"><path fill="white" d="M2 7a3 3 0 0 1 3-3h15.25a1 1 0 1 1 0 2H17v10.703a1.5 1.5 0 0 0 2.005 1.412l.159-.057a1 1 0 1 1 .672 1.884l-.159.057c-2.28.814-4.677-.876-4.677-3.296V6H9.979a68 68 0 0 1-.36 4.21c-.316 2.683-.89 6.142-1.924 9.118a1 1 0 1 1-1.89-.656c.965-2.774 1.518-6.065 1.827-8.695A66 66 0 0 0 7.976 6H5a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0z"></path></svg>' ? '3.1415' : content;
        outputDiv.innerHTML += modifiedContent;
    }
    else {
        outputDiv.innerHTML += content;
    }
}

// Add click event listeners to all buttons with class 'color'
const buttons = document.querySelectorAll('.color');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function copy_data(containerid) {
    var range = document.createRange();
    range.selectNode(containerid); //changed here
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("data copied");
  }

document.getElementById('columns35').addEventListener('click', () => {
    const container = document.getElementById('topequtnclans');
    copy_data(container)
});
document.getElementById('columns6').addEventListener('click', () => {
    const container = document.getElementById('topequtnclans');
    let content = container.innerHTML;

    // Check if the content starts with a "-"
    if (content.startsWith('-')) {
        // Remove the "-" from the start of the content
        content = content.substring(1);
    } else {
        // Otherwise, prepend "-" to the content
        content = '-' + content;
    }

    // Update the container's innerHTML
    container.innerHTML = content;
});
