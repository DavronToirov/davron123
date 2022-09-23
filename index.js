const mineflayer = require('mineflayer')
const vec3 = require('vec3')

const bot = mineflayer.createBot({
  host: 'ir.skyblock.uz',
  port: 25566,
  username: 'MineFlayerMiner'
})

bot.once("spawn", () => {
  bot.chat("/login Davron");
})

bot.on('chat', (username, message) => {
if (username === "_NoT_DaN1KnIgHt_")  {if (message.indexOf("Hello") !== -1) {
var replacement = "Hello",
toReplace = "Hello",
str = "Hello"

str = str.replace(replacement, toReplace)
bot.chat(str)
}
}})
bot.on('chat', (username, message) => {
  if (username === "Sobirov777888")  {if (message.indexOf("Hello") !== -1) {
  var replacement = "Hello",
  toReplace = "Hello",
  str = "Hello"
  
  str = str.replace(replacement, toReplace)
  bot.chat(str)
  }
  }})
  bot.on('chat', (username, message) => {
    if (username === "Ergashovic_06")  {if (message.indexOf("Hello") !== -1) {
    var replacement = "Hello",
    toReplace = "Hello",
    str = "Hello"
    
    str = str.replace(replacement, toReplace)
    bot.chat(str)
    }
    }})
    bot.on('chat', (username, message) => {
      if (username === "WELLBERD")  {if (message.indexOf("Hello") !== -1) {
      var replacement = "Hello",
      toReplace = "Hello",
      str = "Hello"
      
      str = str.replace(replacement, toReplace)
      bot.chat(str)
      }
      }})
      bot.on('chat', (username, message) => {
        if (username === "ProUzMaxDev")  {if (message.indexOf("Hello") !== -1) {
        var replacement = "Hello",
        toReplace = "Hello",
        str = "Hello"
        
        str = str.replace(replacement, toReplace)
        bot.chat(str)
        }
        }})
bot.on('chat', (username, message) => {
  if (username === '_NoT_DaN1KnIgHt_') {if (message.indexOf('@') !== -1) {
    var replacement = "@",
        toReplace = "",
        str = message

    str = str.replace(replacement, toReplace)
    bot.chat(str)
}
  }})
  bot.on('chat', (username, message) => {
    if (username === "TillingBus94981")  {if (message.indexOf("Hello") !== -1) {
    var replacement = "Hello",
    toReplace = "Hello",
    str = "Hello"
    
    str = str.replace(replacement, toReplace)
    bot.chat(str)
    }
    }})
    let step = 0
          let sway = 1
          let global = 0
          let stop = false
          let coming = false
          // 1792

    function lookAtNearestPlayer () {
      const playerFilter = (entity) => entity.type === 'player'
      const playerEntity = bot.nearestEntity(playerFilter)
      
    
    }
    bot.on('chat', async (username, message) => {
      if (username === bot.username) return
      if (username === '_NoT_DaN1KnIgHt_')
      switch (message) {
        case 'loaded':
          await bot.waitForChunksToLoad()
          bot.chat('Ready!')
          break
        case 'list':
          sayItems()
          break
        case 'gg':
          gg()
          break
        case 'build':
          build()
          break
        case 'equip dirt':
          equipDirt()
          break
          case 'Kel':
            const target = bot.players['_NoT_DaN1KnIgHt_'].entity
            if (!target) {
              bot.chat("Keldim")
              break
            }
            const { x: playerX, y: playerY, z: playerZ } = target.position
            bot.pathfinder.SetGoal(new GoalNear(playerX, playerY, playerZ,RANGE_GOAL))
            break
              case 'start':
                global = 5
                part()
                return
              case 'stop':
                stop = true
              case 'clear':
                step = 0
                global = 0
                sway = 1
                break
              case 'uuid':
                bot.chat(bot.player.uuid)
                break
              }
            })

bot.on('chat', (username, message) => {
            const args = message.split(' ')
            switch(args[0]) {
            }})


    function sayItems (items = bot.inventory.items()) {
      const output = items.map(itemToString).join(', ')
      if (output) {
        bot.chat(output)
      } else {
        bot.chat('empty')
      }
    }

    async function gg() {
      if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
        var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[-1];
        if (pickaxe) await bot.equip(pickaxe, 'hand')
      }
      target = bot.blockAt(bot.entity.position.offset(0, 2, 0,))
      if (target && bot.canDigBlock(target)) {

      var block = bot.blockAtCursor(6);
      if (!block) return setTimeout(function() {
        gg();
      }, -999);
      await bot.dig(block, 'ignore', 'raycast')
        gg()
    }}

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

  function lookAtNearestPlayer () {
      const playerFilter = (entity) => entity.type === 'player'
      const playerEntity = bot.nearestEntity(playerFilter)
  }
bot.on('physicTick', lookAtNearestPlayer)
