const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'exz123',
}

//api
global.xteam = 'ebb6251cc00f9c63'
global.lolhuman = 'yourkey'

// Other
global.owner = ['628889616144', '628889616144', '0', '0', '0']
global.premium = ['628889616144']
global.ownername = 'ExzGanzz'
global.botname = 'ExzBotâ¢MD'
global.packname = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n By Â© ExzGanzz'
global.gc = 'https://github.com/Rmdhn-20'
global.linkig = 'https://instagram.com/ekuzikaa_18'
global.linkgc = 'Gada Cok!'
global.limitawal = '10'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ExzBot â¢ Multi-Device'
global.sessionName = 'sesi'
global.prefa = ['','!','.','ð¦','ð¤','ð¿']
global.sp = 'â'
global.mess = {
    success: 'â  â  _Berhasil . . ._  â',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: 'ã â ã  â  *Tunggu sebentar, sedang di proses*  â',
    endLimit: 'ã â ã *Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
