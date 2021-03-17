# 1fichier API

This library is designed for interactions with the [1fichier API](https://1fichier.com/api.html).

# Installation

```
npm install 1fichier-api
```

# Usage

### `API1fichier`  

`constructor(token: string)`

Configure the library to use the specified settings.  

- `token` - *string* : The user private token.

`downloadFile(settings: DownloadFileInputInterface)`

Returns the download link for the specified file

- `settings` - *DownloadFileInputInterface*: The file specification.

- `returns` - *DownloadFileOuputInterface*

- `throw` *API1FichierResponseNotOk(statusCode: number, message: string)*: If the api returns an error.

`copyFile(settings: CopyFileInputInterface)`

Imports the file to your personnal account

- `settings` - *CopyFileInputInterface*: The files to import and where to store them.

- `returns` - *CopyFileOutputInterface*

- `throw` *API1FichierResponseNotOk(statusCode: number, message: string)*: If the api returns an error.

`editFile(settings: EditFileInputInterface)`

Edits the file attributes

- `settings` - *EditFileInputInterface*: The attributes to be changed and the files concerned.

- `returns` - EditFileOuputInterface*

- `throw` *API1FichierResponseNotOk(statusCode: number, message: string)*: If the api returns an error.

# TODO

- [ ] Add missing routes
- [ ] Add tests

Don't hesitate to contribute to the repository!