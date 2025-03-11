let dia = "Lunes"

if (dia === "Lunes") console.log("QUé rollo ... Lunes ...")
if (dia === "Martes") console.log("MEnos rollo ... pero Martes ...")
if (dia === "Miércoles") console.log("Bueno ... Miércoles ...")
if (dia === "Jueves") console.log("Me canso ... Jueves ...")
if (dia === "Viernes") console.log("me canso ... Miércoles ...")


switch (dia) {

    case "Lunes":
        console.log("QUé rollo ... Lunes ...")
        break
    case "Martes":
        console.log("MEnos rollo ... pero Martes ...")
        break
    case "Miercoles":
        console.log("Bueno ... Miércoles ...")
        break
    case "Jueves":
        console.log("Me canso ... Jueves ...")
        break
    case "Viernes":
        console.log("Bien!!! ... Viernes ...")
        break
    case "Sábado":
    case "Domingo":
        console.log("A Descansar ...")
        break
    default:
        console.log("No hay día de la semana")
}