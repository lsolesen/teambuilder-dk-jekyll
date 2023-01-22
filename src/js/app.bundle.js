'use strict';

/* global $ */

const morse = require('./morse');
const ak = require('./ak');
const alfa = require('./alfa');
const backwards = require('./backwards');
const passcode = require('./passcode');
const semafore = require('./semafore');
const frimurer = require('./frimurer');

$(function() {

    let language = $("#language").val();
    $("#" + language).show();

    $("#language").change(function() {
        console.log('Selectbox');
        $("#code").text('');
        let language = $("#language").val();
        $("#morse").hide();
        $("#ak").hide();
        $("#alfa").hide();
        $("#backwards").hide();
        $("#passcode").hide();
        if (language == 'morse') {
            $("#morse").show();
        } else if (language == 'ak') {
            $("#ak").show();
        } else if (language == 'alfa') {
            $("#alfa").show();
        } else if (language == 'backwards') {
            $("#backwards").show();
        } else if (language == 'passcode') {
            $("#passcode").show();
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
        if (language == 'alfa') {
            let number_raise_fall = $("[name='number_raise_fall']:checked").val();
            let w = $('#no_w_number_selected:checked').val();
            // let number_to_text = $('#number_to_text');
            translator = alfa.Alfa(textbox, w, number_raise_fall);
        }
        if (language == 'passcode') {
            let passcd = $("[name='passcode']").val();
            translator = passcode.Passcode(textbox, passcd);
        }
        if (language == 'backwards') {
            let reverse = 'true';
            let remove_spaces = String($('#remove_spaces:checked').val());
            let random_spaces = String($('#random_spaces:checked').val());
            console.log(remove_spaces + random_spaces);
            translator = backwards.Backwards(textbox, reverse, remove_spaces, random_spaces);
        }
        if (language == 'semafore') {
            translator = semafore.Semafore(textbox);
        }
        if (language == 'frimurer') {
            translator = frimurer.Frimurer(textbox);
        }
        $("#code").html(translator.encrypt());
    });

});
