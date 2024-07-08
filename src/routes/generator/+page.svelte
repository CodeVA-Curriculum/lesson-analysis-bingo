<script lang='ts'>
    import BingoCell from "$lib/components/BingoCell.svelte";

    export let data;
</script>

<section class='section'>
    <div class='container'>
        <div class='has-text-centered content'>
            <h1>CS Best Practices<br>BINGO</h1>
        </div>
        <div class="board fixed-grid has-5-cols">
            <div class="grid">
                {#each data.tags as tag}
                <div class="cell">
                    <BingoCell checked={tag == "FREE SPACE"} tag={tag} />
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang='scss'>
    .cell {
        aspect-ratio: 1;
    }
    .board {
        width: 700px;
        max-width: 85vw;
        margin-left: auto;
        margin-right: auto;
    }
</style>