const changeColorBtn = document.getElementById('color-changer-btn');
        const body = document.body;
        const container = document.querySelector('.container');

        function getRandomHexColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        }

        changeColorBtn.addEventListener('click', () => {
            const randomBgColor = getRandomHexColor();
            const randomTextColor = getRandomHexColor();
            const randomCardColor = getRandomHexColor();
            
            body.style.setProperty('--background-color', randomBgColor);
            container.style.setProperty('--text-color', randomTextColor);
            container.style.setProperty('--card-background', randomCardColor);
            
            body.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
        });