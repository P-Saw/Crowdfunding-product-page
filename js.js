const pledges = document.querySelectorAll('.pledge');
// MENU HAMBURGER TOGGLE//

const hamburgerBtn = document.querySelector('.menu-hamburger');
const navbar = document.querySelector('.nav');

hamburgerBtn.addEventListener('click', () =>{
        hamburgerBtn.classList.toggle('open');
        navbar.classList.toggle('nav-open')
});

// Close Modal
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-selection');

closeBtn.addEventListener('click', () =>{
        modal.classList.toggle('hide');
        pledges.forEach(pledge =>{
                const pledgeInput = pledge.querySelector('.pledge-input');
                pledge.classList.remove('selected-pledge');
                pledgeInput.checked = false;
        })
});

// BOOKMARK
const bookmarkBtn = document.querySelector('.btn-bookmark');

bookmarkBtn.addEventListener('click', () =>{
        bookmarkBtn.classList.toggle('checked');
});

// SHOW MODAL BY BACK THIS PROJECT
const backThisProjectBtn = document.querySelector('.back-this-project-btn');
backThisProjectBtn.addEventListener('click', () =>{
        modal.classList.toggle('hide');
})


pledges.forEach(pledge =>{
        const pledgeInput = pledge.querySelector('.pledge-input');
        const pledgeButton = pledge.querySelector('.pledge-button');

        // SHOW BORDER IN SELECTED PLEDGE
        pledgeInput.addEventListener('click', () =>{
                pledges.forEach(container =>{
                        container !== pledge ? container.classList.remove("selected-pledge") : pledge.classList.add("selected-pledge");
                });
        });

        //asdasdasdasdasd
        const offersOnPage = document.querySelectorAll('.about-offer-desktop');

        offersOnPage.forEach(offer => {
                const offerSelect = offer.querySelector('.btn');
                const offerP = offer.querySelector('.about-offer-desktop p')

                offerSelect.addEventListener('click', () =>{
                        modal.classList.remove('hide');
                        if(pledge.classList.contains(offerP.className)){
                                pledge.classList.add('selected-pledge');
                                pledgeInput.checked = true;
                        }
                });
        });

        const successModal = document.querySelector('.success');
        pledgeButton.addEventListener('click', () =>{
                modal.classList.add('hide')
                successModal.classList.remove('hide');
                pledge.classList.remove('selected-pledge');
                pledgeInput.checked = false;
        });

        const successButton = document.querySelector('.success-btn');
        successButton.addEventListener('click', () =>{
                successModal.classList.add('hide');
        });
});
