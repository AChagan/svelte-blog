<script>
	import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';

	import * as THREE from 'three';
	export let width = 900;
	export let height = 600;

	let scene, camera, renderer;
	let globe;

	const FOV = 40;
	const NEAR = 1;
	const FAR = 4000;

	let container;
	let animationRef;

	const init = function () {
		camera = new THREE.PerspectiveCamera(FOV, width / height, NEAR, FAR);
		camera.position.set(1800, 300, 1200);
		camera.lookAt(new THREE.Vector3(0, 0, 0));

		scene = new THREE.Scene();
		scene.add(camera);

		addLights();

		drawGlobe();

		renderer = new THREE.WebGLRenderer();

		const canvas = renderer.domElement;

		renderer.setSize(width, height);
		container.appendChild(renderer.domElement);
	};

	const addLights = function () {
		let light = new THREE.AmbientLight(0xfefefe);
		scene.add(light);
	};

	const drawGlobe = function () {
		let globeGeom = new THREE.SphereGeometry(400, 50, 50);
		let globeTexture = new THREE.ImageUtils.loadTexture('world-nasa.jpg');
		let globeMaterial = new THREE.MeshPhongMaterial({
			map: globeTexture,
			shininess: 0.2
		});

		globe = new THREE.Mesh(globeGeom, globeMaterial);
		scene.add(globe);
	};

	const animate = function () {
		animationRef = window.requestAnimationFrame(animate);

		var timer = Date.now() * 0.0001;
		camera.position.x = Math.cos(timer) * 1600;
		camera.position.z = Math.sin(timer) * 1600;
		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	};

	onMount(() => {
		init();
		animate();
	});

	onDestroy(() => {
		window.cancelAnimationFrame(animationRef);
	});
</script>

<div class="shnt-globe-3d earth" bind:this={container} />

<style>
	.earth {
		width: 100% !important;
		height: 100% !important;
	}
</style>
