export const loginFormOptions = {
    email: {
        required: "The email is required.",
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email format."
        }
    },
    password: {
        required: "The password is required."
    }
}