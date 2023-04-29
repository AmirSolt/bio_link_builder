<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
	import { writable } from 'svelte/store'
	import type { Writable } from 'svelte/store'

	const storeValue: Writable<number> = writable(0)


    import { page } from '$app/stores'
    $: user = $page.data.user
</script>







<div class="card bg-surface-50-900-token rounded-none h-[480px] grid grid-cols-[auto_1fr] w-full">
    <AppRail selected={storeValue}>
	

        <svelte:fragment slot="lead">
            <AppRailTile  value={0} tag="a" href="/profile" >
                Home
            </AppRailTile>
        </svelte:fragment>
    
    
        <!-- Default -->
        <AppRailTile value={1} tag="a" href="/profile/editor">
            Editor
        </AppRailTile>
        <AppRailTile value={2} tag="a" href="/profile/settings">
            Settings
        </AppRailTile>
    
    
        <!-- Trail -->
        <svelte:fragment slot="trail">
            <AppRailTile
                tag="a"
                value={3}
                href="/{user.username}"
                target="_blank"
                title="Trail slot tile."
            >
                Preview
            </AppRailTile>
        </svelte:fragment>
    </AppRail>
    <div class="grid place-content-center place-items-center">
        <slot />
    </div>
</div>



