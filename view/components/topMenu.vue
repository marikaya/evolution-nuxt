<template>
    <div class="header-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <ul class="header-bottom-left">
                        <li><a href="#">gündem</a></li>
                        <li><a href="#">ükde</a></li>
                        <li><a href="#">diğer</a></li>
                        <li><a href="#">spor</a></li>
                        <li><a href="#">sanat</a></li>
                        <li><a href="#">politika</a></li>
                        <li><a href="#">gündem</a></li>
                        <li><a href="#">ükde</a></li>
                        <li><a href="#">diğer</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <ul class="header-bottom-right">
                        <li><a @click="switchWhiteTheme" href="#" class="theme-link" data-theme="white">beyaz</a> </li>
                        <li><a @click="switchDarkTheme"  href="#" class="theme-link" data-theme="dark">gece</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    function switchWhiteTheme() {
        let bg_color = "#f8f8f8";
        let logo_color = "#697384";
        let text_color = "#697384";
        let link_color = "#323232";
        let link_hover_color = "#181818";
        let navbar_background_color = "#fff";
        let navbar_bottom_color = "#fff";
        let navbar_link_color = "#5e5e5e";
        let search_box_background = "#f8f8f8";
        let search_box_hover = "#dfdfdf";
        let search_color = "#f8f8f8";
        let search_icon_background = "#5f5f5f";
        let header_bottom_border_color = "#f7f7f7";
        let header_bottom_link_hover = "#f9f9f9";
        let refresh_topic_list_color = "gray";
        let topic_list_link_hover = "#f9f9f9";
        let notification_background = "#3880ff";
        let notification_color = "white";
        let input_border_color = "#292929";
        let input_background_color = "#f8f8f8";
        let input_color = "#cbcbcb";
        let left_side_background = "#fff";
        let topic_list_header_background = "transparent";
        let topic_list_border = "#f2f2f2";
        let topic_toolbox_btn_color = "#636363";
        let topic_toolbox_btn_background = "white";
        let topic_toolbox_btn_border_color = "#e0e0e0";
        let entry_meta_left_link = "#b0b0b0";
        let entry_meta_left_link_hover = "#434343";
        let entry_meta_right_link = "#b0b0b0";
        let entry_meta_right_link_hover = "#434343";
        let entry_background_color = "#fff";

        document.documentElement.style.setProperty('--bg-color', bg_color);
        document.documentElement.style.setProperty('--logo-color', logo_color);
        document.documentElement.style.setProperty('--text-color', text_color);
        document.documentElement.style.setProperty('--link-color', link_color);
        document.documentElement.style.setProperty('--link-hover-color', link_hover_color);
        document.documentElement.style.setProperty('--navbar-background-color', navbar_background_color);
        document.documentElement.style.setProperty('--navbar-bottom-color', navbar_bottom_color);
        document.documentElement.style.setProperty('--navbar-link-color', navbar_link_color);
        document.documentElement.style.setProperty('--search-box-background', search_box_background);
        document.documentElement.style.setProperty('--search-box-hover', search_box_hover);
        document.documentElement.style.setProperty('--search-color', search_color);
        document.documentElement.style.setProperty('--search-icon-background', search_icon_background);
        document.documentElement.style.setProperty('--header-bottom-border-color', header_bottom_border_color);
        document.documentElement.style.setProperty('--header-bottom-link-hover', header_bottom_link_hover);
        document.documentElement.style.setProperty('--refresh-topic-list-color', refresh_topic_list_color);
        document.documentElement.style.setProperty('--topic-list-link-hover', topic_list_link_hover);
        document.documentElement.style.setProperty('--notification-background', notification_background);
        document.documentElement.style.setProperty('--notification-color', notification_color);
        document.documentElement.style.setProperty('--input-border-color', input_border_color);
        document.documentElement.style.setProperty('--input-background-color', input_background_color);
        document.documentElement.style.setProperty('--input-color', input_color);
        document.documentElement.style.setProperty('--left-side-background', left_side_background);
        document.documentElement.style.setProperty('--topic-list-header-background', topic_list_header_background);
        document.documentElement.style.setProperty('--topic-list-border', topic_list_border);
        document.documentElement.style.setProperty('--topic-toolbox-btn-color', topic_toolbox_btn_color);
        document.documentElement.style.setProperty('--topic-toolbox-btn-background', topic_toolbox_btn_background);
        document.documentElement.style.setProperty('--topic-toolbox-btn-border-color', topic_toolbox_btn_border_color);
        document.documentElement.style.setProperty('--entry-meta-left-link', entry_meta_left_link);
        document.documentElement.style.setProperty('--entry-meta-left-link-hover', entry_meta_left_link_hover);
        document.documentElement.style.setProperty('--entry-meta-right-link', entry_meta_right_link);
        document.documentElement.style.setProperty('--entry-meta-right-link-hover', entry_meta_right_link_hover);
        document.documentElement.style.setProperty('--entry-background-color', entry_background_color);
    }

    function switchDarkTheme() {
        let bg_color = "#202225";
        let logo_color = "#c6c7c8";
        let text_color = "#bbbbbb";
        let link_color = "#dfdfdf";
        let link_hover_color = "#fff";
        let navbar_background_color = "#2f3136";
        let navbar_bottom_color = "#292b2f";
        let navbar_link_color = "#fffff3";
        let search_box_background = "#484b51";
        let search_box_hover = "#3f4247";
        let search_icon_background = "#5f5f5f";
        let header_bottom_border_color = "#313438";
        let header_bottom_link_hover = "#484b51";
        let refresh_topic_list_color = "gray";
        let topic_list_link_hover = "#313438";
        let notification_background = "#575b63";
        let notification_color = "white";
        let input_border_color = "#292929";
        let input_background_color = "#f8f8f8";
        let input_color = "#cbcbcb";
        let left_side_background = "#202225";
        let topic_list_header_background = "transparent";
        let topic_list_border = "#2b2e32";
        let topic_toolbox_btn_color = "#8e8e8e";
        let topic_toolbox_btn_background = "#2f3136";
        let topic_toolbox_btn_border_color = "#313438";
        let entry_meta_left_link = "#b0b0b0";
        let entry_meta_left_link_hover = "#434343";
        let entry_meta_right_link = "#b0b0b0";
        let entry_meta_right_link_hover = "#434343";
        let entry_background_color = "#2a2c30";

        document.documentElement.style.setProperty('--bg-color', bg_color);
        document.documentElement.style.setProperty('--logo-color', logo_color);
        document.documentElement.style.setProperty('--text-color', text_color);
        document.documentElement.style.setProperty('--link-color', link_color);
        document.documentElement.style.setProperty('--link-hover-color', link_hover_color);
        document.documentElement.style.setProperty('--navbar-background-color', navbar_background_color);
        document.documentElement.style.setProperty('--navbar-bottom-color', navbar_bottom_color);
        document.documentElement.style.setProperty('--navbar-link-color', navbar_link_color);
        document.documentElement.style.setProperty('--search-box-background', search_box_background);
        document.documentElement.style.setProperty('--search-box-hover', search_box_hover);
        document.documentElement.style.setProperty('--search-icon-background', search_icon_background);
        document.documentElement.style.setProperty('--header-bottom-border-color', header_bottom_border_color);
        document.documentElement.style.setProperty('--header-bottom-link-hover', header_bottom_link_hover);
        document.documentElement.style.setProperty('--refresh-topic-list-color', refresh_topic_list_color);
        document.documentElement.style.setProperty('--topic-list-link-hover', topic_list_link_hover);
        document.documentElement.style.setProperty('--notification-background', notification_background);
        document.documentElement.style.setProperty('--notification-color', notification_color);
        document.documentElement.style.setProperty('--input-border-color', input_border_color);
        document.documentElement.style.setProperty('--input-background-color', input_background_color);
        document.documentElement.style.setProperty('--input-color', input_color);
        document.documentElement.style.setProperty('--left-side-background', left_side_background);
        document.documentElement.style.setProperty('--topic-list-header-background', topic_list_header_background);
        document.documentElement.style.setProperty('--topic-list-border', topic_list_border);
        document.documentElement.style.setProperty('--topic-toolbox-btn-color', topic_toolbox_btn_color);
        document.documentElement.style.setProperty('--topic-toolbox-btn-background', topic_toolbox_btn_background);
        document.documentElement.style.setProperty('--topic-toolbox-btn-border-color', topic_toolbox_btn_border_color);
        document.documentElement.style.setProperty('--entry-meta-left-link', entry_meta_left_link);
        document.documentElement.style.setProperty('--entry-meta-left-link-hover', entry_meta_left_link_hover);
        document.documentElement.style.setProperty('--entry-meta-right-link', entry_meta_right_link);
        document.documentElement.style.setProperty('--entry-meta-right-link-hover', entry_meta_right_link_hover);
        document.documentElement.style.setProperty('--entry-background-color', entry_background_color);
    }

    export default {
        name: 'TopMenu',
        methods: {
            switchDarkTheme, switchWhiteTheme
        }

    }
</script>
<style lang="postcss">

    .header-bottom {
        padding-top: 62px;
        z-index: 1;
        position: fixed;
        width: 100%;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04);
        background-color: var(--navbar-bottom-color);

        ul {
            margin: 0;
            padding: 0;
            display: flex;

            li {
                list-style-type: none;
                border-right: solid 1px var(--header-bottom-border-color);

                a {
                    display: block;
                    padding: 10px;

                    &:hover {
                        background-color: var(--header-bottom-link-hover);
                    }
                }

                &:first-child {
                    border-left: solid 1px var(--header-bottom-border-color);
                }
            }
        }
    }

    .header-bottom-left {
        justify-content: flex-start;
    }

    .header-bottom-right {
        justify-content: flex-end;
    }


</style>