<script lang="js">
  import { headers } from '$lib/messages.js';
    
  let { arachnophobia } = $props();
  let i = $state(-1);

  $effect(() => {
    const interval = setInterval(() => {
      i += 1;
      i %= headers.length;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h1> 
  { arachnophobia ? "Hi, nice to meet you" : "Hi spider lover!"}
</h1>

<div>Full Stack Developer
  <br>Specialist in the 
  <span class="word-highlight" style="width: 51px;">
    <span class="word">
      interactive
    </span>
  </span>.
</div>

<!-- {#key i}
  <h1 in:typewriter={{ speed: 2 }}>
    {headers[i] || ''}
  </h1>
{/key} -->

