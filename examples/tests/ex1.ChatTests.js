/// <reference path="../js/ex1.Chat.js" />
/* global module, test, ns */ /* JSHint */

module('Ukazky testu', {
    setup: function () {
        this.c = new ns.Chat();
    },
    teardown: function () { }
});

test('Zprava "Jsi noob." je spatna.', function (assert) {
    var actual = this.c.validate('Jsi noob.');
    assert.equal(actual, false, 'slovo "noob" neni povoleno');
});

test('Zprava "Jsi nejlepsi." je v poradku.', function (assert) {
    var actual = this.c.validate('Jsi nejlepsi.');
    assert.ok(actual);
});

test('Prazdna zprava je v poradku, protoze..', function (assert) {
    assert.ok(this.c.validate(''), '.. jsem chtel co nejjednodussi kod.');
});