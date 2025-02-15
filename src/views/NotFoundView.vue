<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppContainer from '@/components/AppContainer.vue';

const {t} = useI18n();
</script>

<template>
    <AppContainer>
        <div class="app-main">
            <div class="error">
                <div class="error-code">404</div>
                <div class="error-message">{{ t('Page not found') }}</div>
            </div>
            <div class="description" :v-html="t('This page doesn\'t exist or was removed.<br>We suggest you back to home.')"></div>
            <RouterLink :to="{name: 'home'}" class="btn btn-primary">
                <i class="bi bi-arrow-left"></i>{{ t('Back to Home') }}
            </RouterLink>
        </div>
    </AppContainer>
</template>

<style scoped lang="scss">
    @use '@/assets/variables' as vars;
    @use '@/assets/mixins' as mxs;

    .app-main {
        margin: 2vh;
        padding: 2vh;
        background-color: vars.$app-white;
        box-shadow: 5px 5px 25px vars.$app-grey;
        display: flex;
        flex-direction: column;
        gap: 4vh;

        .error-code {
            font-weight: bold;
            font-size: 3em;
        }
        .error-message {
            font-weight: 500;
            font-size: 1.9em;
        }

        .btn {
            display: flex;
            gap: 2vh;
            border-radius: .5em;
            justify-content: center;

            @include mxs.desktopOnly {
                width: 250px;
            }
        }
    }
</style>