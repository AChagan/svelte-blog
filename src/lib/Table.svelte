<script>
	let index = '';
	let intensity = 2;
	async function carbonintensity() {
		const postCode = 'HA04BZ';
		const date = new Date();

		const response = await fetch(
			`https://api.carbonintensity.org.uk/regional/intensity/${date.getFullYear()}-${
				date.getMonth() + 1
			}-${date.getDate() + 1}/fw24h`
		);

		const data = await response.json();

		intensity = data.data[0].regions[12].intensity.forecast;
		index = data.data[0].regions[12].intensity.index;
	}

	carbonintensity();
</script>

<div>
	<table>
		<tr>
			<th>Region</th>
			<th>Forecast Carbon intensity (gC02/kWh)</th>
		</tr>
		<tr>
			<td>London</td>
			<td>{intensity}</td>
		</tr>
	</table>
</div>

<style>
	table {
		margin: 0 auto;
		border-spacing: 10px;
		width: 50%;
		border: 1px solid #4b0082;
	}

	th,
	td {
		border: 1px solid #4b0082;
		padding: 8px;
		text-align: center;
	}
</style>
