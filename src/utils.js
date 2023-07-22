const debounce = (cb, time) => {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => cb(...args), time)
    }
}

export {debounce}
