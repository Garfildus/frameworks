<template>
    <div>
        <div v-if="task" @submit.prevent="submitHandler">
            <form>
                <h1>
                    <label for="title">Title</label>
                    <input v-model="task.title" id="title" type="text" class="validate" required>
                </h1>
                <label for="description">Description</label>
                <textarea v-model="task.description" v-on:change="submitHandler" id="description" cols="30" rows="10"></textarea>
                <div class="complete">
                    <span>Завершена?</span>
                    <input id="check" :checked="task.checked" v-on:change="submitHandler" type="checkbox">
                </div>
                <button type="submit">Обновить</button>
                <div @click="cancelHandler()">Отмена</div>
            </form>
        </div>
        <p v-else>Такой задачи нету</p>
    </div>
</template>
<script>
    export default {
        name:'create',

        computed:{
            task(){
                return this.$store.getters.taskById(+this.$route.params.id)
            }
        },
        methods: {
            submitHandler(){
                this.$store.dispatch('updateTask', {
                    id:this.task.id,
                    title: this.title,
                    description: this.description,
                    checked:this.checked,
                })
                this.$router.push('/list')
            },
            cancelHandler(){
                this.$router.push('/list')
            }
        },
        mounted() {
            this.$nextTick(function () {
                task = this.$store.getters.taskById(+this.$route.params.id)
            })
        }
    }
</script>
<style scoped>
    form >*{
        font-size: 1.2rem;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    .validate {
        width: 99%;
        font-size: 24px;
    }
    .complete {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
    .complete input{
        height: 24px;
        width: 24px;
    }
</style>