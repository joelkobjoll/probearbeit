<template>
	<b-container>
		<h1 class="h1">Genries</h1>
		<b-alert :show="loading" variant="info">Loading...</b-alert>

		<div class="bv-example-row">
			<b-row>
				<b-col cols="4">
					<b-form @submit.prevent="createGenre">
						<b-form-group label="Name:">
							<b-form-input type="text" v-model="form.name" required placeholder="Enter name" />
						</b-form-group>
						<b-button type="submit" variant="primary">Add new genre</b-button>
					</b-form>
				</b-col>

				<b-col cols="8">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Created At</th>
								<th>Updated At</th>
								<th>&nbsp;</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="genre in genres" :key="genre.id">
								<td>{{ genre.id }}</td>
								<td>{{ genre.name }}</td>
								<td>{{ genre.createdAt }}</td>
								<td>{{ genre.updatedAt }}</td>
								<td class="text-right">
									<b-button size="sm" :to="`/admin/genres/${genre.id}`">Edit</b-button>
								</td>
								<td class="text-right">
									<b-button size="sm" variant="danger" @click.prevent="deleteGenre(genre.id)">Delete</b-button>
								</td>
							</tr>
						</tbody>
					</table>
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
				genres: [],
				form: {
					name: '',
				},
			};
		},
		async created() {
			this.refreshGenries();
		},
		methods: {
			createGenre() {
				Genries.createGenre(this.form)
					.then(() => {
						this.form.name = '';
						this.refreshGenries();
					});
			},
			async refreshGenries() {
				this.loading = true;
				this.genres = await Genries.getGenries();
				this.loading = false;
			},
			async deleteGenre(id) {
				if (confirm('Are you sure you want to delete this genre?')) {
					if (this.model.id === id) {
						this.model = {};
					}
					await Genries.deleteGenre(id);
					await this.refreshGenries();
				}
			},
		},
	};
</script>
