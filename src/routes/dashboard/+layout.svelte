<script lang="ts">
	import { Eye, LineChart, Settings, Palette, LayoutTemplate, Home} from 'lucide-svelte'

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
            <AppRailTile  value={0} tag="a" href="/dashboard" >
                <Home />
            </AppRailTile>
        </svelte:fragment>
    
    
        <!-- Default -->
        <AppRailTile value={1} tag="a" href="/dashboard/editor">
            <LayoutTemplate />
        </AppRailTile>
        <AppRailTile value={3} tag="a" href="/dashboard/analytics">
            <LineChart />
        </AppRailTile>
        <AppRailTile value={4} tag="a" href="/dashboard/themes" regionIcon="opacity-50">
            <Palette />
        </AppRailTile>
        <AppRailTile value={2} tag="a" href="/dashboard/account">
            <Settings />
        </AppRailTile>
    
    
        <!-- Trail -->
        <svelte:fragment slot="trail">
            <AppRailTile
                tag="a"
                value={5}
                
                href="/{user.username}" 
                target="_blank"
                title="Preview"
            >
                <Eye />
            </AppRailTile>
        </svelte:fragment>
    </AppRail>
    <div class="grid place-content-center place-items-center">
        <slot />
    </div>
</div>



