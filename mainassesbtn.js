btnicnmain1.addEventListener('click', () => {
    document.getElementById('spcrmnfrl').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('spcrmnfrl').style.opacity = '100'
        setTimeout(() => {
            setTimeout(() => {
                document.getElementById('calculator').style.display = 'none'
                document.getElementById('gradesystm').style.display = 'flex'
                document.getElementById('spcrmnfrl').style.opacity = '0'
                document.getElementById('spcrmnfrl').style.display = 'none'
            }, 170);
        }, 50);
    }, 70);
})
btnicnmain.addEventListener('click', () => {
    document.getElementById('spcrmnfrl').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('spcrmnfrl').style.opacity = '100'
        setTimeout(() => {
            setTimeout(() => {
                document.getElementById('calculator').style.display = 'flex'
                document.getElementById('gradesystm').style.display = 'none'
                document.getElementById('spcrmnfrl').style.opacity = '0'
                document.getElementById('spcrmnfrl').style.display = 'none'
            }, 170);
        }, 50);
    }, 70);
})