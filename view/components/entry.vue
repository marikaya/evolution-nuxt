<script>
    export default{
        name: 'Entry'
    }
</script>


<template>
    <div class="entry" data-eid="1">
        <div class="entry-item">
            <div class="entry-text">
                <p>annemin takıp çıkarmalı silikonlu memeleri var. çok garip. kullanıldığında biçimli dursalar da
                    dokunulduğunda sanki yoğun kıvamda
                    bir şey varmış gibi bir his bırakıyor insana. dokunduğum ne ki diyor insan.</p>

                <p>bir sabah uyandığımda annem gelmiş "bak memelerim nasıl?" demişti. bir de arsızca dokunabilir miyim
                    demiştim de annem elimi tuttuğu gibi silikonlu memesine götürmüştü.
                    eskiden olsa döverdi de şimdi artık ses çıkarmıyor.</p>

                <p>ben de meme olmadığı için evin içinde bazen ayna karşısında acaba nasıl olurdu diye annemden
                    izinsiz çaktırmadan takıp takıp bakıyorum. gövdemin biçimi gereği maalesef
                    hiç yakışmadı. ancak sütyen içinde giyindiğinde aynı görüntüyü vermiyor tabii. şu sıralar evin
                    mevzusu meme estetiği yaptırmak. annem ısrarla meme istese de doktorlar
                    pek tavsiye etmiyor. ben de istemiyorum açıkçası. bunun da ameliyatı, bakımı, gerekli işlemleri
                    yorucu.</p>

                <p>ilerde ben silikon meme yaptırır mıyım? hayır. asıllarıyla anlaşabilirim pekala.</p>
            </div>
            <div class="entry-meta">
                <div class="entry-meta-left">
                    <a href="#"><i class="icon-like" data-toggle="tooltip" data-placement="bottom" data-title="ver şukuyu" data-original-title="" title=""></i> </a>
                    <a href="#"><i class="icon-dislike" data-toggle="tooltip" data-placement="bottom" data-title="verme şukuyu" data-original-title="" title=""></i> </a>
                    <a href="#"><i class="icon-heart" data-toggle="tooltip" data-placement="bottom" data-title="kalp" data-original-title="" title=""></i> </a>
                    <a href="#"><i class="icon-pie-chart" data-toggle="tooltip" data-placement="bottom" data-title="kaleyi bulan şut" data-original-title="" title=""></i> </a>
                </div>
                <div class="entry-meta-right">
                    <a href="#">#5156156</a>
                    <a href="#"><strong>karamürselli deli hamdi</strong> — 3 ay önce</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="postcss">

    .entry {
        margin-bottom: 10px;
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: var(--entry-background-color);
        background-clip: border-box;
        border-radius: .25rem;
    }

    .entry-item {
        flex: 1 1 auto;
        padding: 1.25rem;
    }

    .entry-text {
        text-transform: lowercase;
    }

    .entry-meta {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .entry-meta-left {
        display: flex;
        margin-right: 10px;

        a {
            color: var(--entry-meta-left-link);
            margin-right: 15px;

            &:hover {
                color: var(--entry-meta-left-link-hover);
            }
        }
    }

    .entry-meta-right {
        display: flex;

        a {
            color: var(--entry-meta-right-link);
            margin-left: 15px;

            &:hover {
                color: var(--entry-meta-right-link-hover);
            }
        }
    }


</style>