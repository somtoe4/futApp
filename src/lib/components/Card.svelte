<script>
    let {player} = $props();
</script>

<div class="col-span-1">
    <div 

    class="
    {player.card === 'FUTB' ? 'bg-[url(Card/futb.png)]' : ''}
    {player.card === 'FB' ? 'bg-[url(Card/flashback.webp)]' : ''}
    {player.card === 'RTTK' ? 'bg-[url(Card/rttk.webp)]' : ''}

    h-[280px] w-[200px] bg-cover flex flex-col transform  scale-[0.5]
      items-center justify-center relative">
        <!-- Rating and Position -->
        <span class="text-white text-center text-xl font-bold relative top-[15px] left-[-60px]">{player.rating}</span>
        <span class="text-white text-center text-xs relative top-[12px] left-[-60px]">{player.position_ability[0] || 'ST'}</span>
        
        <!-- Player Image -->
        <img src={player.image} alt={player.name} class="relative top-[-0px] left-[-15px] h-28">
        
        <!-- Player Attributes -->
        <span class="text-white text-center text-xs font-bold absolute top-[45%] left-[87%] z-10000 bg-black/50 rounded-full px-1">R</span>
        <span class="text-white text-center text-xs font-bold absolute top-[52%] left-[87%] z-10000 bg-black/50 rounded-full p-0 -m-0.5">{player.weak_foot}* {player.skill_moves}*</span>
        
        <!-- Player Name -->
        <p class="text-white text-center text-sm font-bold">{player.name}</p>
        
        <!-- Stat Labels -->
        <ul class="flex gap-1 text-[0.6rem] font-bold text-white">
            <li>PAC</li>
            <li>SHO</li>
            <li>PAS</li>
            <li>DRI</li>
            <li>DEF</li>
            <li>PHY</li>
        </ul>
        
        <!-- Stat Values -->
        <ul class="flex gap-[7.5px] text-xs text-white">
            <li>{player.pace}</li>
            <li>{player.shooting}</li>
            <li>{player.passing}</li>
            <li>{player.dribbling}</li>
            <li>{player.defending}</li>
            <li>{player.physicality}</li>
        </ul>
        
        <!-- Player Positions -->
        <span class="text-white text-center text-xs font-bold absolute top-[90%] left-[32%] z-10000 bg-black/50 rounded-full px-1">
            {player.position_ability.slice(0, 3).join(', ')}
        </span>
    </div>
</div>