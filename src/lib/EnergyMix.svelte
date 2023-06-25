<script>
	import { PieChart } from '@carbon/charts-svelte'

	let chartData = []
	c02EmissionsInLondonToday()
	async function c02EmissionsInLondonToday() {
		const dateInYearMonthDayFormat = `${new Date().getFullYear()}-${
			new Date().getMonth() + 1
		}-${new Date().getDate()}`

		const response = await fetch(`https://api.carbonintensity.org.uk/regional/regionid/13`)
		const data = await response.json()
		const generationMix = data.data[0].data[0].generationmix

		chartData = generationMix.map((generation) => {
			return { group: generation.fuel, value: generation.perc }
		})
	}
</script>

<PieChart
	data={chartData}
	options={{
		title: '',
		resizable: true,
		legend: {
			alignment: 'center'
		},
		pie: {
			alignment: 'center'
		},
		height: '400px'
	}}
/>
