<script lang="ts">
    import {StorageSvelte} from "../libs/storage.svelte.js";
    import Button from "./Button.svelte";
    import {configs} from "../libs/config.js";
</script>

<h2>
    Choisissez votre liste de bloquage
</h2>
<div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2 flex-1">
        <h3>Parmi nos listes</h3>

        <div class="grid grid-cols-2 gap-2">
            {#each Object.values(configs) as item }
                <Button on:click={() => StorageSvelte.loadFromKey(item.key)}>{item.name}</Button>
            {/each}
        </div>

    </div>

    <div class="flex items-center gap-2">
        <hr class="flex-1">
        Ou
        <hr class="flex-1">
    </div>

    <div class="flex flex-col gap-2 flex-1">
        <h3>Avec votre propre liste</h3>

        <label class="text-center text-sm text-primary hover:text-primary-bis flex flex-col gap-2 items-center p-4 border-2 border-dashed rounded-lg cursor-pointer" for="dropzone-file">
            <svg class="w-8 h-8 fill-none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                <path class="stroke-2 stroke-current" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Cliquez pour envoyer votre fichier ou glissez-le ici
            <input class="hidden" id="dropzone-file" on:input={(e) => StorageSvelte.loadFromInputFile(e)} type="file" accept="text/csv"/>
        </label>
    </div>
</div>