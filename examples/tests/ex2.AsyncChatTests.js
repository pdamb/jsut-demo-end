/// <reference path="../lib/jquery-1.11.1.min.js" />
/// <reference path="../lib/jquery.mockjax.js" />
/// <reference path="../js/ex2.AsyncChat.js" />

/* global module, asyncTest, ns, QUnit */ /* JSHint */

$.mockjax({
    url: '/services/ChatService.asmx/GetBlacklist',
    responseTime: 10,
    responseText: { d: ["noob"] }
});

module('Ukazky async testu', {
    setup: function () {
        this.c = new ns.AsyncChat();
    },
    teardown: function () { }
});

asyncTest('Zprava "Jsi noob." je spatna.', function (assert) {
    QUnit.expect(1);
    this.c.validate('Jsi noob.', callback);
    function callback(isValid) {
        assert.ok(!isValid);
        QUnit.start();
    }
});

asyncTest('Zprava "Jsi nejlepsi." je v poradku.', function (assert) {
    QUnit.expect(1);
    this.c.validate('Jsi nejlepsi.', callback);
    function callback(isValid) {
        assert.ok(isValid);
        QUnit.start();
    }
});

asyncTest('Prazdna zprava je v poradku, protoze..', function (assert) {
    QUnit.expect(1);
    this.c.validate('Jsi nejlepsi.', callback);
    function callback(isValid) {
        assert.ok(isValid, '.. jsem chtel co nejjednodussi kod.');
        QUnit.start();
    }
});