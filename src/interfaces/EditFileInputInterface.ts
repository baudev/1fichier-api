export default interface EditFileInputInterface {
    urls: string[],
    filename?: string,
    description?: string,
    pass?: string,
    no_ssl?: 0 | 1,
    inline?: 0 | 1,
    cdn?: 0 | 1,
    acl?: {
      ip?: string[],
      country?: string[],
      email?: string[],
      premium?: 0 | 1
    }
}