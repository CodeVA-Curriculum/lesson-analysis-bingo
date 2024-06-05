<script lang='ts'>
    import { faDeleteLeft, faDownload, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { createEventDispatcher } from "svelte";
    import Fa from "svelte-fa";

    // TODO: validate link
    export let links=[""]
    export let index=0

    const dispatch = createEventDispatcher()

    function deleteSelf() {
        dispatch('delete')
    }

    async function load() {
        // TODO: validate link format
        const cleanLink = links[index].replace('https://curriculum.codevirginia.org/library/browse/', "")
        dispatch('load', {
            url: `https://curriculum.codevirginia.org/api/library/${cleanLink}.json`,
            link: links[index]
        })
    }
</script>

<article class='card'>
    <div class='card-header'>
        <h2 class='card-header-title is-italic ml-3'>Link to CodeVA Lesson Plan</h2>
        <button on:click={deleteSelf} class='card-header-icon'>
            <span class='icon'>
                <Fa icon={faX} />
            </span>
        </button>
    </div>
    <div class='card-content'>
        <div class='field has-addons'>
            <div class="control is-expanded">
                <input bind:value={links[index]} class="input" type="text" placeholder="Paste a link to a CodeVA lesson..." />
            </div>
            <div class='control'>
                <button on:click={load} class='button is-primary'>
                    <span class='icon'>
                        <Fa icon={faDownload} />
                    </span>
                    <span>Load</span>
                </button>
            </div>
        </div>
    </div>
</article>

<style lang='scss'>
</style>