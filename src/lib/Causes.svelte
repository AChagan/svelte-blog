<script>
	import Slide from './components/Slide.svelte';
	import Thumbnail from './components/Thumbnail.svelte';
	import Caption from './components/Caption.svelte';

	const images = [
		{
			id: 0,
			name: 'World Food Programme',
			logo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/World_Food_Programme_Logo_Simple.svg/2020px-World_Food_Programme_Logo_Simple.svg.png',
			imgurl:
				'https://cdn.wfp.org/guides/ui/assets/v0.0.1/logos/extended/en/wfp-logo-extended-white-en.png',
			attribution: 'World Food Programme'
		},
		{
			id: 1,
			name: 'UNICEF',
			logo: 'https://logos-world.net/wp-content/uploads/2020/10/UNICEF-Logo.png',
			imgurl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/UNICEF_Logo.png/1200px-UNICEF_Logo.png',
			attribution: 'UNICEF'
		},
		{
			id: 2,
			name: 'UN Crises Relief',
			logo:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/2411px-UN_emblem_blue.svg.png',
			imgurl:
				'https://raisely-images.imgix.net/un-crisis-relief/uploads/un-crisis-relief-png-ea5540.png?fit=max&w=1000&auto=format&q=62',
			attribution: 'UN Crises Relief'
		}
	];

	let imageShowingIndex = 0;
	$: image = images[imageShowingIndex];

	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};

	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};

	const goToSlide = (number) => (imageShowingIndex = number);
</script>

<main>
	<div class="container">
		<Slide
			image={image.imgurl}
			altTag={image.name}
			attr={image.attribution}
			slideNo={image.id + 1}
			totalSlides={images.length}
		/>
	</div>

	<Caption
		caption={images[imageShowingIndex].name}
		on:prevClick={prevSlide}
		on:nextClick={nextSlide}
	/>

	<div class="thumbnails-row">
		{#each images as { id, logo, imgurl, name, attribution }}
			<Thumbnail
				thumbImg={logo}
				altTag={name}
				titleLink={attribution}
				{id}
				selected={imageShowingIndex === id}
				on:click={() => goToSlide(id)}
			/>
		{/each}
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap');

	* {
		box-sizing: border-box;
		font-family: 'Josefin Sans', sans-serif;
	}

	main {
		width: 70vw;
		display: flex;
		flex-direction: column;
		margin: 10% auto;
		background-color: #222;
		box-shadow: 0 0 10px black;
	}

	.container {
		position: relative;
		height: auto;
	}

	.thumbnails-row {
		background-color: black;
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
