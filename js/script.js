/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],

            currentSlide : 0,
            autoPlay: null //poi ci andranno numeri, quelli del log del setInterval
        };
    },
    methods: {
            showNext () {
                if(this.currentSlide < this.slides.length -1){
                    this.currentSlide ++;
                }else{
                    this.currentSlide = 0;
                } 
            },
            showPrev (){
                if(this.currentSlide >0){
                    this.currentSlide--;
                }else{
                    this.currentSlide = this.slides.length -1;
                }
            },
            changeSlide(clickedSlide){  //potevo farlo anche nel @click currentSlide = index
                this.currentSlide = clickedSlide;
            },
            stopAutoPlay(){
                clearInterval(this.autoPlay)
                this.autoPlay = null
            },
            startAutoPlay(){
                if(this.autoPlay === null){
                    this.autoPlay = setInterval( () => {
                        this.showNext
                    }, 3000)
                }
            }
    },

    created(){
        this.startAutoPlay(); 
    }
}).mount("#app");


