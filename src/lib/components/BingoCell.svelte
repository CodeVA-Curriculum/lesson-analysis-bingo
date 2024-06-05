<script lang='ts'>
    export let tag:string = ""
</script>

<div class='cell p-3 has-text-centered'>
    <span class='checkbox'>
        <input type="checkbox" />
    </span>
    <p>{tag}</p>
</div>

<style lang='scss'>
    .cell {
        width: 100%;
        height: 17vw;
        border-color: $green;
        border-width: 4px;
        border-style: solid;
        display: flex;
        flex-wrap: wrap;
        align-content: center; /* used this for multiple child */
        // align-items: center; /* if an only child */
        input {
            width: 30px;
            height: 30px;
            border-color: $green;
        }
        span {
            position: absolute;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
    // TODO: input styles in @media print
</style>