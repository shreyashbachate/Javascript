var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `I am ${name} admin`;
            break;
        case "subadmin":
            return `I am ${name} subadmin`;
            break;
        case "testprep":
            return `I am ${name} testprep`;
            break;
        case "user":
            return `I am ${name} user`;
            break;

        default:
            return `I am ${name} trial`;
            break;
    }
}

console.log(getUserRole("Shreyash", "admin"));
var temp = getUserRole("Shreyash", "admin");
console.log(temp);