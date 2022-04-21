<script>
    import "../app.scss";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<div class="wrapper">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>
