<template>
	<nav>
		<ul>
			<router-link tag="li" to="/list" class="link">List</router-link>
			<router-link tag="li" to="/" class="link">Create</router-link>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "Navbar"
	}
</script>

<style scoped>
	ul{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		list-style: none;
		font-size: 1.5rem;
	}
	ul li{
		padding: 10px;
		border: 1px solid black;
		cursor: pointer;
		background: #fff;
	}
	ul li:hover{
		filter: invert(100%);
	}
</style>