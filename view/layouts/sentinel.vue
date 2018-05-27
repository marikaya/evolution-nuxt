<template>
    <div class="app">
        <div class="container">
            <nuxt></nuxt>
        </div>
    </div>
</template>

<script>

    export default {
        middleware: 'authorization'
    }
</script>
