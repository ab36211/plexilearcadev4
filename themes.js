 function redirectToMobile() {
            
            const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
                window.location.href = 'mobile.html';
            }
        }
        
        window.onload = redirectToMobile;