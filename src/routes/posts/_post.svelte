<script>
    import Nav from "$lib/components/nav.svelte";
    export let title;
    export let date;
</script>

<Nav />

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
