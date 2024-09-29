function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase);
    else
        console.log("Hola");
}

console.log(greet(undefined));
