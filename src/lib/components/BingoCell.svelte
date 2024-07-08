<script lang='ts'>
    import {base} from '$app/paths'
    export let tag:string = ""

    export let checked = false;
</script>

<div class='cell p-0 has-text-centered'>
    <!-- style={tag=="FREE SPACE"? `background-image: url("${base+'/images/codie-flying-2.png'}");` : ""}> -->
    <div class='background {tag=="FREE SPACE"? 'free' : ''}'>
    </div>
    <div class='foreground has-text-centered p-3 {tag=="FREE SPACE"? 'free' : ''}'>
        <span class='checkbox'>
            <input bind:checked={checked} type="checkbox" />
        </span>
        <p class='is-vcentered'>{tag}</p>
    </div>
</div>

<style lang='scss'>
    .background {
        display: none;
        position: absolute;
        background-image: url("images/codie-flying-2.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 90%;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        &.free {
            display: block;
        }
    }
    .foreground {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-content: center; /* used this for multiple child */
        // align-items: center; /* if an only child */
        input {
            width: 20px;
            height: 20px;
            max-width: 4vw;
            max-height: 4vw;
            border-color: $green;
        }
        span {
            position: absolute;
            top: 5px;
            left: 5px;
        }
        &.free {
            p {
                font-weight: bold;
            }
        }
    }
    .cell {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        border-color: $green;
        border-width: 4px;
        border-style: solid;
        overflow: hidden;
    }
    // TODO: input styles in @media print
</style>