<script lang='ts'>
    import LessonLoader from "$lib/components/LessonLoader.svelte";
    import { base } from '$app/paths'
    import CompiledTags from "$lib/components/CompiledTags.svelte";

    let url = ""
    
</script>
<div class='section'>
    <div class='container content'>
        <h1>Lesson Analysis Bingo Generator</h1>
        <p>This tool allows you to generate "bingo" sheets for the CodeVA <i>Lesson Analysis Bingo</i> activity included in some of our professional learning courses. Use the form fields below to add lessons to the analysis activity. The program compiles the tags associated with each lesson plan and generates a "bingo" sheet where each lesson can make "bingo" if a participant identifies the elements present in the lesson. If there are not enough tags in common for the lessons to share one "bingo" sheet, the program will generate a single sheet for each lesson.</p>
        <hr>
        <div class='columns is-tablet'>
            <div class='column is-three-fifths'>
                <CompiledTags />
            </div>
            <div class='column'>
                <a href="{base}/generator?{url.toString()}" class='button generate is-large is-fullwidth is-primary'>
                    Generate!
                </a>
                <aside class='message my-3'>
                    <!-- <div class='message-header'>
                        Lorem ipsum
                    </div> -->
                    <div class='message-body'>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</div>
<div class='section'>
    <div class='container'>
        <LessonLoader bind:url={url} />
    </div>
</div>

<style lang='scss'>
    .generate {
        height: 5rem;
    }
    .message {
        height: 4rem;
    }
</style>