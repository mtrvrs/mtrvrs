<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch("/api/posts.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts,
            },
        };
    };
</script>

<script>
    import Card from "$lib/components/card.svelte";
    export let posts;
</script>

<Card {posts} />
