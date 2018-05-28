<template>
    <header>
        <b-navbar class="main-navbar" toggleable="md">
            <b-container>

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#">
                    <svg id="kulzos-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.2 22.2">
                        <path class="kulzos-path"
                              d="M13.8 20c0 .5-.2 1-.6 1.4-.4.4-.9.7-1.5.7-.3 0-.6-.1-.9-.2-.3-.1-.6-.4-.8-.7l-3.6-5.3-1.9 2V20c0 .6-.2 1-.6 1.4-.3.4-.8.6-1.3.6-.6 0-1-.2-1.4-.6-.5-.4-.7-.8-.7-1.4V2.3c0-.6.2-1 .6-1.4S2 .3 2.6.3s1 .2 1.4.6.6.9.6 1.4v11l5.5-6.5c.4-.4.8-.6 1.4-.6.5 0 1 .2 1.3.6s.6.8.6 1.3c0 .4-.1.9-.4 1.2l-3.6 4.1 4.1 5.4c.2.4.3.8.3 1.2zM29.9 21.4c-.4.4-.9.6-1.5.6s-1-.2-1.4-.6-.6-.9-.6-1.4v-.1c-.5.6-1.3 1.1-2.2 1.6-.9.5-2 .7-3.3.7-1.7 0-3-.4-3.8-1.3s-1.2-2.1-1.2-3.6V8.2c0-.6.2-1 .6-1.4.5-.4.9-.6 1.5-.6s1 .2 1.4.6c.4.3.6.8.6 1.4v7.6c0 .5.1 1 .2 1.3.1.4.3.7.6.9s.5.4.9.5.7.1 1.2.1c.8 0 1.5-.2 2.1-.5s1.1-.8 1.4-1.2V8.2c0-.6.2-1 .6-1.4s.9-.6 1.5-.6 1 .2 1.4.6.6.9.6 1.4V20c0 .6-.2 1-.6 1.4zM36.3 21.4c-.4.4-.9.6-1.5.6s-1-.2-1.4-.6c-.4-.4-.6-.8-.6-1.4V2.3c0-.6.2-1 .6-1.4.4-.4.9-.6 1.5-.6s1 .2 1.4.6.6.9.6 1.4V20c0 .6-.2 1-.6 1.4zM51.3 20c0 .5-.2.9-.5 1.3s-.7.5-1.2.5h-9.2c-.5 0-1-.2-1.4-.6s-.6-.9-.6-1.5c0-.2 0-.5.1-.7l.3-.6 6.7-8.5h-5.4c-.5 0-.9-.2-1.2-.5-.3-.4-.5-.8-.5-1.3s.2-.9.5-1.2c.3-.3.8-.5 1.2-.5h9.1c.5 0 .9.2 1.3.6.4.4.6.8.6 1.4 0 .5-.1.9-.4 1.3l-6.8 8.6h5.7c.5 0 .9.2 1.2.5.4.3.5.7.5 1.2zM68.2 14.1c0 1.1-.2 2.2-.6 3.1-.4 1-.9 1.8-1.6 2.6-.7.7-1.6 1.3-2.6 1.8-1 .4-2.2.7-3.4.7-1.3 0-2.4-.2-3.4-.7s-1.9-1-2.6-1.8c-.7-.7-1.2-1.6-1.6-2.6-.4-1-.6-2-.6-3.1s.2-2.1.6-3.1c.4-1 .9-1.8 1.6-2.6.7-.7 1.6-1.3 2.6-1.8 1-.4 2.1-.6 3.4-.6s2.4.2 3.4.7c1 .4 1.9 1 2.6 1.8.7.7 1.2 1.6 1.6 2.6.4.9.6 1.9.6 3zm-4.3 0c0-.6-.1-1.2-.3-1.7s-.4-1-.8-1.4c-.3-.4-.7-.7-1.2-1-.5-.2-1-.4-1.7-.4-.6 0-1.2.1-1.7.4-.5.2-.9.6-1.2 1s-.6.9-.8 1.4-.3 1.1-.3 1.7c0 .6.1 1.2.3 1.7.2.5.4 1 .8 1.4.3.4.7.7 1.2 1 .5.2 1 .4 1.7.4.6 0 1.2-.1 1.7-.4.5-.2.9-.6 1.2-1s.6-.9.8-1.4c.2-.5.3-1.1.3-1.7zM81.8 17.3c0 .7-.1 1.4-.4 2s-.7 1.1-1.3 1.6c-.6.4-1.3.8-2.1 1s-1.8.4-2.8.4c-.5 0-1.1 0-1.7-.1s-1.2-.2-1.8-.4c-.6-.2-1.1-.4-1.6-.6s-.9-.6-1.1-.9-.3-.5-.3-.9c0-.5.2-.9.5-1.2.4-.3.7-.5 1.2-.5.3 0 .6.1.8.2.6.4 1.3.7 2 .9.7.2 1.4.4 2.1.4.9 0 1.6-.2 2-.5s.6-.7.6-1.2c0-.4-.2-.7-.7-1-.5-.2-1-.4-1.7-.5s-1.4-.3-2.2-.5c-.8-.2-1.5-.4-2.2-.8-.7-.3-1.2-.8-1.7-1.4-.5-.6-.7-1.4-.7-2.4 0-.6.1-1.3.4-1.8.3-.6.7-1.1 1.2-1.6.5-.4 1.2-.8 2-1.1.8-.3 1.7-.4 2.7-.4.5 0 1.1 0 1.6.1.6.1 1.1.2 1.6.4s1 .4 1.4.6.7.5 1 .8c.2.2.3.5.3.8 0 .4-.2.8-.5 1.1s-.7.4-1.1.4c-.3 0-.6-.1-.8-.2-.5-.3-1-.5-1.6-.7s-1.2-.2-1.8-.2c-.7 0-1.3.1-1.8.4-.4.3-.7.7-.7 1.1 0 .4.2.7.7.9.4.2 1 .4 1.7.5s1.4.3 2.2.5 1.5.5 2.2.8 1.2.9 1.7 1.5c.4.6.7 1.4.7 2.5z"></path>
                    </svg>
                </b-navbar-brand>

                <b-nav-form class="top-search-form">
                    <b-form-input class="top-search mr-sm-2" size="sm" type="text"
                                  placeholder="başlık, #girdi, *kategori ya da @yazar"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>

                </b-nav-form>

                <b-collapse is-nav id="nav_collapse">
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <ul class="navbar-nav ml-auto justify-content-end text-right header-user-bar">
                            <b-nav-item-dropdown>
                                <template slot="button-content">
                                    <i class="icon-envelope"></i>
                                </template>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>


                            <b-nav-item-dropdown>
                                <template slot="button-content">
                                    <span class="notification-count">1</span>
                                    <i class="icon-bell"></i>
                                </template>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <b-nav-item-dropdown>
                                <template slot="button-content">
                                    <i class="icon-feed"></i>
                                </template>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item-dropdown>
                                <template slot="button-content">
                                    <i class="icon-people"></i>
                                </template>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item-dropdown>
                                <template class="dropdown-menu-right" slot="button-content">
                                    <i class="icon-user"></i>
                                </template>
                                <nuxt-link class="dropdown-item" to="/login">
                                        Giris
                                </nuxt-link>

                                <nuxt-link href="#" role="menuitem" target="_self" class="dropdown-item" to="/register">
                                    Kayit
                                </nuxt-link>


                            </b-nav-item-dropdown>
                        </ul>

                    </b-navbar-nav>

                </b-collapse>
            </b-container>

        </b-navbar>
    </header>
