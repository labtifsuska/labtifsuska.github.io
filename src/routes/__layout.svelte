<script>
	import Aside from '$lib/Aside.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../tailwind.css';
	import '../app.css';
</script>

<!-- Header here-->
<Header />

<!-- Content here -->
<main>
	<div class="md:container md:mx-auto relative">
		<slot></slot>
	</div>
</main>