export default interface DownloadFileInputInterface {
    url : string,
    inline? : 0 | 1,
    cdn? : 0 | 1,
    restrict_ip? : number,
    single? : 0 | 1,
    pass? : string,
    no_ssl? : 0 | 1,
    folder_id? : string,
    filename? : string,
    sharing_user? : string
}