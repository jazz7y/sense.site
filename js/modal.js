const modal_content = [
    {
        id: 0,
        title: 'RockStar: 1 Month',
       // gallery: ['https://sharawin.pw/img/1.png', 'https://sharawin.pw/img/2.png', 'https://sharawin.pw/img/3.png'],
        information: 
        [
            //{
               // name: 'Silent Aim',
               // check: true,
            //},
            //{
              //  name: 'Visuals + Resources',
              //  check: true,
           // },
           // {
               // name: 'Memory',
              //  check: true,
           // },
           // {
               // name: 'Misc',
               // check: true,
           // },
            {
                name: 'RockStar client',
                check: true,
            },
			            {
                name: 'lua script',
                check: true,
            },
            {
                name: 'for: hvh, rw, hw, ft',
                check: true,
            },
        ]
    },
    {
        id: 1,
        title: 'RockStar: 3 Month',
       // gallery: ['https://sharawin.pw/img/1.png', 'https://sharawin.pw/img/2.png', 'https://sharawin.pw/img/3.png'],
        information: 
        [
                 //{
               // name: 'Silent Aim',
               // check: true,
            //},
            //{
              //  name: 'Visuals + Resources',
              //  check: true,
           // },
           // {
               // name: 'Memory',
              //  check: true,
           // },
           // {
               // name: 'Misc',
               // check: true,
           // },
            {
                name: 'RockStar client',
                check: true,
            },
			            {
                name: 'lua script',
                check: true,
            },
            {
                name: 'for: hvh, rw, hw, ft',
                check: true,
            },
        ]
    },
    {
        id: 2,
        title: 'RockStar: 9 Month',
       // gallery: ['https://sharawin.pw/img/1.png', 'https://sharawin.pw/img/2.png', 'https://sharawin.pw/img/3.png'],
        information: 
        [
                 //{
               // name: 'Silent Aim',
               // check: true,
            //},
            //{
              //  name: 'Visuals + Resources',
              //  check: true,
           // },
           // {
               // name: 'Memory',
              //  check: true,
           // },
           // {
               // name: 'Misc',
               // check: true,
           // },
            {
                name: 'RockStar client',
                check: true,
            },
			            {
                name: 'lua script',
                check: true,
            },
            {
                name: 'for: hvh, rw, hw, ft',
                check: true,
            },
        ]
    },
    {
        id: 3,
        title: 'RockStar: Year',
       // gallery: ['https://sharawin.pw/img/1.png', 'https://sharawin.pw/img/2.png', 'https://sharawin.pwF/img/3.png'],
        information: 
        [
                  //{
               // name: 'Silent Aim',
               // check: true,
            //},
            //{
              //  name: 'Visuals + Resources',
              //  check: true,
           // },
           // {
               // name: 'Memory',
              //  check: true,
           // },
           // {
               // name: 'Misc',
               // check: true,
           // },
            {
                name: 'RockStar client',
                check: true,
            },
			            {
                name: 'lua script',
                check: true,
            },
            {
                name: 'for: hvh, rw, hw, ft',
                check: true,
            },
        ]
    }
];

const vue = new Vue({
    el: '#app',
    data: {
        modal: [],
    },

    methods: {
        showModal: function (id) {
            $('.modal').fadeIn();

            this.modal.push(modal_content[id]);
            this.modal = this.modal[0];

            setTimeout(function () {
                $('.gallery').not('.slick-initialized').slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                }).magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            }, 100);
        },

        closeModal: function () {
            $('.modal').fadeOut(0);
            $('.gallery').empty().removeClass('slick-initialized slick-slider slick-dotted');
            vue.modal = [];
        }
    }
});