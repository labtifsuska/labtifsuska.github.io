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

		<!-- Side menu -->
		<section class="fixed top-0 pt-28 border-r h-screen">
			<div class="flex-none w-60">
				<Aside />
			</div>
			<!-- Footer -->
			<footer class="absolute bottom-0 text-sm px-2">
				<Footer />
			</footer>
		</section>

		<!-- Main content -->
		<section class="ml-60 flex flex-col space-y-8 z-0">
			<slot></slot>
		</section>


	</div>
</main>