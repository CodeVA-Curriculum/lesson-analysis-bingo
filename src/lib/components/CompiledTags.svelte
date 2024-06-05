<script lang='ts'>
    export let tags:string[] = []
</script>

<div class='card'>
    <div class='card-header'>
        <p class='card-header-title'>Possible Bingo Cells</p>
    </div>
    <div class='card-content'>
        {#each tags as tag}
        <span class='tag'>{tag}</span>
        {/each}
    </div>
</div>

<style lang='scss'>
    .card {
        height: 10rem;
    }
</style>