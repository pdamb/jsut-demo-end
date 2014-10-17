var ns = ns || {};

// This example code has just one job:
// figure out if message is ok to post.
ns.Chat = (function () {

    function chat() {
        this.blacklist = ['noob', 'mother', 'youre', 'kappa'];
    }

    chat.prototype.validate = function (message) {
        for (var i = 0; i < this.blacklist.length; i++) {
            if (message.toLowerCase().indexOf(this.blacklist[i]) !== -1)
                return false;
        }
        return true;
    };

    return chat;

}());