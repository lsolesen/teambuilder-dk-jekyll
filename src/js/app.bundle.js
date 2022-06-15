'use strict';

/* global $ */

const morse = require('./morse');
const ak = require('./ak');

$(function() {

    $("#language").change(function() {
        console.log('Selectbox');
        $("#code").text('');
        let language = $("#language").val();
        $("#morse").hide();
        $("#ak").hide();
        if (language == 'morse') {
            $("#morse").show();
        } else if (language == 'ak') {
            $("#ak").show();
        }
    });

    $("#kodemaskine").submit(function(e) {
        let language = $("#language").val();
        console.log('Ready kodemaskine ' + language);
        e.preventDefault();
        let textbox = $("#textbox").val();
        let translator = '';

        if (language == 'morse') {
            translator = morse.Morse(textbox);
        }
        if (language == 'ak') {
            translator = ak.AK(textbox);
        }
        $("#code").text(translator.encrypt());
    });

});
