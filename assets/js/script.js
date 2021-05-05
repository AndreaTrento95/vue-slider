const app = new Vue({

    el: '#app',
    data:{
        counter: 0,
        images:[
            'assets/img/IMG_20181229_164556.jpg',
            'assets/img/IMG_20190706_133225.jpg',
            'assets/img/IMG_20190706_150944.jpg',
            'assets/img/IMG_20191129_180023.jpg',
            'assets/img/IMG_20200516_131014.jpg'
        ]
    },
    methods:{
        nextImage(){
            counter++;
        },
        prevImage(){

        }
    }
});