<script lang='ts'>
    export let tags:string[] = []
</script>

<div class='my-5'>
    <div class='content'>
        <p class='is-italic has-text-weight-bold'>Tags:</p>
        {#each tags as tag}
        <span class='tag'>{tag}</span>
        {/each}
    </div>
</div>