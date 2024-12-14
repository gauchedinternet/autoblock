import App from './App.svelte';
import {mount} from 'svelte';

mount(App, {
    target: (() : HTMLDivElement => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        return div;
    })(),
});
