<script lang="ts">
    import {Autoblock} from "./libs/autoblock"
    import {Storage} from "./libs/storage";

    Storage.init()
    Autoblock.init()

    let hidden = Storage.data.hide

    function hide() {
        Storage.data.hide = !Storage.data.hide
        hidden = Storage.data.hide
        Storage.save()
    }
</script>

<button on:click={hide}
        style="width: 32px;height: 32px;position: absolute; top:60px; right: 20px; background-color:#fff; box-shadow: 0 4px 8px #00000019; border-radius: 8px; z-index: 1000000">
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="12"/>
        <circle cx="128" cy="60" r="12"/>
        <circle cx="128" cy="196" r="12"/>
    </svg>
</button>

{#if !hidden}
    <div style="position: fixed; top: 100px; display: block; right: 20px; width: 250px; background-color: #fff; box-shadow: #00000019 0px 4px 8px; padding: 10px; border-radius: 8px; z-index: 1000000;">
        <h3 style="text-align: center; margin-bottom: 10px; color: #333;">Block List Manager</h3>

        <input style="width: 100%; margin-top: 10px;" type="file" on:input={(e) => Storage.loadFromInputFile(e)}>
        <button on:click={() => Autoblock.startStopResume()}
                style="background-color:#FE2C55; color: #fff; border: none; padding: 10px; margin-top: 5px; width: 100%; border-radius: 5px; cursor: pointer;">
            Start / Stop
        </button>
        <p style="color:#000; padding: 10px; margin: 0px; width: 100%;">Blocked : {Storage.data.blocked}</p>
        <p style="color:#000; padding: 10px; margin: 0px; width: 100%;">Not Blocked : {Storage.data.notBlocked}</p>
        <p style="color:#000; padding: 10px; margin: 0px; width: 100%;">Remaining : {Storage.data.account.length}</p>
    </div>
{/if}