<template>
    <header class="main-header">
		<nav class="navbar navbar-static-top">
			<div class="container">
				<div class="navbar-header">
					<nuxt-link to="/" class="navbar-brand">Nanta</nuxt-link>
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar-collapse">
						<i class="fa fa-bars"></i>
					</button>
				</div>
				<div class="collapse navbar-collapse pull-left"
					id="navbar-collapse">
					<ul class="nav navbar-nav">
						<li><nuxt-link to="/">Home</nuxt-link></li>
						<li><nuxt-link to="/blog">Blog</nuxt-link></li>						
						<li><nuxt-link to="/contact">Contact</nuxt-link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>    
</template>
<script>
export default {}
</script>
