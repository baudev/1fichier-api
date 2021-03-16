# 1fichier API

This library is designed for interactions with the [1fichier API](https://1fichier.com/api.html).

# Installation

TODO

# Usage

### `API1fichier`  

`constructor(token: string)`

Configure the library to use the specified settings.  

- `token` - string : The user private token.

`downloadFile(settings: DownloadFileInputInterface)`

Returns the download link for the specified file

- `settings` - DownloadFileInputInterface : The file specification.

- `throw API1FichierResponseNotOk(statusCode: number, message: string)` if the api returns an error.