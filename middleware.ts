export { default } from "next-auth/middleware";

export const config = {

    // *: zero or more parameters
    // +: one or more parameters
    // ?: zero or one parameters

    // :path* to secure access to all paths to dashbaord
    matcher:[
        '/users/:id*',
        '/dashboard/:path*'
    ]
}
