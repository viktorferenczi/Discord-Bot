let simaText = '692003934776328282'; 

module.exports = {
    getTextChannel: function (client, channelName) {
        let channel;
        switch (channelName) {
            case 'sima-text':
                channel = client.channels.fetch(simaText)
                break;
            default:
                break;
        }
        return channel;
    }
};