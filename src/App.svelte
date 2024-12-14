<script lang="ts">
    import * as AutoblockSvelte from "./libs/autoblock.svelte"
    import {StorageSvelte} from "./libs/storage.svelte";
    import {draggable} from '@neodrag/svelte';
    import Home from "./components/Home.svelte";
    import Header from "./components/Header.svelte";
    import Running from "./components/Running.svelte";
    import './app.css';
    import { fade,slide } from 'svelte/transition'

    AutoblockSvelte.init()

    let handleEl: HTMLElement;
</script>

<div class="fixed z-[10000] inset-0 max-w-xs h-fit rounded-lg ring-gray-900 ring shadow-lg bg-container text-default"
     use:draggable={{defaultPosition:{x:20,y:20}, handle: handleEl}}>
    <Header bind:me={handleEl}></Header>
    {#if StorageSvelte.data.hide  }
        <div class="p-4 space-y-4" in:slide={{duration: 150}} out:slide={{duration: 150}}>
            {#if StorageSvelte.data.loaded}
                <Running></Running>
            {:else}
                <Home></Home>
            {/if}
        </div>
    {/if}
</div>