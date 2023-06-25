<script>
	import { WordCloudChart } from '@carbon/charts-svelte';

	const data = [
		{
			word: 'Olá',
			value: 100,
			group: 'Portugues'
		},
		{
			group: 'Gujarati',
			value: 75,
			word: 'નમસ્તે'
		},
		{
			word: 'Hello',
			value: 100,
			group: 'English'
		},
		{ word: 'Hola', value: 50, group: 'Spanish' },
		{ group: 'Hindi', value: 50, word: 'नमस्ते' },
		{ group: 'French', value: 50, word: 'Bonjour' }
	];
</script>

<div>
	<WordCloudChart {data} />
</div>
