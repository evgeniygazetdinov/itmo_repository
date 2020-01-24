<template>
    <div>Show Tasks
        <h2 v-if="(tasks.length >0)"> Ваши задачи</h2>
        <h2 v-else>нет задач</h2>


        <div class="task" 
        v-bind:class="{checked:task.isDel}"
        v-on: click="task.isDel = !task.isDel"
        v-for="task in tasks">
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
        </div>
     <button ></button>
    </div>

</template>

<script>
import { tasksFromStorage } from './tasks'
    export default {
        data: function () {
            return {
                name: "ShowTasks",
                tasks: tasksFromStorage,
            }
        },
        methods: { deleteTasks: function(){
            console.log('xa');
            for(let i = 0; i < this.tasks.length; i++){
                if(this.tasks[i].isDel){
                    this.tasks.splice(i, 1);
                    i--;
                }
            }
        }

        }
        }
    
</script>
<style lang="scss">
    $black:black;
    $gray: gray;
    .tasks-list {
        flex: 1;
        .task:nth-child(odd){
            background: $gray;
            color: $black;
            padding: 10px;
        }
        .task:nth-child(even){
            background: $black;
            color: $gray;
            padding: 10px;
        }
    }
    .task:nth-child(odd)checked,
    .task:nth-child(even)checked{
        background: orange;
        color: white;
        text-decoration: line-through;
    }


</style>