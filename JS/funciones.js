const app1 = {
  data() {
    return {
      progress: 0,
      tareas: ["barrer", "limpiar", "decorar"],
      nuevaTarea: '', // Campo de entrada para la nueva tarea
    };
  },
  computed: {
    progressColor() {
      if (this.progress < 50) return 'green';
      else if (this.progress < 80) return 'yellow';
      else return 'red';
    },
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() !== '') {
        this.tareas.push(this.nuevaTarea); // Agregar tarea a 'tareas'
        this.nuevaTarea = ''; // Limpiar el campo de entrada
      }
    },
    quitarTarea(index) {
      if (this.tareas.length > 0) {
        this.tareas.splice(index, 1);
      }
    },
    increaseProgress() {
      if (this.progress < 100) {
        this.progress += 10;
      }
    },
    decreaseProgress() {
      if (this.progress > 0) {
        this.progress -= 10;
      }
    }
  }
};

const apli2 = Vue.createApp(app1).mount('#seccion');
