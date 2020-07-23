<template>
    <div>
        <h1>Create Task</h1>
        <form @submit.prevent="submitHandler">
            <label for="title">Title</label>
            <input v-model="title" id="title" type="text" class="validate" required>
            <label for="description">Description</label>
            <textarea v-model="description" id="description" cols="30" row="10"></textarea>
            <span>symbols {{description.length}}</span>
            <div class="complete">
                <span>Завершена?</span>
                <input v-model="checked" type="checkbox">
            </div>
            <button type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
export default {
    data: ()=>({
        title:'',
        description:'',
        checked:false,
    }),
    methods: {
        submitHandler(){
            const task = {
                id: Date.now(),
                title: this.title,
                description: this.description,
                checked: this.checked,
            }
            this.$store.dispatch('createTask', task)
            this.$router.push('/list')
        }
    },
}
</script>
<style>
    form >*{
        font-size: 1rem;
    }
    form{
        display: flex;
        flex-direction: column;
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