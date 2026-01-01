<script lang="ts">
  type Theme = 'light' | 'dark' | 'system';

  let theme: Theme = $state<Theme>('system');

  const setTheme = (newTheme: Theme) => {
    theme = newTheme;

    const html = document.documentElement;

    switch (theme) {
      case 'light':
        html.style.setProperty('color-scheme', 'light');
        break;
      case 'dark':
        html.style.setProperty('color-scheme', 'dark');
        break;
      case 'system':
      default:
        html.style.setProperty('color-scheme', 'dark light');
        break;
    }
  };
</script>

<svelte:head>
  <title>The Frio Project</title>
</svelte:head>

<main>
  <h1>Welcome to The Frio Project</h1>
  <p>Visit <a href="https://github.com/FrioProject/base">our repo</a> to read the documentation.</p>

  <menu>
    <li>
      <button type="button" aria-pressed={theme === 'light'} onclick={() => setTheme('light')}
        >Light</button
      >
    </li>
    <li>
      <button type="button" aria-pressed={theme === 'dark'} onclick={() => setTheme('dark')}
        >Dark</button
      >
    </li>
    <li>
      <button type="button" aria-pressed={theme === 'system'} onclick={() => setTheme('system')}
        >System</button
      >
    </li>
  </menu>
</main>

<style>
  @import '@frio/core/css/colors';

  :where(:root) {
    color-scheme: dark light;
    accent-color: var(--color-blue);
    background-color: var(--color-blue-100);
  }

  :where(:link) {
    color: var(--color-blue);
  }

  :where(h1) {
    color: var(--color-blue);
  }

  :where(menu) {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    :where(li) {
      display: contents;
    }

    :where(button) {
      appearance: none;
      padding: 0.5rem 1rem;
      background-color: var(--color-blue-100);
      border: 1px solid var(--color-blue);
      border-radius: 0;
      cursor: pointer;

      &[aria-pressed='true'] {
        background-color: var(--color-blue-500);
      }
    }
  }
</style>
