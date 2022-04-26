<!-- <script>
    import { page } from "$app/stores";
</script>

<header>
    <div class="header">
        <div>
            <a href="/" class="logo" alt="Site Logo">MTRVRS.</a>
            <p>Developer based in Tasmania, Australia.</p>
            <a href="/about">Read more about me.</a>
        </div>
        <div>
            <p>{$page.url.pathname}</p>
        </div>
    </div>
</header> -->
<script>
    import { page } from "$app/stores";
</script>

<header>
    <div class="header">
        <div>
            <a href="/" class="logo" alt="Site Logo">MTRVRS.</a>
            <p>Developer based in Tasmania, Australia.</p>
            <a href="/about">Read more about me.</a>
        </div>
        <div>
            / index {$page.url.pathname.replace(/[/]/g, " / ")}
        </div>
    </div>
</header>
