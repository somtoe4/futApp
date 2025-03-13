<script lang="ts">
	import '../app.css';
	import { user } from '$lib/user';
	
	import Nav from '$lib/components/Nav.svelte';
	let { children } = $props();

</script>

<Nav />


{#if !$user }
	{@render children()}
{:else}
	<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick={() => {
	my_modal_1.showModal();
}}>Login To Vierww App</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-error">Close</button>
		<button onclick={() => {
			$user = {
				name: 'John',
				position: 20,
				rating: 'New York',
				image: '/player1.webp',
				pace: 88,
				shooting: 85,
				passing: 82,
				dribbling: 89,
				defending: 45,
				physicality: 75,
				weak_foot: 4,
				skill_moves: 4,
				position_ability: ['CAM', 'CM', 'ST']
			}
		}} class="btn">Some Action</button>
      </form>
    </div>
  </div>
</dialog>

{/if}


