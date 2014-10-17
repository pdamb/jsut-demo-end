var ns = ns || {};

// This example code has just one job:
// figure out if message is ok to post.
ns.AsyncChat = (function () {

    // no local blacklist
    function chat() { }

    // 1, load blacklist from server
    // 2, check message against it
    // 3, call callback with result
    chat.prototype.validate = function (message, callback) {

        $.ajax({
            url: '/services/ChatService.asmx/GetBlacklist',
            method: 'POST',
            contentType: 'application/json',
            success: function (response) {
                var flag = isValid(message, response.d);
                callback(flag);
            },
            error: function () {
                console.log('Failed to communicate with web service.');
            }
        });

        function isValid(text, blacklist) {
            for (var i = 0; i < blacklist.length; i++) {
                if (text.toLowerCase().indexOf(blacklist[i]) !== -1)
                    return false;
            }
            return true;
        }

    };

    return chat;

}());