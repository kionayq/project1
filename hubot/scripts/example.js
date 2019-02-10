'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  robot.hear(/i'm Karim/i, (res) => {
    res.send('i love U')
  })
  
  robot.respond(/hit in the head of (.*)/i, (res) => {
    const name = res.match[1]
  
    if (name === 'Ebere') {
      res.reply('I can’t let you do that, he is the best teacher')
      return
    }
  
    res.reply('Ok Done hahaha')
  })

  
  robot.respond(/could you carry my luggage, BTW it is (.*) KG/i, (res) => {
    const mass = res.match[1]
  
    if (mass > 10) {
      res.reply('oh! it is too heavy, could you help me ?')
      return
    }
  
    res.reply('Absher')
  })
  
}
