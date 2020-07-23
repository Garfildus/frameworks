<template>
    <div>
        <h1>List  '/list'</h1>
        <hr>
        <table v-if="tasks.length">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr
                        v-for="(task,idx) in tasks"
                        :key="task.id"
                >
                    <td>{{idx + 1}}</td>
                    <td>{{task.title}}</td>
                    <td class="td"><div class="text">{{task.description}}</div></td>
                    <td>{{task.checked ? 'Закончена': 'В процессе'}}</td>
                    <td>
                        <router-link
                                tag="button"
                                :to="'/task/' + task.id"
                        >Открыть</router-link>
                    </td>
                    <td><button @click="deleteTask(idx)">Удалить</button></td>
                </tr>
            </tbody>
        </table>
        <p v-else>Нету задач</p>
    </div>
</template>
<script>

    export default {
        computed:{
            tasks(){
                return this.$store.getters.tasks
            },
        },
        methods:{
            deleteTask(id){
                this.$store.dispatch('deleteTask', id)
            }
        },
    }
</script>
<style scoped>
    .text{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .td{
        max-width: 400px;
    }
</style>