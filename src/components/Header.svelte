<script lang="ts">
    import {StorageSvelte} from "../libs/storage.svelte.js";

    let {me = $bindable()} = $props();

    function hide() {
        StorageSvelte.data.hide = !StorageSvelte.data.hide
        StorageSvelte.save()
    }
</script>

<div bind:this={me} class="cursor-move flex items-center justify-between p-4 border-b border-b-gray-900 gap-4">
    <h1>
        {process.env.NAME} {process.env.VERSION}
    </h1>
    <button aria-label="close" class="p-2 rounded-lg hover:bg-gray-200 hover:text-gray-900" onclick={hide}>
        <svg aria-hidden="true" class="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"/>
        </svg>
    </button>
</div>