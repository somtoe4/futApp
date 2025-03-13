<script>
    import { page } from '$app/state';
    import { user } from '$lib/user';
    import { players } from '$lib/database';
   
    console.log(page);

    const player = $state(page.params.player);
    

</script>

<h1>Player {player}</h1>

{JSON.stringify($user)}