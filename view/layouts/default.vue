<template>
    <div>
        <Header/>
        <TopMenu/>
        <section class="content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="flex-container">
                            <div class="left-content">
                                <LeftSide/>
                            </div>
                            <div class="right-content">
                                <nuxt></nuxt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import TopMenu from "../components/topMenu";
    import Header from "../components/header";
    import LeftSide from "../components/leftSide";

    export default {
        components: {LeftSide, Header, TopMenu}
    }
</script>


<style lang="postcss">

    .content {
        padding-top: 106px;
    }

    .flex-container {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .left-content {
        flex: 1 1 20%;
        max-width: 20%;
        background-color: var(--left-side-background);
    }

    .right-content {
        flex: 1 1 80%;
        max-width: 80%;
        padding: 15px 0 15px 20px;
    }

</style>