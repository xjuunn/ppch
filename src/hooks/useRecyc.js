export const recyc10 = () => {
    setTimeout(() => {
        
    }, 10);
}

export const recyc2 = () => {
    setTimeout(() => {

    }, 2);
}
let recycMap10 = new Map();
let recycMap2 = new Map();
export const addRecycle10 = (key,handler) => {
    recyc10.set(key,handler);
}
export const addRecycle2 = (key,handler) => {
    recyc2.set(key,handler);
}
