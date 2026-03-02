<script>
  import Logo from '$lib/assets/Logo.svg';

  import ThemeSwitcher from '$lib/components/theme-switcher/theme-switcher.svelte';
</script>

<svelte:head>
  <title>The Frio Project</title>
</svelte:head>

<header>
  <h1>
    <img src={Logo} alt="The Frio Project Logo" />
  </h1>
</header>

<main>
  <h2>Welcome to The Frio Project</h2>
  <p>
    Visit <a href="https://github.com/FrioProject/base" target="_blank">our repo</a> to read the documentation.
  </p>

  <ThemeSwitcher></ThemeSwitcher>
</main>

<style>
  :where(:root) {
    color-scheme: dark light;
    accent-color: var(--color-blue-700);
    background-color: var(--color-neutral-100);
  }

  :where(:link) {
    color: var(--color-blue-700);
  }

  :where(h1) {
    color: var(--color-blue-700);

    :where(img) {
      height: 48px;
    }
  }
</style>
