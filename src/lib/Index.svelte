<script>
	import '@carbon/charts/styles.min.css';
	import 'carbon-components/css/carbon-components.min.css';
	import About from './About.svelte';
	import Causes from './Causes.svelte';

	import Choropleth from './Choropleth.svelte';
	import CloudEmissions from './CloudEmissions.svelte';
	import Emissions from './Emissions.svelte';
	import EnergyMix from './EnergyMix.svelte';
	import Languages from './Languages.svelte';
	import LifeChart from './LifeChart.svelte';
	import Table from './Table.svelte';
	import Weather from './Weather.svelte';

	const date = new Date().getFullYear();
</script>

<div>
	<div class="container">
		<div class="center">
			<h1 class="about">Hello, I'm Amaro,</h1>
			<h2 class="about">I'm a Software Engineer.</h2>
		</div>
		<div>
			<p class="tagline">I have a keen interest in learning about how our world works,</p>
			<p class="tagline">And I dream of using technology for the betterment of people's lives.</p>
			<br />
		</div>
	</div>
</div>

<div class="container">
	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">An Ode to Life</h5>
					<p class="card-text" />
					<div>
						<LifeChart />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">Sights and Wonders</h5>
					<p class="card-text" />
					<div>
						<Choropleth />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">Being Human</h5>
					<p class="card-text" />
					<div>
						<Languages />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">London's Energy mix</h5>
					<p class="card-text" />
					<div>
						<EnergyMix />
					</div>
					<br />
					<div>
						<Table />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">This Websites C02 emissions per day its hosted</h5>
					<p class="card-text" />
					<div>
						<CloudEmissions />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- <div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">London weather</h5>
					<p class="card-text" />
					<div>
						<Weather />
					</div>
				</div>
			</div>
		</div>
	</div> -->

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">Monthly causes that I support</h5>
					<Causes />
				</div>
				<div />
			</div>
		</div>
	</div>

	<!-- <div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">Personal GHG Emissions Calculator</h5>
					<p class="card-text" />
					<div>
						<Emissions />
					</div>
				</div>
			</div>
		</div>
	</div> -->

	<div class="row blogs">
		<div class="col-md">
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title">Disclaimer</h5>
					<p class="card-text" />
					<div>
						<About />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="footer">
	<p>
		{date} Amaro Chagan
	</p>
</div>

<style>
	.about {
		text-align: center;
		color: #4b0082 !important;
	}

	.card-title {
		color: #4b0082 !important;
	}
	.center {
		padding: 50px 0;
	}

	.tagline {
		text-align: center;
		font-size: 14px;
		margin-top: 5px;
		color: black;
		font-weight: bold;
	}

	.blogs {
		margin-top: 20px;
	}

	.card {
		border: solid;
		border-color: #4b0082;
		box-shadow: 0 4px 8px 0 #b400f533;
		transition: 0.3s;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 #8e2cb133;
	}

	.card-body {
		background-color: #fef9fe;
	}
	.card-title {
		text-align: center;
	}

	.footer {
		border-top: solid;
		border-color: #4b0082;
		text-align: center;
		/* margin-top: 20px; */
	}
</style>
