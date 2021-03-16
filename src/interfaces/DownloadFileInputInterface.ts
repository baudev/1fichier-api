export default interface DownloadFileInputInterface {
    url : string,
    inline? : boolean,
    cdn? : boolean,
    restrict_ip? : number,
    single? : boolean,
    pass? : string,
    no_ssl? : boolean,
    folder_id? : string,
    filename? : string,
    sharing_user? : string
}