<script lang="ts">
    import {StorageSvelte} from "../libs/storage.svelte.js";
    import Button from "./Button.svelte";
    import {configs} from "../libs/config.js";
</script>

<h2>
    Choisissez votre liste de bloquage
</h2>
<div class="flex gap-1">
    <div class="flex flex-col gap-2 flex-1">
        <h3>Parmi nos listes</h3>

        {#each Object.values(configs) as item }
            <Button on:click={() => StorageSvelte.loadFromKey(item.key)}>{item.name}</Button>
        {/each}
    </div>
    <span class="border-l-2 border-black h-full"></span>
    <div class="flex flex-col gap-2 flex-1">
        <h3>Avec votre propre liste</h3>

        <label class="flex flex-col items-center justify-center w-full p-2 border-2 border-default border-dashed rounded-lg cursor-pointer"
               for="dropzone-file">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-8 h-8 mb-4 text-gray-500" fill="none"
                     viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500">Cliquez pour envoyer votre fichier ou glissez-le ici</p>
                <p class="text-xs text-gray-500">CSV</p>
            </div>
            <input class="hidden" id="dropzone-file" on:input={(e) => StorageSvelte.loadFromInputFile(e)} type="file"/>
        </label>
    </div>
</div>