const output = document.getElementById('output');
const input = document.getElementById('command');
const player = document.getElementById('player');
const audioSource = document.getElementById('audioSource');

const tracks = {
  1: 'audio/track1.m4a',
  2: 'audio/track2.m4a',
};

function print(text) {
  output.textContent += '\n' + text;
  output.scrollTop = output.scrollHeight;
}

function processCommand(cmd) {
  const args = cmd.trim().split(' ');
  const command = args[0];

  switch (command) {
    case 'help':
      print("Команды:\n  ls — список треков\n  play [номер] — включить трек\n  stop — остановить\n  donate — поддержать улей\n  clear — очистить\n  exit — выход");
      break;
      
    case 'ls':
      print("Треки:");
      for (const id in tracks) {
        print(`  ${id}: ${tracks[id]}`);
      }
      break;
      
    case 'play':
  if (!args[1]) {
    print("Пожалуйста, укажите номер трека. Например: play 1");
    break;
  }
  const n = args[1];
  if (tracks[n]) {
    audioSource.src = tracks[n];
    player.load();
    player.play();
    print(`Воспроизводится трек ${n}`);
  } else {
    print("Трек не найден.");
  }
      break;
      
case 'stop':
      player.pause();
      player.currentTime = 0;
      print("Воспроизведение остановлено.");
      break;
      
    case 'donate':
      print("Поддержать проект:\n  Patreon: https://patreon.com/yourpage");
      break;
    case 'clear':
  output.textContent = "Welcome to audiopchely.\nType 'help' to get started.";
  break;
    case 'exit':
      print("Чтобы закрыть вкладку, используйте Ctrl+W или нажмите на крестик.");
      break;
    default:
      print("Неизвестная команда. Введите 'help'.");
  }
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value;
    print('> ' + cmd);
    processCommand(cmd);
    input.value = '';
    input.focus();
  }
});
