        function search() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const boxes = document.querySelectorAll('.box');

            boxes.forEach(box => {
                const boxText = box.querySelector('.box-text').innerText.toLowerCase();
                if (boxText.includes(searchInput)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        }