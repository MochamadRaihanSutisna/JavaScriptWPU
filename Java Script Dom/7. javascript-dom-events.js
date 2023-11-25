/*

            "Events pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM"


            ..Kejadian tersebut bisa dilakukan oleh user, (mouse event, keyboard event, dll)

            ataupun dilakukan secara otomatis API (animasi selesai dijalankan, halaman selesai diload, dll)


            cara mendengarkan event
                > Event Handler
                    - inline HTML attribute
                    - Element method
                > addEventListener() 

            Daftar Event
                > Mouse Event
                > Keyboard Event
                > Resourch Event
                > focus Event
                > View Event
                > Form Event
                > CSS Animation & Transition Event
                > Drag & Drop Event
                > dll

                    Mouse Event
                        > click
                        > dblclick
                        > mouseover
                        > mouseenter
                        > mouseup
                        > wheel
                        > mouseleave

                    Keyboard Event
                        > keydown
                        > keypress
                        > keyup

                    View Events
                        > resize
                        > scroll
                        
                    Form Event
                        > reset
                        > submit

*/

/*
        const p2 = document.querySelector(".p2");
        p2.onclick = ubahWarnaP2;

        function ubahWarnaP2() {
            p2.style.backgroundColor = "lightgreen";
        }

        const p3 = document.querySelector(".p3");

        function ubahWarnaP3() {
            p3.style.backgroundColor = "lightgreen";
        }



        const p4 = document.querySelector("section#b p");
        p4.addEventListener("click", function() {
            const ul = document.querySelector("section#b ul");

            const liBaru = document.createElement("li");

            const teksLiBaru = document.createTextNode("item-baru");

            liBaru.appendChild(teksLiBaru);

            ul.appendChild(liBaru);
        });
    */

const p3 = document.querySelector(".p3");

/*

    p3.onclick = function() {
    p3.style.backgroundColor = "lightblue"

    };

    p3.onclick = function() {
        p3.style.color = "red"
    }

*/

p3.addEventListener("click", function() {

    p3.style.color = "blue";

})

p3.addEventListener("click", function() {

    p3.style.backgroundColor = "red";

})