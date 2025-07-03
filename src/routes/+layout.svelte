<script>
  import logo from '$lib/assets/web.png';
  import '../app.css';
  import { theme } from './shared.svelte.js';
  
  let { children } = $props();

  // $effect(() => {
  //   /* if arachnophobia changes, propagate theme update */
    
  // });
</script>

<div class={ theme.arachnophobia ? "arachnophobia" : ""}>
  <nav class="justify-between flex relative">
    <img class="btn-primary max-h-3" src={logo} alt="spiderweb-logo" />
    <div class="flex gap-3">
      <a class="btn-secondary" href="/">Home</a>
      <a class="btn-secondary" href="/projects">Projects</a>
      <a class="btn-secondary" href="/blog">Blog</a>
      <a class="btn-secondary" href="/contact">Get in Touch</a>
    </div>
    <div>
      <button class="btn-primary" onclick={() => {theme.arachnophobia = !theme.arachnophobia}} >
        {theme.arachnophobia ? 'Arachnophilia' : 'Arachnophobia'}
      </button>
    </div>
  </nav>

  {@render children()}
</div>