</template>


<script>
    export default {
        name: 'Header'
    };
</script>

<style lang="postcss">

    header {
        position: fixed;
        z-index: 2;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .05);
    }

    .top-search-form {
        margin-left: 35px;
    }

    input.form-control {
        outline: none;
        background-color: var(--search-box-background);
        color: var(--input-color);
        font-family: 'LatoLatinWeb', sans-serif;
        border: var(--input-border-color);
        font-weight: bold;
        min-width: 400px;
        padding: .65rem;
        margin-right: 10px;
        box-shadow: none;
        transition: background-color 0.3s;

        &:hover, &:active, &:focus {
            outline: none;
            transition: background-color 0.3s;
            box-shadow: none;
            background-color: var(--search-box-hover);
        }
    }

    .navbar-brand {
        font-size: inherit;
        padding: 0;
    }

    .main-navbar {
        background-color: var(--navbar-background-color);
    }

    .navbar-brand {
        margin-right: 125px;
    }

    .navbar .btn {
        padding: .75rem;
    }

    #kulzos-logo {
        opacity: 0.9;
        transition: 0.3s;
        width: 90px;

        &:hover {
            opacity: 1;

        }
    }

    .kulzos-path {
        fill: var(--logo-color);
    }

    .navbar-search-btn {
        .btn {
            padding: 0.40rem;
            min-width: 50px;
        }

        svg {
            top: 3px;
            position: relative;
        }
    }

    .header-search-icon {
        font-size: 20px;
        background-color: var(--search-icon-background);
    }

    .header-user-bar {
        li {
            position: relative;
        }
        a:not(.dropdown-item) {
            font-size: 22px;
            margin-left: 20px;
            color: var(--navbar-link-color);
            top: 3px;
            position: relative;
        }
        .dropdown-toggle::after {
            border: none;
            margin: 0;
        }
    }

    .notification-count {
        background: var(--notification-background);
        color: var(--notification-color);
        border-radius: 50%;
        height: 20px;
        line-height: 16px;
        font-size: 11px;
        font-weight: 900;
        width: 21px;
        text-align: center;
        display: inline-block;
        position: absolute;
        right: 1px;
        border: solid 2px var(--navbar-background-color);
        top: -3px;
        z-index: 1;
    }


</style>
