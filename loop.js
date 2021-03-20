function loop(value, test, update, body) {
    for(let x = value; test(x); x = update(x)) {
        body(x);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);