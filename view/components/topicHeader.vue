<template>
    <div class="topic-header">
        <h1 class="topic-title">lorem ipsum dot sit amet</h1>
        <div class="topic-toolbox-top">
            <div class="btn-group btn-group-sm">
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="shareDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        paylaş
                    </button>
                    <div class="dropdown-menu" aria-labelledby="shareDropdown">
                        <a class="dropdown-item" href="#"><i class="social-twitter"></i> twitter</a>
                        <a class="dropdown-item" href="#"><i class="social-facebook"></i> facebook</a>
                        <a class="dropdown-item" href="#"><i class="social-google"></i> google+</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="exploreDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        araştır
                    </button>
                    <div class="dropdown-menu" aria-labelledby="exploreDropdown">
                        <a class="dropdown-item" href="#">twitter</a>
                        <a class="dropdown-item" href="#">facebook</a>
                        <a class="dropdown-item" href="#">google+</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="filterDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        filtrele
                    </button>
                    <div class="dropdown-menu" aria-labelledby="filterDropdown">
                        <a class="dropdown-item" href="#">twitter</a>
                        <a class="dropdown-item" href="#">facebook</a>
                        <a class="dropdown-item" href="#">google+</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        kategori
                    </button>
                    <div class="dropdown-menu" aria-labelledby="searchDropdown">
                        <a class="dropdown-item" href="#">twitter</a>
                        <a class="dropdown-item" href="#">facebook</a>
                        <a class="dropdown-item" href="#">google+</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="bkzDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        bkzlar
                    </button>
                    <div class="dropdown-menu" aria-labelledby="bkzDropdown">
                        <a class="dropdown-item" href="#"><i class="social-twitter"></i> twitter</a>
                        <a class="dropdown-item" href="#"><i class="social-facebook"></i> facebook</a>
                        <a class="dropdown-item" href="#"><i class="social-google"></i> google+</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="settingsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        başlık ayarları
                    </button>
                    <div class="dropdown-menu" aria-labelledby="settingsDropdown">
                        <a class="dropdown-item" href="#">ayarlar</a>
                        <a class="dropdown-item" href="#">foto ekle</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TopicHeader'
    }
</script>


<style lang="postcss">


    .topic-title {
        font-size: 25px;
        margin-bottom: 10px;;
    }

    .topic-toolbox-top {
        margin-bottom: 20px;
        font-size: 13px !important;

        .btn {
            color: var(--topic-toolbox-btn-color);
            background-color: var(--topic-toolbox-btn-background);
            border-color: var(--topic-toolbox-btn-border-color);
            font-size: 13px;
        }

        .dropdown {
            margin-right: 5px;
        }

        .dropdown-item {
            font-size: 14px;
        }
    }

</style>