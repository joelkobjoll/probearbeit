<template>
	<b-container>
		<h1 class="h1">Edit Genre</h1>
		<b-alert :show="loading" variant="info">Loading...</b-alert>

		<div class="bv-example-row">
			<b-row>
				<b-col cols="12">
					<b-form @submit.prevent="updateGenre">
						<b-form-group label="Name:">
							<b-form-input type="text" v-model="genre.name" required placeholder="Enter name" />
						</b-form-group>
						<b-button type="submit" variant="primary">Save changes</b-button>
					</b-form>
				</b-col>
			</b-row>
		</div>
	</b-container>
</template>

<script>
	import {Genries} from '@/controller/genries';
	export default {
		data() {
			return {
				loading: false,
				model: {},
				genre: {},
			};
		},
		async created() {
			this.refreshGenre();
		},
		methods: {
			async refreshGenre() {
				this.loading = true;
				this.genre = await Genries.getGenre(this.$route.params.id);
				this.loading = false;
            },
            async updateGenre() {
                this.loading = true;
                await Genries.updateGenre(this.genre.id, this.genre);
                this.loading = false;
            }
		},
	};
</script>
