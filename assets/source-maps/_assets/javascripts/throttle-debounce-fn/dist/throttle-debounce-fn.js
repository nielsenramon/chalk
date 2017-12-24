/*
 *  throttle-debounce-fn - v1.0.1
 *  jQuery-based plugin that allows you to throttle and debounce your functions
 *  https://github.com/migueldemoura/throttle-debounce-fn
 *
 *  Made by Miguel de Moura
 *  Under MIT License
 */
;(function ($, window, document, undefined) {
    // Throttle execution of a function. Especially useful for rate limiting
    // execution of handlers on events like resize and scroll. If you want to
    // rate-limit execution of a function to a single time, see the
    // <$.debounce> method.
    //
    // In this visualization, | is a throttled-function call and X is the actual
    // callback execution:
    //
    // > Throttled with `noTrailing` specified as false or unspecified:
    // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    // > X    X    X    X    X    X        X    X    X    X    X    X
    // >
    // > Throttled with `noTrailing` specified as true:
    // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    // > X    X    X    X    X             X    X    X    X    X
    //
    // Usage:
    //
    // > var throttled = $.throttle(delay, [ noTrailing, ] callback);
    // >
    // > $('selector').bind('someevent', throttled);
    // > $('selector').unbind('someevent', throttled);
    //
    // Arguments:
    //
    //  delay - (Number) A zero-or-greater delay in milliseconds. For event
    //      callbacks, values around 100 or 250 (or even higher) are most useful.
    //  noTrailing - (Boolean) Optional, defaults to false. If noTrailing is
    //      true, callback will only execute every `delay` milliseconds while the
    //      throttled-function is being called. If noTrailing is false or
    //      unspecified, callback will be executed one final time after the last
    //      throttled-function call. (After the throttled-function has not been
    //      called for `delay` milliseconds, the internal counter is reset)
    //  callback - (Function) A function to be executed after delay milliseconds.
    //      The `this` context and all arguments are passed through, as-is, to
    //      `callback` when the throttled-function is executed.
    //
    // Returns:
    //
    //  (Function) A new, throttled, function.

    $.throttle = function(delay, noTrailing, callback, debounceMode) {
        // After wrapper has stopped being called, this timeout ensures that
        // `callback` is executed at the proper times in `throttle` and `end`
        // debounce modes.
        var timeoutId,

        // Keep track of the last time `callback` was executed.
        lastExec = 0;

        // `noTrailing` defaults to false.
        if (typeof noTrailing !== 'boolean') {
            debounceMode = callback;
            callback = noTrailing;
            noTrailing = undefined;
        }

        // The `wrapper` function encapsulates all of the throttling / debouncing
        // functionality and when executed will limit the rate at which `callback`
        // is executed.
        function wrapper() {
            var that = this,
                elapsed = +new Date() - lastExec,
                args = arguments;

            // Execute `callback` and update the `lastExec` timestamp.
            function exec() {
                lastExec = +new Date();
                callback.apply(that, args);
            }

            // If `debounceMode` is true (atBegin) this is used to clear the flag
            // to allow future `callback` executions.
            function clear() {
                timeoutId = undefined;
            }

            if (debounceMode && !timeoutId) {
                // Since `wrapper` is being called for the first time and
                // `debounceMode` is true (atBegin), execute `callback`.
                exec();
            }

            // Clear any existing timeout.
            timeoutId && clearTimeout(timeoutId);

            if (debounceMode === undefined && elapsed > delay) {
                // In throttle mode, if `delay` time has been exceeded, execute
                // `callback`.
                exec();
            } else if (noTrailing !== true) {
                // In trailing throttle mode, since `delay` time has not been
                // exceeded, schedule `callback` to execute `delay` ms after most
                // recent execution.
                // If `debounceMode` is true (atBegin), schedule `clear` to execute
                // after `delay` ms.
                // If `debounceMode` is false (at end), schedule `callback` to
                // execute after `delay` ms.
                timeoutId = setTimeout(
                    debounceMode ? clear : exec,
                    debounceMode === undefined ? delay - elapsed : delay
                );
            }
        }

        return wrapper;
    };

    // Debounce execution of a function. Debouncing, unlike throttling,
    // guarantees that a function is only executed a single time, either at the
    // very beginning of a series of calls, or at the very end. If you want to
    // simply rate-limit execution of a function, see the <$.throttle>
    // method.
    //
    // In this visualization, | is a debounced-function call and X is the actual
    // callback execution:
    //
    // > Debounced with `atBegin` specified as false or unspecified:
    // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    // >                          X                                 X
    // >
    // > Debounced with `atBegin` specified as true:
    // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
    // > X                                 X
    //
    // Usage:
    //
    // > var debounced = $.debounce(delay, [ atBegin, ] callback);
    // >
    // > $('selector').bind('someevent', debounced);
    // > $('selector').unbind('someevent', debounced);
    //
    // Arguments:
    //
    //  delay - (Number) A zero-or-greater delay in milliseconds. For event
    //      callbacks, values around 100 or 250 (or even higher) are most useful.
    //  atBegin - (Boolean) Optional, defaults to false. If atBegin is false or
    //      unspecified, callback will only be executed `delay` milliseconds after
    //      the last debounced-function call. If atBegin is true, callback will be
    //      executed only at the first debounced-function call. (After the
    //      throttled-function has not been called for `delay` milliseconds, the
    //      internal counter is reset)
    //  callback - (Function) A function to be executed after delay milliseconds.
    //      The `this` context and all arguments are passed through, as-is, to
    //      `callback` when the debounced-function is executed.
    //
    // Returns:
    //
    //  (Function) A new, debounced, function.
    $.debounce = function(delay, atBegin, callback) {
        return callback === undefined ?
            $.throttle(delay, atBegin, false) :
            $.throttle(delay, callback, atBegin !== false);
    };
}(jQuery, window, document));
