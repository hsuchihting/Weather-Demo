<template>
	<div class="home">
		<h1 class="py-3">天氣預報</h1>
		<img alt="Vue logo" src="../assets/weather.jpg" />
	</div>
</template>

<script>
export default {
	name: 'Home',
};
</script>

<style lang="scss">
h1 {
	font-size: 60px;
}
img{
	width: 100%;
	height: 600px;
	object-fit: cover;
	background-size: bottom;
	background-position: center center;
}
</style>
