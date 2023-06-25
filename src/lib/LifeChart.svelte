<script>
	import { LineChart } from '@carbon/charts-svelte';
	import { ScaleTypes } from '@carbon/charts/interfaces';

	const monthIndexInDecimal = new Date().getMonth() / 10 + 0.2;

	export const data = [
		{
			group: 'Journey',
			date: '1994-01-20T20:00:00.000Z',
			value: 0
		},
		{
			group: 'Journey',
			date: new Date(),
			value: 0
		},
		{
			group: 'Sword & Shield',
			date: '2001-12-11T00:00:00.000Z',
			value: 0.1
		},
		{
			group: 'Sword & Shield',
			date: new Date(),
			value: 0.1
		},
		{
			group: 'Mobbit IoT',
			date: '2015-05-01T00:00:00.000Z',
			value: 0
		},
		{
			group: 'Mobbit IoT',
			date: '2016-05-31T00:00:00.000Z',
			value: 1
		},
		{
			group: 'University (Bradford)',
			date: '2017-09-17T00:00:00.000Z',
			value: 0
		},
		{
			group: 'University (Bradford)',
			date: '2018-09-15T00:00:00.000Z',
			value: 1
		},
		{
			group: 'University (Bradford)',
			date: '2019-09-15T00:00:00.000Z',
			value: 2
		},
		{
			group: 'University (Bradford)',
			date: '2020-08-27T00:00:00.000Z',
			value: 3
		},
		{
			group: 'Teaching at Uni',
			date: '2018-09-15T00:00:00.000Z',
			value: 1
		},
		{
			group: 'Teaching at Uni',
			date: '2020-05-15T00:00:00.000Z',
			value: 2.5
		},
		{
			group: 'Herotech 8',
			date: '2021-04-01T00:00:00.000Z',
			value: 0
		},
		{
			group: 'Herotech 8',
			date: '2021-07-27T00:00:00.000Z',
			value: -0.3
		},
		{
			group: 'Oxwash',
			date: '2021-11-08T00:00:00.000Z',
			value: 0
		},
		{
			group: 'Oxwash',
			date: new Date(),
			value: monthIndexInDecimal
		}
	];
	export const options = {
		tooltip: { enabled: true },
		grid: {
			x: {
				enabled: false
			},
			y: {
				enabled: false
			}
		},
		axes: {
			bottom: {
				mapsTo: 'date',
				scaleType: ScaleTypes.TIME
			},
			left: {
				mapsTo: 'value',
				title: 'Years',
				scaleType: ScaleTypes.LINEAR,
				visible: false
			},
			zoomBar: {
				top: {
					enabled: true
				}
			}
		},
		curve: 'curveMonotoneX',
		height: '360px'
	};
</script>

<div>
	<LineChart {data} {options} />
</div>
