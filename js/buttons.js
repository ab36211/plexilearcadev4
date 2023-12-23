    function goBack() {
            // Replace 'your_back_link' with the actual link you want to navigate to
            window.location.href = '/games.html';
        }

        function goFullscreen() {
            const elem = document.documentElement;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }

        function reportIssue() {
            // Replace 'your_report_issue_link' with the actual link you want to navigate to
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeAG4DdniQHu7zMbMMRCjB10UyYKC0zdn-vFtO91IMPGvsiqQ/viewform';
        }