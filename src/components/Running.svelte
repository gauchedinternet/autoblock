<script lang="ts">
    import {StorageSvelte} from "../libs/storage.svelte";
    import Button from "./Button.svelte";
    import * as AutoblockSvelte from "../libs/autoblock.svelte"
</script>

<div class="flex flex-col gap-2 items-center">
    <p>Comptes non bloqué : {StorageSvelte.data.blocked}</p>
    <p>Comptes non bloqués : {StorageSvelte.data.notBlocked}</p>
    <p>Comptes en attente : {StorageSvelte.data.account.length}</p>
    <div class="flex justify-center gap-2">
        <Button on:click={() => AutoblockSvelte.startPause()}>
            {StorageSvelte.data.state ? "Pause" : "Lancer" }
        </Button>
        <Button on:click={() => AutoblockSvelte.stop()}>Arrêter</Button>
    </div>
</div>