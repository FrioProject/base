<svelte:head>
  <title>The Frio Project</title>
</svelte:head>

<main>
  <h1>Welcome to The Frio Project</h1>
  <p>Visit <a href="https://github.com/FrioProject/base">our repo</a> to read the documentation.</p>
  <fieldset>
    <legend>Are you ready for this?</legend>

    <input id="option1" type="radio" name="option" value="1" /><label for="option1">Yes</label>
    <input id="option2" type="radio" name="option" value="0" /><label for="option2">No</label>
  </fieldset>
</main>

<style>
  @import '@frio/core/css/frio';

  :root {
    color-scheme: dark light;
    accent-color: var(--color-ice-blue);
    background-color: #121212;
  }

  :link {
    color: var(--color-ice-blue);
  }

  h1 {
    color: var(--color-ice-blue);
  }
</style>
