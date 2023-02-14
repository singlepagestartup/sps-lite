const saveAsPdf = require('./save-as-pdf');
const sendToRecievers = require('./send-to-recievers');
const passToService = require('./pass-to-service');

async function sideEffectsEmmiter({ event, sideEffect, payload }) {
    if (sideEffect.type === 'send-to-recievers') {
        await sendToRecievers({ event, sideEffect, payload });
    } else if (sideEffect.type === 'save-as-pdf') {
        await saveAsPdf({ event, sideEffect, payload });
    } else if (sideEffect.type === 'pass-to-service') {
        await passToService({ event, sideEffect, payload });
    }
}

module.exports = sideEffectsEmmiter;
