<template>
    <div class="task-manager">
        <!--неизменная часть-->
       <div class="menu">
           <img :src="src">
           <div class="title">
               <h3>Задачи</h3>
               <p>Всего задач: {{tasks.length}}</p>
           </div>
           <nav>
               <router-link to="/addTask">Создать задачу</router-link>
               <router-link to="/showTasks">Просмотр задач</router-link>
           </nav>
       </div>
        <!--подгружаемые компоненты-->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {tasksFromStorage} from "./components/tasks";
    export default {
        name: "App",
        data: function () {
            return {
                tasks: tasksFromStorage,
                src: "/src/img/cat.png"
            }
        }
    }
</script>

<style scoped></style>