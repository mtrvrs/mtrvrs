<script>
    export let posts;
</script>

<div class="card">
    {#each posts as post}
        <div class="card__block">
            <div class="card__block-header">
                <h4>
                    <a href={post.path}>{post.meta.title}</a>
                </h4>
                <time>{post.meta.date}</time>
            </div>
            <p>{post.meta.description}</p>
        </div>
    {/each}
</div>
