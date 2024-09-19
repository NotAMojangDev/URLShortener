import { customAlphabet } from "nanoid";

export function generateIDCustom(length: number): String {
    const alphabet =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_=*$";

    const nanoid = customAlphabet(alphabet, length);
    return nanoid();
}

export function generateStandardID(): String {
    return generateIDCustom(10);
}
