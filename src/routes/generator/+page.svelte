<script lang='ts'>
    import BingoCell from "$lib/components/BingoCell.svelte";

    export let data;
</script>

<section class='section'>
    <div class='container'>
        <div class='has-text-centered content'>
            <h1>CS Best Practices<br>BINGO</h1>
        </div>
        <div class="fixed-grid has-5-cols">
            <div class="grid">
                {#each data.tags as tag}
                <div class="cell">
                    <BingoCell tag={tag} />
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>