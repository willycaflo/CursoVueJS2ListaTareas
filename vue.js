var data = {
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
};

//Componente para desplegar el titulo
Vue.component('titulo',{
    template: '<h2>{{ titulo }}</h2>',
    data: function(){
        return {titulo: 'Lista de tareas'}
    }
});

//Componente para agregar una nueva tarea
Vue.component('nueva-tarea',{
    template: `<div class="input-group">
            <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea()"/>
            <span class="input-group-btn">
                <button type="button" v-on:click="agregarTarea()" class="btn btn-primary">Agregar</button>
            </span>
        </div>`,
    data: function(){
        return data;
    },
    methods: {
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
    }
});

var app = new Vue({
    el: '#app',  
    data: data,
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
