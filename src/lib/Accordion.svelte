<script>
    export let list = [];

    let current = 0;
</script>

<div class="accordion">
    {#each list as item, id}
        
    <div class="accordion-item" class:active={current===id}>
        <a href='#' class="accordion-item-label" on:click|preventDefault={() => current = id}>
            <span class="flex-1">{item.label}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </span>
        </a>
        <div class="accordion-item-body">
            <p>{item.body}</p>
        </div>
    </div>
    
    {/each}
</div>