
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');


    function hideAllTabContent() {

        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });    

        tabs.forEach(tab =>{
            tab.classList.remove('tabheader__item_active');        
        });

    }      

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideAllTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {

        event.preventDefault();

        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach( (tab, i) => {
                if (tab == target) {
                    hideAllTabContent();
                    showTabContent(i);
                }
            });
        }

    });

});