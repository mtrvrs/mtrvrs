<script>
    import { page } from "$app/stores";
</script>

{#if $page.url.pathname == "/"}
    <div class="nav">
        <p>Latest</p>
        <a href="/posts">More »</a>
    </div>
{:else if $page.url.pathname == "/posts"}
    <div class="nav">
        <p>Articles</p>
    </div>
{:else}
    <div class="nav">
        <a href="/posts">Back</a>
    </div>
{/if}
