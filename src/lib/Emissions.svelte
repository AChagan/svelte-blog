<script lang="ts">
	import climatiqApiService from './../services/climatiqAPI.service';

	const climatiqService = new climatiqApiService();

	let cpuCount;
	let ram;
	let storage;

	async function handleSubmit() {}
</script>

<div class="form-container">
	<form on:submit|preventDefault={handleSubmit} class="flex-container">
		<label for="cpu" class="label-box">Number Of CPUs</label>
		<input type="text" class="input-box" placeholder="4" id="cpu" bind:value={cpuCount} />

		<label for="ram" class="label-box">RAM memory in GB</label>
		<input id="ram" class="input-box" type="text" placeholder="8" bind:value={ram} />

		<label for="storage" class="label-box">Storage in GB</label>
		<input for="storage" class="input-box" type="text" placeholder="1024" bind:value={storage} />

		<button class="button" type="submit"> Generate Cloud Service Emissions</button>
	</form>
</div>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.label-box {
		margin: 0px 6px 0px 6px;
		text-align: center;
		border: 2px solid #4b0082;
		padding: 3px;
	}

	.input-box {
		margin: 0px 6px 0px 6px;
		border: 2px solid #4b0082;
		text-align: center;
	}

	.input-box:focus {
		border: 2px solid #4b0082;
	}

	.button {
		border: 2px solid #4b0082;
		font-weight: bold;
		color: #4b0082;
		background-color: transparent;
	}

	.button:hover {
		background-color: #4b0082;
		color: #fef9fe;
	}

	@media (max-width: 991px) {
		.flex-container {
			flex-direction: column;
		}

		.label-box {
			margin: 6px 6px 0px 0px;
			width: 100%;
		}

		.input-box {
			margin: 6px 6px 0px 0px;
			width: 100%;
		}
		.button {
			margin-top: 12px;
		}
	}
</style>
