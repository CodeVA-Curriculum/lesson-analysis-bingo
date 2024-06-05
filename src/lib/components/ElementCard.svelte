<script lang='ts'>
    export let data;
    import {onMount} from 'svelte'
    import Fa from 'svelte-fa'
    import {faCloudArrowDown, faFolder, faFile, faSpinner} from '@fortawesome/free-solid-svg-icons'
    import {faGoogleDrive} from '@fortawesome/free-brands-svg-icons'
    import ElementButtons from './ElementButtons.svelte';
    
    let icon;
    let image;
    onMount(()=>{
        if(data.contents && data.contents.length > 0) {
            icon = faFolder
        } else {
            icon = faFile
        }

        image = data.image? data.image: 'https://curriculum.codevirginia.org/images/default.png'
    })
</script>

<div class='element-card card my-5'>
    <div class='card-content'>
        <div class='columns is-mobile'>
            <div class='column is-narrow'>
                <img 
                    alt="A logo for the {data.frontmatter.title} resource from CodeVA" 
                    src='https://curriculum.codevirginia.org/images/{data.frontmatter.image}' 
                >
            </div>
            <div class='column has-text-left'>
                <h2>
                    <a data-sveltekit-reload href="https://curriculum.codevirginia.org/library/browse/{data.frontmatter.pathData.path}">{data.frontmatter.title}</a>
                    <!-- <span class='tag is-light'>{data.subjects}</span> -->
                </h2>
                <p class='subtitle'>by {data.frontmatter.authors}</p>
                <ElementButtons meta={data.frontmatter} size={'is-small mx-1 px-2'}>
                    <a data-sveltekit-reload class='button is-small is-secondary mx-1 px-2' href="https://curriculum.codevirginia.org/library/browse/{data.frontmatter.pathData.path}">Read More</a>
                </ElementButtons>
            </div>
        </div>
    </div>
</div>

<style lang='scss'>
    .element-card:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }
    img {
        width: 92px;
        border-radius: 46px;
    }
    h2 {
        font-size: larger;
    }
    .tag {
        float: right;
    }
    .subtitle {
        font-size: 10pt;
        font-style: italic;
    }
</style>