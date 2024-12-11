import App from './App.svelte';
import { mount } from 'svelte';

const app = mount(App, { target: (() => {
        const app = document.createElement('div');
        document.body.append(app);
        return app;
    })(), });

export default app;
