<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch("/api/posts.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts.slice(0, 3),
            },
        };
    };
</script>

<script>
    import Card from "$lib/components/card.svelte";
    import Nav from "$lib/components/nav.svelte";
    export let posts;
</script>

<Nav />

<Card {posts} />
