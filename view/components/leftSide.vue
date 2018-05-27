<template>
    <div class="">
        <div class="topic-list-header">
            <strong>gündem</strong>
            <a class="refresh-topic-list" href="#">
                <i class="icon-refresh"></i>
            </a>
            <span class="title-count">150/514</span>
        </div>
        <ul class="topic-list">
            <li><a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="30 kişi okumuş">çay tiryakisi <span class="read-count">25</span> </a></li>
            <li><a href="#">downtown<span class="read-count">25</span> </a></li>
            <li><a href="#">xanthippe<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos hakkında öneriler<span class="read-count">25</span> </a></li>
            <li><a href="#">çocuk eğitiminde yapılan hatalar<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos yazarlarının merak ettikleri<span class="read-count">25</span> </a></li>
            <li><a href="#">fabrika ayarlarına dönmek<span class="read-count">25</span> </a></li>
            <li><a href="#">çay tiryakisi <span class="read-count">25</span> </a></li>
            <li><a href="#">downtown<span class="read-count">25</span> </a></li>
            <li><a href="#">xanthippe<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos hakkında öneriler<span class="read-count">25</span> </a></li>
            <li><a href="#">çocuk eğitiminde yapılan hatalar<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos yazarlarının merak ettikleri<span class="read-count">25</span> </a></li>
            <li><a href="#">fabrika ayarlarına dönmek<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos hakkında öneriler<span class="read-count">25</span> </a></li>
            <li><a href="#">çocuk eğitiminde yapılan hatalar<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos yazarlarının merak ettikleri<span class="read-count">25</span> </a></li>
            <li><a href="#">fabrika ayarlarına dönmek<span class="read-count">25</span> </a></li>
            <li><a href="#">çay tiryakisi <span class="read-count">25</span> </a></li>
            <li><a href="#">downtown<span class="read-count">25</span> </a></li>
            <li><a href="#">xanthippe<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos hakkında öneriler<span class="read-count">25</span> </a></li>
            <li><a href="#">çocuk eğitiminde yapılan hatalar<span class="read-count">25</span> </a></li>
            <li><a href="#">kulzos yazarlarının merak ettikleri<span class="read-count">25</span> </a></li>
            <li><a href="#">fabrika ayarlarına dönmek<span class="read-count">25</span> </a></li>
            <li><a href="#">çay tiryakisi <span class="read-count">25</span> </a></li>
            <li><a href="#">downtown<span class="read-count">25</span> </a></li>
        </ul>
    </div>
</template>

<style lang="postcss">

    .title-count {
        font-size: 13px;
        margin: 4px 2px 0 0;
        opacity: 0.6;
    }

    .read-count {
        font-size: 11px;
        bottom: 0;
        display: inline-block;
        border-radius: 50%;
        min-width: 18px;
        text-align: center;
        position: absolute;
        right: 0px;
        opacity: 0.6;
    }


    .topic-entry-list {
        padding: 10px 0;
    }
    .topic-list {
        height: 100vh;
        margin: 0;
        padding: 0;
        li {
            border-bottom: solid 1px var(--topic-list-border);
            list-style-type: none;
            position: relative;

            a {
                display: block;
                padding: 8px 0 8px 8px;

                &:hover {
                    background-color: var(--topic-list-link-hover);
                }

            }
        }
    }


    .topic-list-header {
        background: var(--topic-list-header-background);
        font-size: 16px;
        padding: 8px 0 8px 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        p {
            margin: 0
        }
    }


    .refresh-topic-list {
        margin: 0 10px;
        position: relative;
        top: 3px;

        path {
            fill: var(--refresh-topic-list-color);
        }
    }


</style>

<script>
 export default {
     name: 'LeftSide'
 }
</script>
