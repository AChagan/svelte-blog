<script lang="ts">
	import { BarChartStacked } from '@carbon/charts-svelte';
	import climatiqApiService from './../services/climatiqAPI.service';

	const climatiqService = new climatiqApiService();

	let isActive = false;
	const data = [];

	getCloudEmissions();
	async function getCloudEmissions() {
		const cpuEmissions = await climatiqService.getCloudCpuEmissions(4, 24);
		const ramEmissions = await climatiqService.getCloudRamEmissions(8, 24);
		const networkingEmissions = await climatiqService.getCloudNetworkEmissions(1);

		data.push({
			group: 'CPU',
			key: 'AWS (kg)',
			value: Number(parseFloat(cpuEmissions.co2e).toFixed(4))
		});

		data.push({
			group: 'RAM',
			key: 'AWS (kg)',
			value: Number(parseFloat(ramEmissions.co2e).toFixed(4))
		});

		data.push({
			group: 'Network',
			key: 'AWS (kg)',
			value: Number(parseFloat(networkingEmissions.co2e).toFixed(4)) * 24
		});

		isActive = true;
	}

	const options = {
		axes: {
			left: {
				mapsTo: 'value',
				stacked: true
			},
			bottom: {
				mapsTo: 'key',
				scaleType: 'labels'
			}
		},
		height: '400px'
	};
</script>

<div>
	{#if isActive}
		<BarChartStacked {data} {options} />
	{/if}
</div>
