export const delay = (ms = 0): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const joinDataToSearch = (...fields: string[]): string => {
    return fields.join('').trim().replace(' ', '').toLocaleLowerCase()
}
