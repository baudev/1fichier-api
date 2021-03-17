import fetch from "node-fetch"
import API1FichierResponseNotOk from "./exceptions/Api1FichierResponseNotOk";
import CopyFileInputInterface from "./interfaces/CopyFileInputInterface";
import DownloadFileInputInterface from "./interfaces/DownloadFileInputInterface";
import EditFileInputInterface from "./interfaces/EditFileInputInterface";

export default class API1fichier {

    private token: string;

    /**
     * Constructor of API1fichier
     * @param token The secret user token
     */
    constructor(token: string) {
        this.token = token;
    }

    /**
     * Imports the file to your personnal account
     * @param settings 
     * @returns {Promise<CopyFileOutputInterface>}
     */
    public copyFile(settings: CopyFileInputInterface) {
        return this.apiCall('/file/cp.cgi', {
            method: 'POST',
            body: JSON.stringify(settings)
        })
    }

    /**
     * Returns the download link
     * @param settings 
     * @returns {Promise<DownloadFileOuputInterface>}
     */
    public downloadFile(settings: DownloadFileInputInterface) {
        return this.apiCall('/download/get_token.cgi', {
            method: 'POST',
            body: JSON.stringify(settings)
        })
    }

    /**
     * Edits the file attributes
     * @param settings 
     * @returns {Promise<EditFileOuputInterface>}
     */
    public editFile(settings: EditFileInputInterface) {
        return this.apiCall('/file/chattr.cgi', {
            method: 'POST',
            body: JSON.stringify(settings)
        })
    }

    /**
     * Makes a request to the v1 1fichier API
     * @param endpoint Url endpoint e.g /download/get_token.cgi
     * @param options Request options like method or body
     * @returns {Promise<JSON>} The json response
     */
    private apiCall(endpoint: string, options: {}) {
        options = {...options, 
            headers: {
                Authorization: "Bearer " + this.token,
                "Content-Type": "application/json"
            },}
        console.log(options)
        let apiURL = "https://api.1fichier.com/v1" + endpoint;
        return new Promise(((resolve, reject) => {
            fetch(apiURL, options)
                .then(async (rep) => {
                    let json = await rep.json();
                    if(rep.ok) { // status OK/KO is not always reliable...
                        return resolve(json);
                    } else {
                        throw new API1FichierResponseNotOk(rep.status, json['message'])
                    }
                })
                .catch((e: API1FichierResponseNotOk) => reject(e));
        }));
    }

}