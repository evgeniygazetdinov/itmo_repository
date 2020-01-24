<template>
    <div>
        <h1>
            add
            <form @submit.prevent="addTask">
                <label for="title">название</label>
                <input v-model="title" type="text" id="title">
                <label for="description" type="text" id="description">
                    description
                </label>
                <textarea v-model="description" id="description"></textarea>
                <button :class="[(title && description ? active : '')]" type="submit">отправить</button>
            </form>
        </h1>
    </div>
</template>

<script>
// logics for add task
import {taskFromStorage, tasksFromStorage} from './tasks';
    export default {
        data: function () {
            return {
                name: "AddTask",
                title: null,
                description: null,
                tasks: tasksFromStorage,
                active: 'active'
            }

        },
        methods:{
            addTask: function(){
                console.log('ca');
                this.tasks.push({

                    title: this.title,
                    description: this.description,
                    isDel: false,
                })

            }
        }         
    }


</script>
<style scoped lang="scss">
    .active{
        background: orangered;
    }
</style>