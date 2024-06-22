/**
 * функция для эмулирования сетевых условий
 */
Cypress.Commands.add('network', (options = {}) => {
  Cypress.automation('remote:debugger:protocol', {
    command: 'Network.enable',
  });
  Cypress.automation('remote:debugger:protocol', {
    command: 'Network.emulateNetworkConditions',
    params: {
      // offline: Булевый параметр, указывающий, должен ли эмулироваться оффлайн режим
      offline: options.offline,
      // latency: Задержка в миллисекундах для всех сетевых запросов (здесь 0, что означает отсутствие задержки).
      latency: 0,
      // downloadThroughput: Скорость загрузки (здесь 0, что означает отсутствие загрузки).
      downloadThroughput: 0,
      // uploadThroughput: Скорость отправки (здесь 0, что означает отсутствие отправки).
      uploadThroughput: 0,
      // connectionType: Тип соединения (здесь 'none', что означает отсутствие сети).
      connectionType: 'none',
    },
  });
});

// Комментарии к синтаксису
// 'Network.enable' и 'Network.emulateNetworkConditions':

// Эти команды относятся к протоколу DevTools, используемому для взаимодействия с браузером.
// Использование строковых литералов вместо обращения к классу Network связано с особенностями работы Cypress с протоколом автоматизации.
// Cypress.automation:

// Это внутренний метод Cypress, который отправляет команды протокола DevTools к браузеру. Он используется для выполнения низкоуровневых команд, таких как эмуляция сетевых условий.
// Двоеточие (:):

// В данном контексте это часть синтаксиса строки. Cypress использует строковые литералы для указания команды, например 'remote:debugger:protocol', чтобы ясно указать, что команда относится к протоколу удалённой отладки. Использование 'remote:debugger:protocol' обязательно, когда вы хотите взаимодействовать с протоколом DevTools через Cypress.
