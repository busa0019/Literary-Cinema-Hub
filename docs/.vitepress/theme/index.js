import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue'; 
import { useRoute } from 'vitepress'; 
import './styles/custom.css';

import { initializeFilter } from './bookFilterSetup.js'; // <-- Import the fix

export default {
    ...DefaultTheme,
    setup() {
        const route = useRoute();
        
        onMounted(() => {
            nextTick(initializeFilter);
        });

        watch(
            () => route.path,
            () => {
                nextTick(initializeFilter);
            }
        );
    }
};