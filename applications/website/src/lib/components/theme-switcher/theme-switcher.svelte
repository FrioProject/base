<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  } as const

  type Theme = typeof THEMES[keyof typeof THEMES];

  let theme: Theme = $state<Theme>('system');

  const setTheme = (newTheme: Theme) => {
    theme = newTheme;
    document.documentElement.style.setProperty('color-scheme', newTheme);
    setSessionTheme();
  };

  const getSessionTheme = (): Theme => {
    if (browser) {
      const sessionValue = sessionStorage.getItem('theme') as Theme | null;

      if (sessionValue) {
        return sessionValue;
      }
    }

    return theme;
  };

  const setSessionTheme = () => {
    if (browser) {
      sessionStorage.setItem('theme', theme);
    }
  };

  onMount(() => {
    const sessionTheme = getSessionTheme();

    setTheme(sessionTheme);
  });
</script>

<menu>
  <li>
    <button type="button" aria-pressed={theme === THEMES.LIGHT} onclick={() => setTheme(THEMES.LIGHT)}>
      Light
    </button>
  </li>
  <li>
    <button type="button" aria-pressed={theme === THEMES.DARK} onclick={() => setTheme(THEMES.DARK)}>
      Dark
    </button>
  </li>
  <li>
    <button type="button" aria-pressed={theme === THEMES.SYSTEM} onclick={() => setTheme(THEMES.SYSTEM)}>
      System
    </button>
  </li>
</menu>

<style>
  :where(menu) {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    :where(li) {
      display: contents;

      &:not(:first-child) {
        :where(button) {
          border-left: none;
        }
      }
    }

    :where(button) {
      appearance: none;
      padding: 0.5rem 1rem;
      background-color: var(--color-blue-100);
      border: 1px solid var(--color-blue-700);
      border-radius: 0;
      cursor: pointer;

      &:where([aria-pressed='true']) {
        background-color: var(--color-blue-500);
      }
    }
  }
</style>
