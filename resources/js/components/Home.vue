<template>
    <div class="card text-white bg-primary" style="border: unset;border-radius:unset">
        <div class="card-header">Probably Header</div>
        <div class="card-body">
            <h5 class="card-title">Probably card title</h5>
            <p class="card-text">If you see it blue and properly, then bootstrap and vue.js have been successfully
                installed.<br/> If you are a skeptic person, check if the drop-down menu works.</p>
            <div class="dropdown">
                <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown Menu for Skeptic Person
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li v-for="(dropdown_content,index) in dropdown_contents" :key="index">
                        <a class="dropdown-item" href="https://twitter.com/MertcanMerkit"
                           target="_blank">{{ dropdown_content.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdown_contents: [
                {text: 'Thanks for'},
                {text: 'not trusting me.'},
            ]
        }
    },

}
</script>

<style scoped>

</style>
