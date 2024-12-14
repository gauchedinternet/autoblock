<script lang="ts">
    import {StorageSvelte} from "../libs/storage.svelte";
    import Button from "./Button.svelte";
    import * as AutoblockSvelte from "../libs/autoblock.svelte"
</script>

<div>
    <p class="text-black w-full m-0 p-2.5">Blocked : {StorageSvelte.data.blocked}</p>
    <p class="text-black w-full m-0 p-2.5">Not Blocked : {StorageSvelte.data.notBlocked}</p>
    <p class="text-black w-full m-0 p-2.5">Remaining : {StorageSvelte.data.account.length}</p>
    <Button on:click={() => AutoblockSvelte.startPause()}>Lancer / Pause</Button>
    <Button on:click={() => AutoblockSvelte.stop()}>Arrêter</Button>
</div>