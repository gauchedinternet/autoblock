<script lang="ts">
    import {AutoblockSvelte} from "./libs/autoblock.svelte"
    import {StorageSvelte} from "./libs/storage.svelte";
    import { draggable } from '@neodrag/svelte';
    import Home from "./components/Home.svelte";
    import Header from "./components/Header.svelte";
    import Running from "./components/Running.svelte";
    import './app.css';

    AutoblockSvelte.init()

</script>

<div use:draggable={{defaultPosition:{x:20,y:20}}} id="default-modal" tabindex="-1" aria-hidden="true" class="cursor-move overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <Header></Header>
            <!-- Modal body -->
            <div class="p-4 space-y-4">
                {StorageSvelte.data.loaded}
                {#if StorageSvelte.data.loaded}
                    <Running></Running>
                {:else}
                    <Home></Home>
                {/if}
            </div>
        </div>
    </div>
</div>