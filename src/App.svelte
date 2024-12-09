<script lang="ts">
  import {Autoblock} from "./libs/autoblock"
  import {Storage} from "./libs/storage";
  import {onMount} from "svelte"

  let blocked = 0
  let notBlocked = 0
  let toBeBlocked = 0
  let hidden = false

  onMount(() => {
      Autoblock.init()

      blocked = Storage.data.blocked
      notBlocked = Storage.data.notBlocked
      toBeBlocked = Storage.data.account.length
      hidden = Storage.data.hide

  })

  function hide() {
    Storage.data.hide = !Storage.data.hide
    hidden = Storage.data.hide
    Storage.save()
  }
</script>

<button on:click={hide} style="width: 32px;height: 32px;position: absolute; top:60px; right: 20px; background-color:#ffffff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px; z-index: 1000000">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="128" cy="196" r="12"/></svg>
</button>

{#if !hidden}
  <div style="position: fixed; top: 100px; display: block; right: 20px; width: 250px; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px; padding: 10px; border-radius: 8px; z-index: 1000000;">
      <h3 style="text-align: center; margin-bottom: 10px; color: rgb(51, 51, 51);">Block List Manager</h3>

      <input style="width: 100%; margin-top: 10px;" type="file" on:input={(e) => Storage.loadFromInputFile(e)}>
      <button on:click={() => Autoblock.startStopResume()} style="background-color: rgb(254, 44, 85); color: white; border: none; padding: 10px; margin-top: 5px; width: 100%; border-radius: 5px; cursor: pointer;">
          Start / Stop
      </button>
      <p style="color: black; padding: 10px; margin: 0px; width: 100%;">Blocked : {blocked}</p>
      <p style="color: black; padding: 10px; margin: 0px; width: 100%;">Not Blocked : {notBlocked}</p>
      <p style="color: black; padding: 10px; margin: 0px; width: 100%;">Remaining : {toBeBlocked}</p>
  </div>
{/if}