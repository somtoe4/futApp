<script>
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    import Card from '$lib/components/Card.svelte';
    console.log(page);

    let players = $state([]);

  //  const number = 10 * 10

 //  const handleClick = () => {
 //       console.log('clicked');
 //   }

    onMount(async () => {
        const response = await fetch('/api/players');
        const data = await response.json();
        players = data?.items;
        console.log(players);
    });

</script>

<h1 class="text-4xl font-bold text-center my-8 text-cyan-400">FC 25 Collection</h1>
<div class="search-bar m-auto w-3xl">
    <input type="text" placeholder="Type here" class="input m-auto w-[600px]" /> <button class="btn btn-info">Search</button>
</div>

<div class="grid grid-cols-6 gap-8 p-8 max-w-7xl mx-auto">
    {#each players as player}
      <Card player={player} />
    {/each}

</div>



