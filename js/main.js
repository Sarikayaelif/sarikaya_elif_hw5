
/* hamburger menü start */
        let menubutton = document.querySelector('#menubutton');
        let menu = document.querySelector('#navCon');

        function showMenu() {
            menu.classList.toggle('slideToggle');
        }

        menubutton.addEventListener('click', showMenu, true);
        /* bu kod bloğunu main.js içine koydugumda addEventListener hata veriyor.*/
        /* hamburger menu end */



        /* bottle start */
        let bottlebutton1 = document.querySelector('#BottleButton1');
        let bottlebutton2 = document.querySelector('#BottleButton2');
        let bottleinfo1 = document.querySelector('#BottleInfo1');
        let bottleinfo2 = document.querySelector('#BottleInfo2');
        let bottleimg = document.querySelector('#bottleImg');


        function showInfo1() {
            bottleinfo1.classList.toggle('active');
            bottleimg.classList.toggle('active1');
        }
        function showInfo2() {
            bottleinfo2.classList.toggle('active');
            bottleimg.classList.toggle('active2');
        }

        bottlebutton1.addEventListener('click', showInfo1, true);
        bottlebutton2.addEventListener('click', showInfo2, true);

        /* bottle end */