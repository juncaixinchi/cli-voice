const path = require('path');
const request = require('request');
const fs = require('fs');
const os = require('os');
const mp3wav = require('mp3wav');
const { Spinner } = require('cli-spinner');

const voice = (word) => {
  const targetPath = path.join(os.tmpdir(), 'tmpaudio.mp3')
  const voiceUrl = `https://dict.youdao.com/dictvoice?audio=${word}&type=1`;
  const phoneticUrl = `https://dict.youdao.com/w/${word}`;
  var obj = new Spinner('processing.. %s');
  obj.start();
  const stream = request(encodeURI(voiceUrl)).pipe(fs.createWriteStream(targetPath));
  stream
    .on('finish', () => mp3wav(targetPath))
    .on('error', () => console.log('\nError', '❌'));

  request(phoneticUrl, (error, response, body) => {
    try {
      obj.stop(true);
      const line = body.split('\n').filter(s => s.includes('class="phonetic"')).map(s => s.trim().split(/<|>/)[2])
      if (line[0]) {
        console.log('\n', line[0], '✔️\n')
      } else {
        console.log('\n No phonetic symbol!\n')
      }
    } catch (error) {
      console.log('\nError', '❌')
    }
  })
}

module.exports = voice;
