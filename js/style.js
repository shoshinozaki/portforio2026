document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        const modalContents = modal.querySelector('.modal_contents');
        const imgPc = modal.querySelector('.modal_contents--imagepc');
        const imgSp = modal.querySelector('.modal_contents--imagesp');
        const btnPcInner = modal.querySelector('.modal_contents--change.pc');
        const btnSpInner = modal.querySelector('.modal_contents--change.sp');

        modal.addEventListener('click', () => {
            modal.classList.remove('on');
        });

        modalContents?.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        btnPcInner?.addEventListener('click', () => {
            btnPcInner.classList.add('on');
            btnSpInner?.classList.remove('on');
            imgPc?.classList.add('on');
            imgSp?.classList.remove('on');
        });

        btnSpInner?.addEventListener('click', () => {
            btnSpInner.classList.add('on');
            btnPcInner?.classList.remove('on');
            imgSp?.classList.add('on');
            imgPc?.classList.remove('on');
        });
    });

    const webButtons = document.querySelectorAll('[id^="web"]');
    webButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.id.replace('web', 'modal_web');
            const targetModal = document.getElementById(targetId);
            if (targetModal) targetModal.classList.add('on');
        });
    });

    const bannerButtons = document.querySelectorAll('[id^="banner"]');
    bannerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.id.replace('banner', 'modal_banner');
            const targetModal = document.getElementById(targetId);
            if (targetModal) targetModal.classList.add('on');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const portforioWeb = document.getElementById('web');
    const portforioBanner = document.getElementById('banner');

    const portforioWebContents = document.querySelector('.contents_portforio--web');
    const portforioBannerContents = document.querySelector('.contents_portforio--banner');

    portforioWeb.addEventListener('click', function(){
        portforioWeb.classList.add('on');
        portforioBanner.classList.remove('on');
       
        portforioWebContents.classList.add('on');
        portforioBannerContents.classList.remove('on');
    });

    portforioBanner.addEventListener('click', function(){
        portforioWeb.classList.remove('on');
        portforioBanner.classList.add('on');
       
        portforioWebContents.classList.remove('on');
        portforioBannerContents.classList.add('on');
    });
});