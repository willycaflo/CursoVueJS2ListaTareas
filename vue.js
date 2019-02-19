//Componente para desplegar el titulo
Vue.component('titulo',{
    template: '<h2>{{ titulo }}</h2>',
    data: function(){
        return {titulo: 'Lista de tareas'}
    }
});



var app = new Vue({
    el: '#app',  
    data:{
        tareas: [
            {
                texto: 'Aprender Vue.js',
                terminada: false
            },
            {
                texto: 'Aprender Angular 6',
                terminada: false
            },
            {
                texto: 'Aprender Ionic 2',
                terminada: false
            },
            {
                texto: 'Aprender React',
                terminada: false
            },
        ],
        nuevaTarea: '',
    },
    methods:{
        agregarTarea: function(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                });
            }
            this.nuevaTarea = '';
        },
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }  
});
