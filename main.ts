let mode_dragon_ball = 0
player.onChat("run", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    agent.teleportToPlayer()
})
player.onItemInteracted(IRON_SHOVEL, function () {
    player.teleport(world(IRON_SHOVEL, 0, 0))
    player.say(":)")
})
loops.forever(function () {
    mode_dragon_ball += 1
})
