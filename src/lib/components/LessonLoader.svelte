<script lang='ts'>
    import ElementCard from "./ElementCard.svelte";
    import LessonSearch from "./LessonSearch.svelte";
    import TagCard from "./TagCard.svelte";

    export let links:string[] = [""]
    export let index:number=0
    export let data:object = {}
    export let url = ""

    function addLink() {
        links = [...links, ""]
    }

    function removeLink(i:number) {
        links.splice(i, 1)
        links = [...links]
    }
    
    async function loadElement(linkData:any) {
        const res = await (await fetch(linkData.url)).json()
        console.log(res)
        data[linkData.link] = res

        url = getURL()
    }

    function getURL():string {
        const params = new URLSearchParams()
        for(let i=0;i<links.length;i++) {
            params.append('e', links[i].replace('https://curriculum.codevirginia.org/library/browse/', ''))
        }
        return params.toString()
    }
</script>

<div class='lesson-loader'>
    {#each links as link, i}
        {#if Object.hasOwn(data, link)}
            <div class='columns is-tablet'>
                <div class='column is-three-quarters'>
                    <ElementCard data={data[link]} />
                </div>
                <div class='column'>
                    <TagCard tags={data[link].frontmatter.tags} />
                </div>
            </div>
        {:else}
            <LessonSearch on:load={(e) => loadElement(e.detail)} on:delete={() => removeLink(i)} links={links} index={i} />
        {/if}
    {/each}
    <div class='columns is-mobile'>
        <div class='column'>
            <button on:click={addLink} class='button is-fullwidth'>
                Add Link
            </button>
        </div>
        <div class='column'>
            <button class='button is-fullwidth'>
                Add Custom Lesson
            </button>
        </div>
    </div>
</div>