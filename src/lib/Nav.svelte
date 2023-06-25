<script>
	import 'bootstrap/dist/css/bootstrap.css';
	import '../../src/app.css';
	import Twitter from './images/Twitter.svelte';
	import Instagram from './images/Instagram.svelte';
	import LinkedIn from './images/LinkedIn.svelte';

	let isActive = false;

	function toggleNav() {
		isActive = !isActive;
	}
</script>

<nav class="navbar navbar-expand-lg" style="border-bottom: solid; border-bottom-color: #4b0082">
	<div class="container">
		<button
			class="navbar-toggler third-button"
			on:click={toggleNav}
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<div class="animated-icon {isActive ? 'open' : undefined}"><span /><span /><span /></div>
		</button>
		<div class="collapse navbar-collapse" class:show={isActive} id="navbarSupportedContent">
			<ul class="navbar-nav me-auto">
				<li class="nav-item a-link">&nbsp;</li>
			</ul>
			<ul class="navbar-nav me-auto">
				<li class="nav-item" />
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a
						class="nav-link active git a-link"
						aria-current="page"
						target="_blank"
						href="https://www.instagram.com/amarojchagan/"
					>
						<Instagram />
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link active git a-link"
						aria-current="page"
						target="_blank"
						href="https://twitter.com/Amarojchagan"
					>
						<Twitter />
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link active git a-link"
						aria-current="page"
						target="_blank"
						href="https://www.linkedin.com/in/amaro-chagan/"
					>
						<LinkedIn />
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.brand-name {
		color: #4b0082 !important;
	}

	.animated-icon {
		width: 30px;
		height: 22px;
		position: relative;
		margin: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	.animated-icon span {
		display: block;
		position: absolute;
		height: 3px;
		width: 100%;
		border-radius: 9px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	.animated-icon span {
		background: #4b0082;
	}

	.animated-icon span:nth-child(1) {
		top: 1px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	.animated-icon span:nth-child(2) {
		top: 10px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	.animated-icon span:nth-child(3) {
		top: 19px;
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	.animated-icon.open span:nth-child(1) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		top: 0px;
		left: 3px;
	}

	.animated-icon.open span:nth-child(2) {
		width: 0%;
		opacity: 0;
	}

	.animated-icon.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		top: 21px;
		left: 3px;
	}
</style>
