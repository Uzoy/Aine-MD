let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082284519515]
│ • Axis [083189131519]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
