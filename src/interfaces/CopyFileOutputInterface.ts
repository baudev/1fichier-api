export default interface CopyFileOutputInterface {
    status : "OK" | "KO",
    copied : number,
    urls: {
        from_url: string,
        to_url: string
    }[],
    filename: string
}