<script>
    import "$lib/scss/global.scss";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<Header />

<main>
    <slot />
</main>

<Footer />
