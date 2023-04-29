
<script lang="ts">
	import { enhance } from '$app/forms'

</script>

<h1>
    
    Settings
</h1>
<br>

<form class="btn variant-filled" method="POST" action="/logout" use:enhance>
    <button type="submit">Sign out</button>
</form>