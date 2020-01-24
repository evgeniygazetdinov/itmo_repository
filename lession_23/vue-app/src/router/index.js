import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// настройки маршрутизации
export default new Router({
    routes: [
        {
            path: "/addTask",
            name: "AddTask",
            component: ()=> import('../components/AddTask.vue')
        },
        {
            path: "/showTasks",
            name: "ShowTasks",
            component: ()=> import('../components/ShowTasks.vue')
        }
    ]
});
// router - index.js