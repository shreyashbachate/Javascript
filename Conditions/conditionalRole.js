var user = "admin";

switch (user) {
    case "admin":
        console.log("You can get full access");
        break;

    case "subadmin":
        console.log("You can add courses");
        break;

    case "testprep":
        console.log("You can add tests");
        break;

    case "user":
        console.log("You can consume courses");
        break;

    default:
        console.log("default");
        break;
}