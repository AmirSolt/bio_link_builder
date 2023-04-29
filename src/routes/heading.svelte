<script lang="ts">
	import { page } from '$app/stores'
	import { AppBar, LightSwitch  } from '@skeletonlabs/skeleton'
	import { Flame, User } from 'lucide-svelte'

	$: user = $page.data.user



</script>




<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Flame /> MapYan
		</a>
	</svelte:fragment>





	<svelte:fragment slot="trail">
		
		<a href="/support">Support</a>
		<a href="/pricing">Pricing</a>
		
		{#if user}
		<a href="/dashboard"><User /></a>
		
		{:else}
		<a href="/login">Log in</a>
		<a href="/register">Register</a>
		{/if}
		<LightSwitch />


		
	</svelte:fragment>
</AppBar>
