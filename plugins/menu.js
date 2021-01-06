let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
🤖 * - BOT* 🤖\n
🖥️ *Comandos:* 🖥️\n\n
📍 comando: *${_p}demote*
desc : tire o administrador de um membro.\n\n
📍 comando: *${_p}promote*
desc : dar administrador para um membro.\n\n
📍 comando: *${_p}link*
desc : pegue o link do grupo.\n\n
📍 comando:  *${_p}sticker*
desc: crie figurinha com uma foto (somente foto)\n\n
📍 comando:  *${_p}banir*
desc: banir um membro do grupo.\n\n
📍 comando:  *${_p}add*
desc: adicionar um membro no grupo.\n\n
`.trim(), m)
}
handler.command = /^(menu|comandos|\?)$/i
handler.owner = true
handler.mods = true
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler



