<script>
	import { createEventDispatcher } from 'svelte';
	export let caption;

	const dispatch = createEventDispatcher();
</script>

<div class="caption-container">
	<a href="#arrowL" class="arrow prev" on:click={() => dispatch('prevClick')}>&#10094;</a>
	<p id="caption">{caption}</p>
	<a href="#arrowR" class="arrow next" on:click={() => dispatch('nextClick')}>&#10095;</a>
</div>

<style>
	.caption-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		background-color: #222;
		font-size: 1.2rem;
		padding: 2px 16px;
		color: white;
	}
	.prev,
	.next {
		cursor: pointer;
		width: auto;
		color: hsla(125, 86%, 100%, 0.7);
		font-weight: bold;
		font-size: 2rem;
		border-radius: 0 3px 3px 0;
		user-select: none;
		-webkit-user-select: none;
	}

	.next {
		border-radius: 3px 0 0 3px;
	}
	.prev:hover,
	.next:hover {
		color: hsla(125, 26%, 64%, 0.5);
		text-decoration: none;
	}

	.prev:active,
	.next:active {
		color: hsla(125, 86%, 64%, 1);
		text-decoration: none;
	}
</style>
