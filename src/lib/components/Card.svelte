<script>
    let {player} = $props();

    const cards = [
        "bg-[url(Card/futb.png)]",
        "bg-[url(Card/flashback.webp)]",
        "bg-[url(Card/rttk.webp)]", 
        "bg-[url(Card/hero-base.webp)]",
        "bg-[url(Card/ex.webp)]"
      
    ]
</script>

<div class="col-span-1">
    <div 

    class="
    {cards[Math.floor(Math.random() * cards.length)]}

    h-[280px] w-[200px] bg-cover flex flex-col transform 
      items-center justify-center relative">
        <!-- Rating and Position -->
        <span class="text-white text-center text-xl font-bold relative top-[-40px] left-[-60px]">{player?.overallRating}</span>
        <span class="text-white text-center  font-bold text-[0.5rem] relative top-[-45px] left-[-60px]">{player?.position?.shortLabel}</span>
        <span class="text-white text-center  font-bold text-[0.5rem] relative top-[-45px] left-[-60px] w-5 h-2.5"> <img src="{player?.nationality?.imageUrl}" alt=""></span>
        <span class="text-white text-center  font-bold text-[0.5rem] relative top-[-35px] left-[-60px] w-5 h-2.5"> <img src="{player?.team?.imageUrl}" alt=""></span>
        <!-- Player Image -->
        <img src={player?.avatarUrl} alt={player?.firstName + ' ' + player?.lastName} class=" top-[20%] left-[22%] h-30 w-auto fixed">
        
        <!-- Player Attributes -->
        <span class="text-white text-center text-xs font-bold absolute top-[45%] left-[87%] z-10000 bg-black/50 py-0.1  px-2">{player?.preferredFoot === '1' ? 'L' : 'R'  }</span>
        <span class="text-white text-center text-[0.5rem] font-bold absolute top-[52%] left-[87%] z-10000 bg-black/50 py-1  px-1 -m-0.5">{player?.weakFootAbility}* {player?.skillMoves}*</span>
        
        <!-- Player Name -->
        <p class="text-white text-center text-[0.9rem] font-bold z-1000 relative top-[16%] left-[0px] whitespace-nowrap truncate max-w-[150px]" >{player?.firstName} {player.lastName}</p>
        
        <!-- Stat Labels -->
        <ul class="flex gap-1 text-[0.6rem] font-bold text-white mt-[-8px] relative top-[50px]">
            <li>PAC</li>
            <li>SHO</li>
            <li>PAS</li>
            <li>DRI</li>
            <li>DEF</li>
            <li>PHY</li>
        </ul>
        
        <!-- Stat Values -->
        <ul class="flex gap-[12px] text-[0.6rem] text-white mt-[-5px] relative top-[50px]">
            <li>{player?.stats?.pac?.value || 0}</li>
            <li>{player?.stats?.sho?.value || 0}</li>
            <li>{player?.stats?.pas?.value || 0}</li>
            <li>{player?.stats?.dri?.value || 0}</li>
            <li>{player?.stats?.def?.value || 0}</li>
            <li>{player?.stats?.phy?.value || 0}</li>
        </ul>
        
        <!-- Player Positions -->
        <span class="text-white text-center text-xs font-bold absolute top-[90%] left-[45.5%] z-10000 bg-black/50 rounded-full px-1">
            {#if player?.alternatePositions?.length > 0}
                {player?.alternatePositions[0]?.shortLabel}
            {:else}
                N/A
            {/if}
        </span>
    </div>
</div>