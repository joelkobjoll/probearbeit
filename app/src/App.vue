<template>
	<div id="app">
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-toggle target="nav_collapse" />

			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
					<b-nav-item to="/">Search</b-nav-item>
					<b-nav-item-dropdown text="Administration">
						<b-dropdown-item to="/admin/genres">Genres</b-dropdown-item>
						<b-dropdown-item to="/admin/movies">Movies</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<b-container class="pt-5">
			<router-view />
		</b-container>
	</div>
</template>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
