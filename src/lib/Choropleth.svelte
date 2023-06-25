<script>
	import { onMount, onDestroy } from 'svelte'
	import { Map, NavigationControl, Marker, Feature } from 'maplibre-gl'
	import 'maplibre-gl/dist/maplibre-gl.css'
	let map
	let mapContainer

	onMount(() => {
		const apiKey = 'isZBGbqvs7ow7OaokO2W'
		if (!apiKey) {
			throw new Error('You need to configure env API_KEY first, see README')
		}
		const initialState = { lng: -9.1299695, lat: 38.7456996, zoom: 2 }

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		})

		map.addControl(new NavigationControl(), 'top-right')

		//Lisboa
		new Marker({ color: '#FF0000' }).setLngLat([-9.1299695, 38.7456996]).addTo(map)
		//London
		new Marker({ color: '#FF0000' }).setLngLat([-0.2984026, 51.5437541]).addTo(map)
		//Paris
		new Marker({ color: '#FF0000' }).setLngLat([2.3490488, 48.8471736]).addTo(map)
		//Dublin
		new Marker({ color: '#FF0000' }).setLngLat([-6.2430102, 53.340143]).addTo(map)
		//Oslo
		new Marker({ color: '#FF0000' }).setLngLat([10.7439363, 59.9104567]).addTo(map)
		//Prague
		new Marker({ color: '#FF0000' }).setLngLat([14.4187313, 50.0825984]).addTo(map)
		//Vienna
		new Marker({ color: '#FF0000' }).setLngLat([16.3757191, 48.2022596]).addTo(map)
		//Budapeste
		new Marker({ color: '#FF0000' }).setLngLat([18.9902179, 47.4813602]).addTo(map)
		//Bratislava
		new Marker({ color: '#FF0000' }).setLngLat([17.1025153, 48.1397156]).addTo(map)
		//Diu
		new Marker({ color: '#FF0000' }).setLngLat([70.9833844, 20.7188226]).addTo(map)
	})

	onDestroy(() => {
		map.remove()
	})
</script>

<div class="map-wrap">
	<div class="map" id="map" bind:this={mapContainer} />
</div>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: calc(90vh - 77px); /* calculate height of the screen minus the heading */
	}
	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
